import shopifyClient from "../shopify-client";

const productRecommendationsQuery = `
query productRecommendationsQuery($productId:ID!) {
  productRecommendations(productId: $productId) {
    title
    handle
    featuredImage {
      url
      altText
      height
      width
    }
    priceRange {
      minVariantPrice {
        amount
        currencyCode
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
`;

export default async function getProductRecommendations(
  productId: string,
): Promise<
  Array<{
    featuredImage: {
      url: string;
      altText: string;
      height: number;
      width: number;
    };
    handle: string;
    priceRange: {
      minVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
    compareAtPriceRange: {
      minVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
    title: string;
  }>
> {
  const { data, errors } = await shopifyClient.request(
    productRecommendationsQuery,
    {
      variables: { productId },
    },
  );
  console.log(errors);
  return data?.productRecommendations || [];
}
