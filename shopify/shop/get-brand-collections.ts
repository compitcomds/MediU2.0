import shopifyClient from "../shopify-client";

const getAllCollectionsQuery = `
query getAllCollectionsQuery {
  collections(first: 150) {
    nodes {
      handle
      title
      isBrandCollection: metafield(key: "isBrandCollection", namespace: "custom") {
        value
      }
    }
    totalCount
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
`;

export default async function getAllBrandCollections(): Promise<
  Array<{ handle: string; title: string }>
> {
  const { data } = await shopifyClient.request(getAllCollectionsQuery);

  const nodes = data.collections.nodes;
  return nodes.filter(
    (node: any) =>
      !!node.isBrandCollection && node.isBrandCollection.value === "true",
  );
}
