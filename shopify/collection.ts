import shopifyClient from "./shopify-client";

const fetchProductsByCollectionQuery = `
  query fetchProductsByCollection($collectionHandle: String!, $after: String) {
    collectionByHandle(handle: $collectionHandle) {
      products(first: 30, after: $after) {
        nodes {
          id
          title
          images(first: 1) {
            edges {
              node {
                url
                altText
              }
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;

export const fetchProductsByCollection = async (
  collectionHandle: string,
  after?: string
) => {
  try {
    console.log("Fetching products for collection handle:", collectionHandle);
    console.log("Variables:", { collectionHandle, after }); // Log variables

    const { data } = await shopifyClient.request(
      fetchProductsByCollectionQuery,
      {
        variables: { collectionHandle, after },
      }
    );

    console.log("API Response:", JSON.stringify(data, null, 2)); // Log the full API response

    if (!data || !data.collectionByHandle) {
      console.error("Collection not found in response:", data); // Log full data if collection is not found
      throw new Error(`Collection with handle ${collectionHandle} not found`);
    }

    const pageInfo = data.collectionByHandle.products.pageInfo;
    const nodes = data.collectionByHandle.products.nodes;

    if (!nodes || nodes.length === 0) {
      throw new Error(`No products found for collection ${collectionHandle}`);
    }

    const products = nodes.map((node: any) => ({
      id: node.id,
      title: node.title,
      image: node.images.edges[0]?.node.url || "", // Fetch the first image URL
      altText: node.images.edges[0]?.node.altText || "Product Image", // Fetch altText or fallback
    }));

    return {
      products,
      pageInfo: {
        ...pageInfo,
        endCursor: pageInfo.hasNextPage ? pageInfo.endCursor : null,
      },
    };
  } catch (error) {
    console.error(
      `Error fetching products for collection ${collectionHandle}:`,
      error
    );
    throw new Error(
      `Error fetching products for collection ${collectionHandle}: ${error}`
    );
  }
};
