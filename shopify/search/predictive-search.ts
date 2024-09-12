import shopifyClient from "../shopify-client";

const predictiveSearchQuery = `
query predictiveSearchQueryForProducts($query: String!) {
  predictiveSearch(query: $query) {
    products {
      handle
      title
    }
  }
}
`;

export default async function predictiveSearchProducts(query: string) {
  if (query.length < 3) return [];
  const { data } = await shopifyClient.request(predictiveSearchQuery, {
    variables: { query },
  });
  if (data?.predictiveSearch?.products) {
    return data.predictiveSearch.products as Array<{
      handle: string;
      title: string;
    }>;
  }

  console.log("Error occurred while searching...");

  return [];
}
