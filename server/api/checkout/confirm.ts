import { defineEventHandler } from "h3";
import getCartDataForCheckout from "~/shopify/cart/get-cart-data-for-checkout";
import { getOrderDocumentThroughTransactionId } from "~/appwrite/orders";
import resetCart from "~/shopify/cart/reset-cart";

const SHOPIFY_URL = `https://dev-mediu.myshopify.com/admin/api/2024-04`;
const SHOPIFY_ADMIN_ACCESS_TOKEN = "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";
const PHONEPAY_REDIRECT_SUCCESS_URL = String(
  process.env.PHONEPAY_REDIRECT_SUCCESS_URL,
);
const PHONEPAY_REDIRECT_ERROR_URL = String(
  process.env.PHONEPAY_REDIRECT_ERROR_URL,
);
export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    if (body.code !== "PAYMENT_SUCCESS") throw new Error("Payment failed...");
    const transactionId = body.transactionId;

    if (!transactionId) throw new Error("Invalid confirmation.");
    const { documents, total } =
      await getOrderDocumentThroughTransactionId(transactionId);
    if (total === 0) throw new Error("Invalid order.");

    await processOrder(documents[0].shopifyCartId, {
      prescriptionUrl: documents[0].prescriptionUrl || "",
      typeOfProduct: documents[0].typeOfProduct || "normal",
      appwriteOrderId: documents[0].$id || "N/A",
    });

    return sendRedirect(event, PHONEPAY_REDIRECT_SUCCESS_URL);
  } catch (error) {
    console.log(error);
    return sendRedirect(event, PHONEPAY_REDIRECT_ERROR_URL);
  }
});

async function processOrder(
  cartId: string,
  props: {
    prescriptionUrl: string;
    appwriteOrderId: string;
    typeOfProduct: string;
  },
) {
  if (!cartId) return new Response("404", { status: 404 });

  const cartData = await getCartDataForCheckout(cartId);

  if (!cartData) return new Response("Invalid cart value.", { status: 400 });

  const {
    buyerIdentity,
    items,
    totalAmount,
    subtotalAmount,
    totalTaxAmount,
    discountCodes,
  } = cartData;

  const billing_and_shipping_address: any = {
    ...buyerIdentity.deliveryAddressPreferences[0],
    first_name: buyerIdentity.deliveryAddressPreferences[0].firstName,
    last_name: buyerIdentity.deliveryAddressPreferences[0].lastName,
  };

  delete billing_and_shipping_address.firstName;
  delete billing_and_shipping_address.lastName;

  const metafields = [];

  if (!!props.prescriptionUrl)
    metafields.push({
      key: "prescriptionUrl",
      value: props.prescriptionUrl,
      type: "url",
      namespace: "custom",
    });

  if (!!props.appwriteOrderId)
    metafields.push({
      key: "appwriteOrderId",
      value: props.appwriteOrderId,
      type: "single_line_text_field",
      namespace: "custom",
    });

  if (!!props.typeOfProduct)
    metafields.push({
      key: "typeOfProduct",
      value: props.typeOfProduct,
      type: "single_line_text_field",
      namespace: "custom",
    });

  const order: Record<string, any> = {
    line_items: items.map((item: any) => ({
      variant_id: item.id.replace("gid://shopify/ProductVariant/", ""),
      quantity: item.quantity,
    })),
    tax_lines: [
      {
        price: totalTaxAmount.amount,
        title: "Total Tax",
      },
    ],
    total_tax: totalTaxAmount.amount,
    customer: {
      first_name:
        buyerIdentity?.customer?.firstName ||
        billing_and_shipping_address.first_name,
      last_name:
        buyerIdentity?.customer?.lastName ||
        billing_and_shipping_address.last_name,
      email: buyerIdentity.customer?.email || buyerIdentity.email,
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
    metafields,
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

  const orderBody = await orderResponse.json();
  console.log(orderBody);

  await resetCart(
    cartId,
    items.map((item: any) => item.lineId),
  );
}
