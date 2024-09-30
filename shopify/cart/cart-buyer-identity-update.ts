import shopifyClient from "../shopify-client";
import { type MailingAddressInput } from "../_types/cart";

const cartUpdateBuyerDetails = `
mutation cartUpdateBuyerDetails($cartId: ID!, $email: String!, $deliveryAddress: MailingAddressInput) {
  cartBuyerIdentityUpdate(
    buyerIdentity: {deliveryAddressPreferences: [{deliveryAddress: $deliveryAddress}], email: $email}
    cartId: $cartId
  ) {
    cart {
      checkoutUrl
      id
    }
  }
}
`;

export default async function updateCartBuyerDetails(
  cartId: string,
  email: string,
  deliveryAddress: MailingAddressInput
) {
  if (!cartId) {
    console.error(new Error("Invalid cart id."));
    return;
  }

  const { data, errors } = await shopifyClient.request(cartUpdateBuyerDetails, {
    variables: { cartId, email, deliveryAddress },
  });

  if (data?.cartBuyerIdentityUpdate?.cart?.checkoutUrl)
    return data.cartBuyerIdentityUpdate.cart as {
      checkoutUrl: string;
      id: string;
    };

  console.log(errors);
  throw new Error(
    "Error while updating the details of the user. Please try again later."
  );
}
