import getProductHandles from "~/shopify/shop/get-product-handles";

export default defineSitemapEventHandler(async (event) => {
  const productHandles = await getProductHandles();
  const sitemap = productHandles.map((handle) => ({
    loc: handle,
  }));
  console.log(sitemap);
  return sitemap;
});
