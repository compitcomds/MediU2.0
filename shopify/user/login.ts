import shopifyClient from "../shopify-client";

const loginQuery = `
mutation loginCustomer($email: String!, $password: String!) {
  customerAccessTokenCreate(input: {email: $email, password: $password}) {
    customerAccessToken {
      accessToken
      expiresAt
    }
    customerUserErrors {
      code
      field
      message
    }
  }
}
`;

export default async function loginShopifyUserAccount(values: {
  email: string;
  password: string;
}) {
  const { data } = await shopifyClient.request(loginQuery, {
    variables: values,
  });

  if (!data["customerAccessTokenCreate"]["customerAccessToken"]) {
    console.log("Error while login User \n", data);
    throw Error("Error while logging in the user.");
  }
  return data["customerAccessTokenCreate"]["customerAccessToken"] as {
    accessToken: string;
    expiresAt: string;
  };
}
