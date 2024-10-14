import shopifyClient from "../shopify-client";

const updateCartNoteQuery = `
mutation updateCartNote($cartId: ID!, $note: String!) {
  cartNoteUpdate(cartId: $cartId, note: $note) {
    cart {
      note
    }
  }
}
`;

export default async function updateCartNote(cartId: string, note: string) {
  const { data, errors, extensions } = await shopifyClient.request(
    updateCartNoteQuery,
    {
      variables: { cartId, note },
    }
  );

  if (data?.cartNoteUpdate?.cart?.note) return data.cartNoteUpdate.cart;

  throw new Error("Unable to update the note. Please try again later.");
}
