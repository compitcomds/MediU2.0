import shopifyClient from "../shopify-client";

const fetchCustomerDetailsQuery = `
query fetchCustomerDetails($accessToken: String!) {
  customer(customerAccessToken: $accessToken) {
    firstName
    lastName
    email
    phone
    displayName
    numberOfOrders
    addresses(first: 100) {
      nodes {
        address1
        address2
        city
        country
        name
        phone
        province
      }
    }
  }
}
`;

export default async function fetchCustomerDetails() {
  const accessToken = localStorage.getItem("accessToken");
  const { data, errors } = await shopifyClient.request(
    fetchCustomerDetailsQuery,
    {
      variables: {
        accessToken,
      },
    },
  );

  console.log(data, errors);
  if (!data?.customer) {
    throw Error("Error fetching customer details.");
  }

  return data.customer;
}
