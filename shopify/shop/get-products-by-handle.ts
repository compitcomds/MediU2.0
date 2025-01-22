import shopifyClient from "../shopify-client";

const productBasicDetailsQuery = `
query productBasicDetailsQuery($handle: String!) {
  product(handle: $handle) {
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
  }
}
`;

export type ProductBasicDetailsType = {
  handle: string;
  description: string;
  title: string;
  featuredImage: {
    url: string;
    altText: string;
  };
  compareAtPrice: {
    amount: number;
    currencyCode: string;
  };
  price: {
    amount: number;
    currencyCode: string;
  };
};

export default async function getProductsByHandle(handles: string[]) {
  const products: ProductBasicDetailsType[] = [];
  for (const handle of handles) {
    const prod = await getProductBasicDetails(handle);
    if (prod) products.push(prod);
  }
  return products;
}

export async function getProductBasicDetails(handle: string) {
  const { data } = await shopifyClient.request(productBasicDetailsQuery, {
    variables: { handle },
  });
  if (!data.product) return null;
  const product = data.product;
  return {
    ...product,
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
