import shopifyClient from "./shopify-client";

const intialProductQuery = `
query productWithVariantsQuery($handle: String!) {
  product(handle: $handle) {
    availableForSale
    descriptionHtml
    description
    handle
    id
    title
    options {
      name
      values
    }
    images(first: 10) {
      nodes {
        url
        altText
        height
        width
      }
    }
    featuredImage {
      altText
      url
      width
      height
    }
    keyBenefits: metafield(key: "key_benefits", namespace: "custom") {
      value
    }
    howToUse: metafield(key: "how_to_use", namespace: "custom") {
      value
    }
    safetyInformationAndPrecaution: metafield(
      key: "safety_information_precaution"
      namespace: "custom"
    ) {
      value
    }
    otherInfo: metafield(key: "other_info", namespace: "custom") {
      value
    }
    variants(first: 10) {
      edges {
        node {
          id
          title
          availableForSale
          price {
            amount
            currencyCode
          }
          quantityAvailable
          selectedOptions {
            name
            value
          }
          image {
            url
            altText
            height
            width
          }
        }
      }
    }
    tags
  }
}
`;

const productVariantQuery = `
query ProductVariantQuery($handle: String!, $selectedOptions: [SelectedOptionInput!] = {name: "", value: ""}) {
  product(handle: $handle) {
    variantBySelectedOptions(
      selectedOptions: $selectedOptions
      ignoreUnknownOptions: true
      caseInsensitiveMatch: true
    ) {
      quantityAvailable
      id
      currentlyNotInStock
      image {
        url
        altText
        height
        width
      }
      price {
        amount
        currencyCode
      }
      selectedOptions {
        name
        value
      }
    }
  }
}
`;

export async function getInitalProductData(handle: string) {
  try {
    const { data } = await shopifyClient.request(intialProductQuery, {
      variables: { handle },
    });
    if (!data.product) throw new Error("Product could not be found.");
    const product = data.product as {
      handle: string;
      id: string;
      title: string;
      description: string;
      descriptionHtml: string;
      availableForSale: boolean;
      options: Array<{ name: string; values: string[] }>;
      keyBenefits: {
        value: string;
      };
      howToUse: {
        value: string;
      };
      safetyInformationAndPrecaution: {
        value: string;
      };
      otherInfo: {
        value: string;
      };
      featuredImage: {
        url: string;
        altText: string;
        width: number;
        height: number;
      };
      images: {
        nodes: Array<{
          url: string;
          altText: string;
          width: number;
          height: number;
        }>;
      };
      tags: string[];
    };
    const returnData = {
      ...product,
      images: product.images.nodes,
      currentlyNotInStock: false,
      productId: product.id,
    };

    return returnData;
  } catch (error) {
    console.error("Error fetching initial product data:", error);
    throw error;
  }
}

export async function getProductData(
  handle: string,
  options?: Record<string, string | string[]>
) {
  try {
    const initalProductData = await getInitalProductData(handle);

    const selectedOptions: Array<{ name: string; value: string }> = [];
    const toFetchOptions = Object.keys(options || {});
    for (const opt of initalProductData.options) {
      if (toFetchOptions.includes(opt.name) && options) {
        const optionValue = options[opt.name];
        const value = Array.isArray(optionValue) ? optionValue[0] : optionValue;
        selectedOptions.push({ name: opt.name, value });
        continue;
      }
      selectedOptions.push({ name: opt.name, value: opt.values[0] });
    }

    const { data } = await shopifyClient.request(productVariantQuery, {
      variables: { handle, selectedOptions },
    });

    if (!data?.product?.variantBySelectedOptions)
      throw new Error("Internal Server Error While Fetching Product Variant.");

    const variant = data.product.variantBySelectedOptions as {
      quantityAvailable: number;
      id: string;
      currentlyNotInStock: boolean;
      image: {
        url: string;
        altText: string;
        height: number;
        width: number;
      };
      price: {
        amount: string;
        currencyCode: string;
      };
      selectedOptions: Array<{
        name: string;
        value: string;
      }>;
    };

    return {
      ...initalProductData,
      ...variant,
      variantId: variant.id,
      quantityAvailable: variant.quantityAvailable,
      currentlyNotInStock: variant.currentlyNotInStock,
      variantImages: [variant.image],
      price: variant.price,
      selectedOptions: variant.selectedOptions,
    };
  } catch (error) {
    console.error("Error fetching product variant data:", error);
    throw error;
  }
}
