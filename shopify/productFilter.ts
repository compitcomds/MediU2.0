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
    colors: [],
    size:[]
  };

  data.collection.products.filters.forEach((filter: any) => {
    if (filter.label === "Price") {
      filters.priceRanges = filter.values;
    } else if (filter.label === "Color") {
      filters.colors = filter.values;
    }
    else if (filter.label === "size") {
      filters.size = filter.values;
    }
  });

  return filters;
}
