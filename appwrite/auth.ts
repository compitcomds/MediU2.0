import registerUserIntoShopify from "~/shopify/user/register";
import { createUserDocument, getUserDocument } from "./user-document";
import { ID } from "appwrite";
import { account } from "./config";
import loginShopifyUserAccount from "~/shopify/user/login";

export const registerUser = async (data: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}) => {
  const userId = ID.unique();
  await account.create(
    userId,
    data.email,
    data.password,
    `${data.firstName} ${data.lastName}`
  );

  await createLoggedSession(data);

  const shopifyPassword = ID.unique();
  const { id: shopifyCustomerId } = await registerUserIntoShopify({
    ...data,
    password: shopifyPassword,
  });

  await createUserDocument(userId, {
    shopifyCustomerId,
    shopifyPassword,
    wishlist: [],
  });

  return await loginUser(data);
};

export const loginUser = async (data: { email: string; password: string }) => {
  await createLoggedSession(data);

  const userAccount = await getUser();
  const userDocument = await getUserDocument(userAccount.$id);

  const { accessToken, expiresAt } = await loginShopifyUserAccount({
    email: data.email,
    password: userDocument.shopifyPassword,
  });

  localStorage.setItem("accessToken", accessToken);
  // const accessTokenCookie = useCookie("accessToken", {
  //   sameSite: true,
  //   secure: true,
  //   httpOnly: true,
  //   expires: new Date(expiresAt),
  // });
  // accessTokenCookie.value = accessToken;

  // console.log(accessToken);
};

export const getUser = async () => account.get();

async function createLoggedSession(data: { email: string; password: string }) {
  try {
    await account.createEmailPasswordSession(data.email, data.password);
  } catch (error: any) {
    await account.deleteSession("current");
    await account.createEmailPasswordSession(data.email, data.password);
  }
}
