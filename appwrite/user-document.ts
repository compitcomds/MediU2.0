import { Permission, Role } from "appwrite";
import { database } from "./config";
const config = useRuntimeConfig();

export const createUserDocument = async (
  userId: string,
  data: {
    shopifyPassword: string;
    shopifyCustomerId: string;
    wishlist: string[];
    shopifyCartId?: string;
  }
) => {
  try {
    console.log("Creating document with ID:", userId);
    const document = await database.createDocument(
      config.public.appwriteDatabaseId,
      config.public.appwriteUsersCollectionId,
      userId,
      data,
      [Permission.read(Role.user(userId)), Permission.update(Role.user(userId))]
    );
    console.log("Document created:", document);
    return document;
  } catch (error) {

    if (error) {
      console.error("Error response:", error);
    } else {
      console.error("Error message:", error);
    }
    throw error;
  }
};
export const getUserDocument = async (userId: string) => {
  try {
    console.log(`Fetching document with ID: ${userId}`);
    const document = await database.getDocument(
      config.public.appwriteDatabaseId,
      config.public.appwriteUsersCollectionId,
      userId
    );
    console.log("Document fetched:", document);
    return document;
  } catch (error: any) {
    console.error("Error fetching document:", error.response?.data || error);
    throw error;
  }
};
