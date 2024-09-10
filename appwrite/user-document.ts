import { Permission, Role } from "appwrite";
import { database } from "./config";

const appwriteDatabaseId = "66b48885002523c4c882";
const appwriteUsersCollectionId = "66b5c37300113936e9a1";

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
      appwriteDatabaseId,
      appwriteUsersCollectionId,
      userId,
      data,
      [Permission.read(Role.user(userId)), Permission.update(Role.user(userId))]
    );
    console.log("Document created:", document);
    return document;
  } catch (error) {
    // Log error details for debugging
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
      appwriteDatabaseId,
      appwriteUsersCollectionId,
      userId
    );
    console.log("Document fetched:", document);
    return document;
  } catch (error:any) {
    console.error("Error fetching document:", error.response?.data || error);
    throw error;
  }
};
