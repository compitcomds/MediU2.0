import shopifyClient from "../shopify-client";
import { getShopifyAccessTokenUsingAppwrite } from "~/appwrite/auth";

const getUserInfoForCheckoutQuery = `
query getUserInfoForCheckoutQuery($accessToken: String!) {
  customer(customerAccessToken: $accessToken) {
    firstName
    lastName
    email
    phone
    defaultAddress {
      address1
      address2
      country
      zip
      province
      firstName
      lastName
      phone
      city
    }
  }
}
`;

export default async function getUserInfoForCheckout() {
  let accessToken =
    localStorage.getItem("accessToken") ||
    (await getShopifyAccessTokenUsingAppwrite());

  if (!accessToken)
    throw new Error("Unauthenticated user. Please login/sign-up to continue..");

  const { data } = await shopifyClient.request(getUserInfoForCheckoutQuery, {
    variables: { accessToken },
  });

  if (data?.customer?.email) {
    return data?.customer as {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      defaultAddress: {
        address1: string;
        address2: string;
        country: string;
        zip: string;
        province: string;
        firstName: string;
        lastName: string;
        phone: string;
        city: string;
      };
    };
  }

  throw new Error("Invalid customer.");
}
