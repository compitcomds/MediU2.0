import { Permission, Role } from "appwrite";
import { database } from "./config";

const appwriteDatabaseId = String(import.meta.env.VITE_APPWRITE_DATABASE_ID);
const appwriteUsersCollectionId = String(
  import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID
);

export const createUserDocument = async (
  userId: string,
  data: {
    shopifyPassword: string;
    shopifyCustomerId: string;
    wishlist: string[];
    shopifyCartId?: string;
  }
) => {
  return await database.createDocument(
    appwriteDatabaseId,
    appwriteUsersCollectionId,
    userId,
    data,
    [Permission.read(Role.user(userId)), Permission.update(Role.user(userId))]
  );
};

export const getUserDocument = async (userId: string) => {
  return await database.getDocument(
    appwriteDatabaseId,
    appwriteUsersCollectionId,
    userId
  );
};
