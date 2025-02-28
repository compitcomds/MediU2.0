import shopifyClient from "../shopify-client";
import { type ProductBasicDetailsType } from "./get-products-by-handle";

const getProductsByTagQuery = `
query getProductsByTagQuery($query: String) {
  products(first: 20, query: $query) {
    nodes {
      handle
      description
      title
      featuredImage {
        url
        altText
      }
      compareAtPriceRange {
        minVariantPrice {
          amount
          currencyCode
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
    }
  }
}
`;

export default async function getProductsByTag(tag: string) {
  const { data } = await shopifyClient.request(getProductsByTagQuery, {
    variables: { query: `(tag:${tag})` },
  });
  if (!data.products || !data.products.nodes) return [];
  const products = data.products.nodes as any[];
  return products.map((prod) => parseProduct(prod));
}

function parseProduct(product: any) {
  const variantId =
    product.variants.nodes.length > 0 ? product.variants.nodes[0].id : "";
  return {
    ...product,
    variantId,
    price: {
      amount: parseFloat(product.priceRange.minVariantPrice.amount),
      currencyCode: product.priceRange.minVariantPrice.currencyCode,
    },
    compareAtPrice: {
      amount: parseFloat(product.compareAtPriceRange.minVariantPrice.amount),
      currencyCode: product.compareAtPriceRange.minVariantPrice.currencyCode,
    },
  } as ProductBasicDetailsType;
}
