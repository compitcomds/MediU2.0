import shopifyClient from "./shopify-client";

const prouductMetaDataQuery = `
query getProductMetadataQuery($handle: String!) {
  product(handle: $handle) {
    title
    description
    tags
    featuredImage{
      url
      altText
    }
    seo {
      description
      title
    }
  }
}
`;
export default async function getProductMetadata(handle: string) {
  const { data } = await shopifyClient.request(prouductMetaDataQuery, {
    variables: { handle },
  });
  const product = data.product;
  if (!data.product)
    return {
      title: "Invalid Product",
      description: "Invalid Product",
      featuredImage: {
        url: "https://ccdstest.b-cdn.net/Medi%20u/home%20bg/mediu%20bg3%402x.jpg",
        altText: "Mediu | Product Not Found",
      },
    };
  return {
    title: product.seo?.title || product.title,
    description: product.seo?.description || product.description,
    featuredImage: (product.featuredImage as {
      url: string;
      altText: string;
    }) || {
      url: "https://ccdstest.b-cdn.net/Medi%20u/home%20bg/mediu%20bg3%402x.jpg",
      altText: "Mediu | Product Image Not Found",
      tags: product.tags,
    },
  };
}
