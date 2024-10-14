import shopifyClient from "./shopify-client";

const fetchProductsQuery = `
query fetchProductsQuery($after: String, $query: String) {
  products(first: 60, after: $after, query: $query) {
    nodes {
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
    pageInfo {
      hasNextPage
      endCursor
      hasPreviousPage
      startCursor
    }
  }
}
`;

export const fetchProducts = async ({
  after,
  query,
}: {
  after?: string;
  query?: string;
}) => {
  const { data } = await shopifyClient.request(fetchProductsQuery, {
    variables: { after: after || null, query: `(-product_type:Consultancy) AND ${query}` },
  });
  const pageInfo = data?.products?.pageInfo;
  const nodes = data?.products?.nodes;
  if (nodes) {
    const products = nodes.map((node: any) => ({
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
        (collectionNode: any) => collectionNode.handle
      ),
    }));
    return {
      products,
      pageInfo: {
        ...pageInfo,
        endCursor: pageInfo.hasNextPage ? pageInfo.endCursor : null,
      },
    };
  }

  throw new Error("Failed to fetch products.");
};
