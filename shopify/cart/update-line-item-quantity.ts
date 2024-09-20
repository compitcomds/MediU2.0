import shopifyClient from "../shopify-client";

const updateLineItemQuantityMutation = `
mutation updateLineItemQuantity($cartId: ID!, $lineId: ID!, $quantity: Int) {
  updatedCart: cartLinesUpdate(cartId: $cartId, lines: {id: $lineId, quantity: $quantity}) {
    cart {
      id
      cost {
        subtotalAmount {
            amount
            currencyCode
        }
        totalAmount {
            amount
            currencyCode
        }
        totalDutyAmount {
            amount
            currencyCode
        }
      }
    }
    userErrors {
      code
      field
      message
    }
  }
}
`;

const removeCartLineItemMutation = `
mutation removeCartLineMutation($cartId: ID!, $lineId: ID!) {
  updatedCart: cartLinesRemove(cartId: $cartId, lineIds: [$lineId]) {
    cart {
      checkoutUrl
    }
    userErrors {
      code
      field
      message
    }
  }
}
`;

export default async function updateLineItemQuantity({
  lineId,
  quantity,
  cartId,
}: {
  lineId: string;
  quantity: number;
  cartId: string;
}) {
  const { data, errors } = await shopifyClient.request(
    quantity > 0 ? updateLineItemQuantityMutation : removeCartLineItemMutation,
    quantity > 0
      ? { variables: { cartId, lineId, quantity } }
      : { variables: { cartId, lineId } }
  );

  const cart = data?.updatedCart?.cart;

  if (cart?.id) {
    return {
      subtotalAmount: cart.cost.subtotalAmount,
      totalDutyAmount: cart.cost.totalDutyAmount,
      totalAmount: cart.cost.totalAmount,
    };
  }

  console.log(data, errors);

  if (data.updatedCart?.userErrors?.length > 0) {
    throw new Error(
      data.updatedCart.userErrors.map((error: any) => error.message).join(", ")
    );
  }

  if (errors) {
    console.log("updateLineItemQuantity Errors.");
    console.log(errors);
    throw new Error(
      "Error while attachUserIdentityToCart. (Probably some error in implementation, see for yourself)."
    );
  }
}
