import { Permission, Role, type Models } from "appwrite";
import { database } from "./config";

const APPWRITE_DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const APPWRITE_USERS_COLLECTION_ID = import.meta.env
  .VITE_APPWRITE_USERS_COLLECTION_ID;

interface UserDocumentType extends Models.Document {
  wishlist: string[];
  shopifyCartId: string;
  shopifyPassword: string;
}

export const createUserDocument = async (
  userId: string,
  data: {
    shopifyPassword: string;
    shopifyCustomerId: string;
    wishlist: string[];
    shopifyCartId?: string;
    wallet: number;
  },
) => {
  return await database.createDocument(
    APPWRITE_DATABASE_ID,
    APPWRITE_USERS_COLLECTION_ID,
    userId,
    data,
    [Permission.read(Role.user(userId)), Permission.update(Role.user(userId))],
  );
};

export const getUserDocument = async (userId: string) => {
  try {
    const document = await database.getDocument(
      APPWRITE_DATABASE_ID,
      APPWRITE_USERS_COLLECTION_ID,
      userId,
    );
    return document as UserDocumentType;
  } catch (error: any) {
    throw error;
  }
};
