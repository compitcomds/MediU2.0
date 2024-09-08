import shopifyClient from "./shopify-client";

const fetchProductsQuery = `
query fetchProductsQuery($after: String) {
  products(first: 100, after: $after) {
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

export const fetchProducts = async (after?: string) => {
  const { data } = await shopifyClient.request(fetchProductsQuery, {
    variables: { after },
  });
  const pageInfo = data?.products?.pageInfo;
  const nodes = data?.products?.nodes;
  if (nodes) {
    const products = nodes.map((node: any) => ({
      handle: node.handle,
      id: node.id,
      title: node.title,
      description: node.descriptionHtml,
      image: node.images.edges[0]?.node.url || "", // Image URL
      altText: node.images.edges[0]?.node.altText || "Product Image",
      price: node.priceRange.minVariantPrice.amount,
      currency: node.priceRange.minVariantPrice.currencyCode,
    }));
    // console.log("this is product",products)
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
