import { createStorefrontApiClient } from "@shopify/storefront-api-client";

const shopifyClient = createStorefrontApiClient({
  storeDomain: String(import.meta.env.VITE_SHOPIFY_STORE_DOMAIN),
  apiVersion: String(import.meta.env.VITE_SHOPIFY_API_VERSION),
  publicAccessToken: String(import.meta.env.VITE_SHOPIFY_PUBLIC_ACCESS_TOKEN),
});

export default shopifyClient;
