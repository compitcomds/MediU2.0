import getProductHandles from "~/shopify/shop/get-product-handles";

export default defineEventHandler(async (event) => {
  const productHandles = await getProductHandles();
  return productHandles.map((handle) => ({
    loc: handle,
    lastmod: new Date().toISOString(),
    changefreq: "daily",
    priority: 0.8,
  }));
});
