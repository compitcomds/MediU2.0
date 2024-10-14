import shopifyClient from "../shopify-client";

const fetchConsultancyProductsQuery = `
query fetchConsultancyProductsQuery($query: String = "") {
  products(first: 60, query: $query) {
    nodes {
      id
      title
      descriptionHtml
      tags
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
`

export default async function fetchConsultancyProducts(query?: string){
    const {data} = await shopifyClient.request(fetchConsultancyProductsQuery, {
        variables: {query: !query? `product_type:Consultancy` : `(product_type:Consultancy) AND ${query}`}
    })

    if(data?.products?.nodes.length >= 0){
        return data.products.nodes.map((node: any) => ({...node, price: node.priceRange.minVariantPrice, id: node.variants.nodes[0].id, productId: node.id})) as Array<{
            id: string;
            title: string;
            descriptionHtml: string;
            price: {amount: string; currencyCode: string;};
            productId: string;
            tags: string[];
        }>
    }

    return []
}