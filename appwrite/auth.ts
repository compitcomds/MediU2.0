import registerUserIntoShopify from "~/shopify/user/register";
import { createUserDocument, getUserDocument } from "./user-document";
import { ID, OAuthProvider } from "appwrite";
import { account, avatars } from "./config";
import loginShopifyUserAccount from "~/shopify/user/login";

const OAUTH_LOGIN_SUCCESS_REDIRECT = import.meta.env
  .VITE_APPWRITE_OAUTH_LOGIN_SUCCESS_REDIRECT;
const OAUTH_LOGIN_ERROR_REDIRECT = import.meta.env
  .VITE_APPWRITE_OAUTH_LOGIN_ERROR_REDIRECT;

export const loginWithGoogle = async (back?: string | null) => {
  try {
    account.createOAuth2Session(
      OAuthProvider.Google,
      `${OAUTH_LOGIN_SUCCESS_REDIRECT}${!!back ? "?back=" + back : ""}`,
      OAUTH_LOGIN_ERROR_REDIRECT,
    );
  } catch (error) {}
};

export const logoutUser = async () => {
  try {
    await account.deleteSession("current");
    localStorage.removeItem("accessToken");
  } catch (error) {}
};

const createNewShopifyUser = async (
  userId: string,
  data: {
    email: string;
    firstName: string;
    lastName: string;
  },
) => {
  const shopifyPassword = ID.unique();
  const { id: shopifyCustomerId } = await registerUserIntoShopify({
    ...data,
    password: shopifyPassword,
  });

  await createUserDocument(userId, {
    shopifyCustomerId,
    shopifyPassword,
    wishlist: [],
    wallet: 0,
  });
};

export const checkIfNewOauthUser = async () => {
  const user = await getUser();
  try {
    await getUserDocument(user.$id);
    await getShopifyAccessTokenUsingAppwrite();
    return true;
  } catch (error) {
    await createNewShopifyUser(user.$id, {
      email: user.email,
      firstName: user.name.split(" ", 2)[0] || "",
      lastName: user.name.split(" ", 2)[1] || "",
    });
    await getShopifyAccessTokenUsingAppwrite();
  }
};

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
    `${data.firstName} ${data.lastName}`,
  );

  await createLoggedSession(data);
  await createNewShopifyUser(userId, data);
  return await loginUser(data);
};

export const loginUser = async (data: { email: string; password: string }) => {
  await createLoggedSession(data);
  await getShopifyAccessTokenUsingAppwrite();
  const userStore = useUserStore();
  userStore.initialiseUserStore();
};

export const getUser = async () => account.get();

export const getUserImage = (name: string) => {
  return avatars.getInitials(name);
};

export const getShopifyAccessTokenUsingAppwrite = async () => {
  const user = await getUser();
  const userDocument = await getUserDocument(user.$id);
  const { accessToken } = await loginShopifyUserAccount({
    email: user.email,
    password: userDocument.shopifyPassword,
  });

  localStorage.setItem("accessToken", accessToken);
  return accessToken;
};

async function createLoggedSession(data: { email: string; password: string }) {
  try {
    await account.deleteSession("current");
    await account.createEmailPasswordSession(data.email, data.password);
  } catch (error: any) {
    await account.createEmailPasswordSession(data.email, data.password);
  }
}
