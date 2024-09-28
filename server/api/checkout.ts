import { defineEventHandler } from "h3";
import axios from "axios";
import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";

const PHONEPAY_API_URL = process.env.PHONEPAY_API_URL;
const PHONEPAY_API_KEY = process.env.PHONEPAY_API_KEY;
const MERCHANT_ID = "PGTESTPAYUAT";
const PHONEPAY_API_KEY_INDEX = "1";

export default defineEventHandler(async () => {
  try {
    if (!PHONEPAY_API_KEY || !PHONEPAY_API_URL) {
      return { error: "Missing environment variables" };
    }

    const transactionId = uuidv4().slice(0, 33);
    const data = {
      merchantId: MERCHANT_ID,
      merchantTransactionId: transactionId,
      merchantUserId: "!@M",
      name: "Vikas",
      amount: 100 * 100,
      redirectUrl: "http://localhost:3000/",
      redirectMode: "POST",
      mobileNumber: "+918302320275",
      paymentInstrument: { type: "PAY_PAGE" },
    };

    const payload = JSON.stringify(data);
    const payloadMain = Buffer.from(payload).toString("base64");
    const keyIndex = parseInt(PHONEPAY_API_KEY_INDEX || "1");
    const string = payloadMain + "/pg/v1/pay" + PHONEPAY_API_KEY;
    const sha256 = crypto.createHash("sha256").update(string).digest("hex");
    const checksum = sha256 + "###" + keyIndex;

    console.log(checksum);
    console.log(payloadMain);

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

    console.log(apiResponse);

    return { message: "Successfully done!" };
  } catch (err) {
    console.error("Error occurred:", err);
    return { error: "An error occurred while processing your request." };
  }
});

const SHOPIFY_URL = `https://${process.env.NEXT_PUBLIC_STORE_DOMAIN}/admin/api/${process.env.SHOPIFY_ADMIN_API_VERSION}`;
const SHOPIFY_ADMIN_ACCESS_TOKEN = String(
  process.env.SHOPIFY_ADMIN_API_ACCESS_TOKEN
);

async function processOrder(paymentObject: any) {
  if (!paymentObject) return new Response("404", { status: 404 });

  const cartId = paymentObject.metadata.cartId;
  if (!cartId) return new Response("404", { status: 404 });

  const cartData: any = {};

  if (!cartData) return new Response("Invalid cart value.", { status: 400 });

  const { buyerIdentity, items, totalAmount, subtotalAmount, discountCodes } =
    cartData;

  const billing_and_shipping_address: any = {
    ...buyerIdentity.deliveryAddressPreferences[0],
    first_name: buyerIdentity.deliveryAddressPreferences[0].firstName,
    last_name: buyerIdentity.deliveryAddressPreferences[0].lastName,
  };

  delete billing_and_shipping_address.firstName;
  delete billing_and_shipping_address.lastName;

  const order: Record<string, any> = {
    line_items: items.map((item: any) => ({
      variant_id: item.id.replace("gid://shopify/ProductVariant/", ""),
      quantity: item.quantity,
    })),
    tax_lines: [
      {
        price: `${totalAmount.amount - subtotalAmount.amount}`,
        title: "Total Tax",
      },
    ],
    total_tax: `${totalAmount.amount - subtotalAmount.amount}`,
    customer: {
      first_name: buyerIdentity.customer.firstName,
      last_name: buyerIdentity.customer.lastName,
      email: buyerIdentity.customer.email,
    },

    billing_address: billing_and_shipping_address,
    shipping_address: billing_and_shipping_address,
    email: buyerIdentity.email || buyerIdentity.customer.email,
    transactions: [
      {
        kind: "sale",
        status: "success",
        amount: totalAmount.amount,
        currency_code: totalAmount.currencyCode,
      },
    ],
    financial_status: "paid",
    send_receipt: true,
    inventory_behaviour: "decrement_obeying_policy",
  };

  if (discountCodes.length > 0 && discountCodes[0].applicable)
    order["discount_codes"] = [
      {
        code: discountCodes[0].code,
        amount: 0,
        type: "fixed_amount",
      },
    ];

  const orderResponse = await fetch(`${SHOPIFY_URL}/orders.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": SHOPIFY_ADMIN_ACCESS_TOKEN,
    },
    body: JSON.stringify({
      order: order,
    }),
  });

  //   await resetCart(
  //     cartId,
  //     items.map((item) => item.lineId)
  //   );
}
