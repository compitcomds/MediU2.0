import shopifyClient from "../shopify-client";

const searchQuery = `
query searchQuery($query: String = "") {
  search(query: $query, first: 100) {
    nodes {
      ... on Product {
        handle
        id
        title
        descriptionHtml
        images(first: 1) {
          edges {
            node {
              url
              altText
            }
          }
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        variants(first: 1) {
          nodes {
            id
          }
        }
        collections(first: 100) {
          nodes {
            handle
          }
        }
        compareAtPriceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
      }
    }
  }
}
`;

export default async function shopifySearchProducts(query: string) {
  const { data } = await shopifyClient.request(searchQuery, {
    variables: { query },
  });

  if (data?.search?.nodes)
    return data.search.nodes.map((node: any) => ({
      handle: node.handle,
      productId: node.id,
      id: node.variants.nodes[0].id,
      title: node.title,
      description: node.descriptionHtml,
      image: node.images.edges[0]?.node.url || "", // Image URL
      altText: node.images.edges[0]?.node.altText || "Product Image",
      price: node.priceRange.minVariantPrice.amount,
      compareAtPrice: node.compareAtPriceRange.minVariantPrice.amount,
      currency: node.priceRange.minVariantPrice.currencyCode,
      collections: node.collections.nodes.map(
        (collectionNode: any) => collectionNode.handle,
      ),
    }));

  throw new Error("Unable to fetch products. Please try again later.");
}
