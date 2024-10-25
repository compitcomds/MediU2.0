import shopifyClient from "../shopify-client";

const customerUpdateMutation = `
mutation customerUpdateMutation($accessToken: String!, $customer: CustomerUpdateInput!) {
  customerUpdate(customer: $customer, customerAccessToken: $accessToken) {
    customer {
      email
    }
  }
}
`;

export default async function shopifyUpdateCustomerDetails(
  customer: Partial<{
    firstName: string;
    lastName: string;
    phone: string;
  }>,
) {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken)
    throw new Error(
      "Unauthenticated user found. Please login/signup to continue",
    );

  const { data, errors, extensions } = await shopifyClient.request(
    customerUpdateMutation,
    {
      variables: { customer, accessToken },
    },
  );

  if (data?.customerUpdate?.customer?.email)
    return { message: "Successfully updated the user details." };

  console.log(data, errors, extensions);
  throw new Error("Please enter the correct phone no. with the country code.");
}
