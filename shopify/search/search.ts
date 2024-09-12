import shopifyClient from "../shopify-client";

const searchQuery = `
query searchQuery($query: String = "") {
  search(query: $query, first: 10) {
    nodes {
      ... on Product {
        handle
        tags
        images(first: 10) {
          nodes {
            altText
            url
            width
            height
          }
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        title
        options {
          values
          name
        }
      }
    }
  }
}
`;

type ShopifyProductFromMutlitpleProductsType = {
  handle: string;
  tags: string;
  images: {
    nodes: Array<{
      url: string;
      altText: string;
      width: number;
      height: number;
    }>;
  };
  priceRange: {
    minVariantPrice: { amount: string; currencyCode: string };
  };
  title: string;
  options: Array<{ name: string; values: string[] }>;
};

export default async function shopifySearchProducts(query: string) {
  const { data } = await shopifyClient.request(searchQuery, {
    variables: { query },
  });

  if (data?.search?.nodes)
    return data.search.nodes as ShopifyProductFromMutlitpleProductsType[];

  throw new Error("Unable to fetch products. Please try again later.");
}
