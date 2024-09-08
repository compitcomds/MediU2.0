import shopifyClient from "../shopify-client";

const fetchCustomerDetailsQuery = `
query fetchCustomerDetails($accessToken: String!) {
  customer(customerAccessToken: $accessToken) {
    firstName
    lastName
    email
    phone
    addresses {
      address1
      city
      country
    }
    orders(first: 5) {
      edges {
        node {
          name
          orderNumber
          processedAt
          totalPrice
        }
      }
    }
  }
}
`;


async function fetchCustomerDetails(accessToken: string) {
    const { data } = await shopifyClient.request(fetchCustomerDetailsQuery, {
      variables: {
        accessToken,
      },
    });
  
    if (!data.customer) {
      throw Error("Error fetching customer details.");
    }
  
    return data.customer;
  }