import getCartDataForCheckout from "~/shopify/cart/get-cart-data-for-checkout";
import resetCart from "~/shopify/cart/reset-cart";
import CreatedOrderType from "../types/created-order-type";

const SHOPIFY_URL = `https://dev-mediu.myshopify.com/admin/api/2024-04`;
const SHOPIFY_ADMIN_ACCESS_TOKEN = process.env
  .SHOPIFY_ADMIN_ACCESS_TOKEN as string;

export default async function processOrderInShopify(
  cartId: string,
  props: {
    prescriptionUrl: string;
    appwriteOrderId: string;
    walletAmountUsed?: number;
  },
  paymentStatus?: "paid" | "pending",
) {
  if (!cartId) return new Response("404", { status: 404 });

  const cartData = await getCartDataForCheckout(cartId);

  if (!cartData) return new Response("Invalid cart value.", { status: 400 });

  const { buyerIdentity, items, totalAmount, discountAllocations } = cartData;

  const billing_and_shipping_address: any = {
    ...buyerIdentity.deliveryAddressPreferences[0],
    first_name: buyerIdentity.deliveryAddressPreferences[0].firstName,
    last_name: buyerIdentity.deliveryAddressPreferences[0].lastName,
  };

  delete billing_and_shipping_address.firstName;
  delete billing_and_shipping_address.lastName;

  const metafields = getMetafieldsArrayFromProps(props);

  const taxAmount = 0;

  const order: Record<string, any> = {
    line_items: items.map((item: any) => ({
      variant_id: item.id.replace("gid://shopify/ProductVariant/", ""),
      quantity: item.quantity,
    })),
    tax_lines: [
      {
        price: taxAmount,
        title: "Total Tax",
      },
    ],
    total_tax: taxAmount,
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
    transactions:
      paymentStatus === "paid"
        ? [
            {
              kind: "sale",
              status: "success",
              amount: totalAmount.amount,
              currency_code: totalAmount.currencyCode,
            },
          ]
        : [],
    financial_status: paymentStatus || "paid",
    send_receipt: true,
    inventory_behaviour: "decrement_obeying_policy",
    metafields,
  };

  const discounts = getAllDiscounts(discountAllocations);
  if (discounts.length > 0) {
    order["discount_codes"] = discounts;
  }

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

  if (orderBody?.errors) {
    console.log(orderBody.errors);
    throw new Error("Error occurred. Please contact us to resolve this.");
  }

  await resetCart(
    cartId,
    items.map((item: any) => item.lineId),
  );

  return {
    ...orderBody.order,
    name: `${order.customer.first_name} ${order.customer.last_name}`,
  } as CreatedOrderType;
}

function getMetafieldsArrayFromProps(props: {
  prescriptionUrl: string;
  appwriteOrderId: string;
  walletAmountUsed?: number;
}) {
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

  if (!!props.walletAmountUsed && props.walletAmountUsed > 0) {
    metafields.push({
      key: "walletAmountUsed",
      value: props.walletAmountUsed,
      type: "number_decimal",
      namespace: "custom",
    });
  }

  return metafields;
}

function getAllDiscounts(
  discountAllocations: {
    __typename:
      | "CartCodeDiscountAllocation"
      | "CartAutomaticDiscountAllocation";
    code?: string;
    title?: string;
    discountedAmount: {
      amount: string;
      currencyCode: string;
    };
  }[],
) {
  const discounts: {
    code: string;
    amount: string | number;
    type: "fixed_amount";
  }[] = [];

  // cart coupon discounts
  if (discountAllocations.length > 0) {
    discountAllocations.forEach((discount) => {
      discounts.push({
        code: discount.code || discount.title || "",
        amount: discount.discountedAmount.amount,
        type: "fixed_amount",
      });
    });
  }

  return discounts;
}
