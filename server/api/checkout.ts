import { defineEventHandler } from "h3";
import axios from "axios";
import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";
import getCartDataForCheckout from "~/shopify/cart/get-cart-data-for-checkout";
import { createOrderDocument } from "~/appwrite/orders";

const PHONEPAY_API_URL = process.env.PHONEPAY_API_URL;
const PHONEPAY_API_KEY = process.env.PHONEPAY_API_KEY;
const MERCHANT_ID = process.env.PHONEPAY_MERCHANT_ID;
const PHONEPAY_API_KEY_INDEX = process.env.PHONEPAY_API_KEY_INDEX;
const PHONEPAY_PAYMENT_CALLBACK_URL = process.env.PHONEPAY_PAYMENT_CALLBACK_URL;

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const cartId = body.cart;
  const userId = body.userId;
  try {
    if (!PHONEPAY_API_KEY || !PHONEPAY_API_URL) {
      return { error: "Missing environment variables" };
    }

    if (!cartId) throw new Error("Invalid cartid.");

    const cartData = await getCartDataForCheckout(cartId);

    if (!cartData) throw new Error("Invalid cart data.");

    const transactionId = uuidv4().slice(0, 33);
    const data = {
      merchantId: MERCHANT_ID,
      merchantTransactionId: transactionId,
      merchantUserId: userId,
      name: `${cartData.buyerIdentity.deliveryAddressPreferences[0].firstName} ${cartData.buyerIdentity.deliveryAddressPreferences[0].lastName}`,
      amount: cartData.totalAmount.amount * 100,
      callbackUrl: "http://localhost:3000/api/checkout/confirm",
      redirectUrl: "http://localhost:3000/api/checkout/confirm",
      redirectMode: "POST",
      mobileNumber: cartData.buyerIdentity.deliveryAddressPreferences[0].phone,
      paymentInstrument: { type: "PAY_PAGE" },
    };

    if (data.amount <= 0) throw new Error("Amount can't be zero.");

    const payload = JSON.stringify(data);
    const payloadMain = Buffer.from(payload).toString("base64");
    const keyIndex = parseInt(PHONEPAY_API_KEY_INDEX || "1");
    const string = payloadMain + "/pg/v1/pay" + PHONEPAY_API_KEY;
    const sha256 = crypto.createHash("sha256").update(string).digest("hex");
    const checksum = sha256 + "###" + keyIndex;

    const apiResponse = await axios.request({
      url: PHONEPAY_API_URL,
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
      },
      data: { request: payloadMain },
    });

    await createOrderDocument({
      userId,
      transactionId,
      shopifyCartId: cartId,
    });

    const instrumentResponse = await apiResponse.data.data.instrumentResponse;

    console.log("REDIRECTING TO PAYMENT PAGE >>>>>>>>>>>>>>>>>>");
    return instrumentResponse.redirectInfo;
  } catch (err) {
    console.error("Error occurred:", err);
    return { error: "An error occurred while processing your request." };
  }
});
