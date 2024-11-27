import { defineEventHandler } from "h3";
import getCartDataForCheckout from "~/shopify/cart/get-cart-data-for-checkout";
import { createOrderDocument } from "~/appwrite/orders";
import getPhonepayCheckout from "../utils/get-phonepay-checkout";

const PHONEPAY_PAYMENT_CALLBACK_URL = process.env
  .PHONEPAY_PAYMENT_CALLBACK_URL as string;
const PHONEPAY_REDIRECT_URL = process.env.PHONEPAY_REDIRECT_URL as string;
const PHONEPAY_REDIRECT_METHOD = process.env.PHONEPAY_REDIRECT_METHOD as string;

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const cartId = body.cart;
  const userId = body.userId;
  const prescriptionUrl = body.prescriptionUrl;
  const typeOfProduct = body.type;

  try {
    if (!cartId) throw new Error("Invalid cartid.");
    const cartData = await getCartDataForCheckout(cartId);
    if (!cartData) throw new Error("Invalid cart data.");

    const { transactionId, instrumentResponse } = await getPhonepayCheckout({
      userId: userId,
      amount: cartData.totalAmount.amount,
      name: `${cartData.buyerIdentity.deliveryAddressPreferences[0].firstName} ${cartData.buyerIdentity.deliveryAddressPreferences[0].lastName}`,
      phone: cartData.buyerIdentity.deliveryAddressPreferences[0].phone || "",
      callbackUrl: PHONEPAY_PAYMENT_CALLBACK_URL,
      redirectUrl: PHONEPAY_REDIRECT_URL,
      redirectMode: PHONEPAY_REDIRECT_METHOD,
    });

    await createOrderDocument({
      userId,
      transactionId,
      shopifyCartId: cartId,
      prescriptionUrl,
      typeOfProduct,
    });

    return instrumentResponse.redirectInfo;
  } catch (err: any) {
    console.error("Error occurred:", err);
    return {
      error: err.message || `An error occurred while processing your request`,
    };
  }
});
