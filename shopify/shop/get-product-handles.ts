import shopifyClient from "../shopify-client";

const productHandlesQuery = `
query productHandlesQuery {
  products(first: 250){
    nodes{
      handle
    }
  }
}
`;

export default async function getProductHandles() {
  const { data } = await shopifyClient.request(productHandlesQuery);
  if (!data.products) return [];
  return data.products.nodes.map(
    (node: any) => `/shop/product/${node.handle}`,
  ) as string[];
}
