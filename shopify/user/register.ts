import shopifyClient from "~/shopify/shopify-client";

const registerCustomerMutation = `
mutation RegisterCustomer($email: String!, $password: String!, $firstName: String, $lastName: String) {
  customerCreate(
    input: {email: $email, password: $password, firstName: $firstName, lastName: $lastName}
  ) {
    customer {
    email
    id
    displayName
    phone
    }
  }
}
`;

export default async function registerUserIntoShopify(form: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}) {
  const { data } = await shopifyClient.request(registerCustomerMutation, {
    variables: { ...form },
  });

  if (!data?.customerCreate)
    throw new Error("Error occurred while registering the customer.");

  return data["customerCreate"]["customer"] as {
    email: string;
    id: string;
    displayName: string;
    phone: string;
  };
}
