import { createStorefrontApiClient } from "@shopify/storefront-api-client";

export const useShopifyClient = () => {
  const { shopifyApiVersion, shopifyStoreDomain, shopifyPublicAccessToken } =
    useRuntimeConfig().public;

  const shopifyClient = useState("shopify-client", () =>
    createStorefrontApiClient({
      storeDomain: shopifyStoreDomain,
      apiVersion: shopifyApiVersion,
      publicAccessToken: shopifyPublicAccessToken,
    })
  );

  return shopifyClient.value;
};
