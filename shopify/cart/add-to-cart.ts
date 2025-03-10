import shopifyClient from "../shopify-client";
import createShopifyCart from "./create-cart";
import updateLineItemQuantity from "./update-line-item-quantity";

const addToCartMutation = `
mutation addToCartMutation($cartId: ID!, $lines: [CartLineInput!]!) {
  cartLinesAdd(cartId: $cartId, lines: $lines) {
    cart {
      id
      lines(first: 100) {
        nodes {
          id
          quantity
          merchandise {
            ... on ProductVariant {
              id
            }
          }
        }
      }
    }
    userErrors {
      message
      field
      code
    }
  }
}
`;

export default async function addToCart({
  merchandiseId,
  cartId,
  quantity,
  dontAddToNavbarCart,
}: {
  merchandiseId: string;
  cartId: string;
  quantity?: number;
  dontAddToNavbarCart?: boolean;
}) {
  const { data, errors } = await shopifyClient.request(addToCartMutation, {
    variables: { cartId, lines: [{ merchandiseId, quantity: quantity || 1 }] },
  });

  if (data?.cartLinesAdd?.cart?.id) {
    const nodes = data.cartLinesAdd.cart.lines.nodes as any[];
    const nodeWithZeroQuantity = nodes.find(
      (node: any) =>
        node.merchandise.id === merchandiseId && node.quantity === 0,
    );
    if (!dontAddToNavbarCart) {
      const shopStore = useShopStore();
      shopStore.updateTotalItemsInShop(
        !!nodeWithZeroQuantity ? nodes.length - 1 : nodes.length,
      );
    }
    if (nodeWithZeroQuantity) {
      await updateLineItemQuantity({
        lineId: nodeWithZeroQuantity.id,
        quantity: 0,
        cartId,
      });
      throw new Error("Looks like the product is out of stock.");
    }
  }

  if (data.cartLinesAdd?.userErrors?.length > 0) {
    const cart = await createShopifyCart();
    const store = useUserStore();
    store.shopifyCartId = cart.id;
    return await addToCart({ merchandiseId, cartId: cart.id, quantity });
  }

  if (errors) {
    console.log(errors);
    throw new Error("Error while addToCart.");
  }
}
