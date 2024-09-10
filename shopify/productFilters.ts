import shopifyClient from "./shopify-client";
const fetchProductFilters = `
query getFiltersQuery($handle: String = "all-products") {
  collection(handle: $handle) {
    products(first: 1) {
      filters {
        label
        values {
          label
        }
      }
    }
  }
}
`;

export async function getFilters() {
  const { data, errors } = await shopifyClient.request(fetchProductFilters);
  console.log("Filters Data:", data);

  if (errors) {
    throw new Error("Failed to fetch filters");
  }

  // Transform the data into the expected format for price and color
  const filters = {
    priceRanges: [],
    Availability: [],
    Brand: [],
    Manufacturers: []
  };

//   if (!data.collection || !data.collection.products || !data.collection.products.filters) {
//     throw new Error("Collection or products not found");
//   }

  data.collection.products.filters.forEach((filter: any) => {
    if (filter.label === "Price") {
      filters.priceRanges = filter.values;
    } else if (filter.label === "Availability") {
      filters.Availability = filter.values;
    } else if (filter.label === "Brand") {
      filters.Brand = filter.values;
    } else if (filter.label === "Manufacturers") {
      filters.Manufacturers = filter.values;
    }
  });


  return filters;
}