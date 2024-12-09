import { Query } from "appwrite";
import { database } from "../config";

const APPWRITE_DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const APPWRITE_CONSULTANCY_PRODUCTS_COLLECTION_ID = import.meta.env
  .VITE_APPWRITE_CONSULTANCY_ID as string;

export async function getConsultancyById(id: string) {
  try {
    return await database.getDocument(
      APPWRITE_DATABASE_ID,
      APPWRITE_CONSULTANCY_PRODUCTS_COLLECTION_ID,
      id,
    );
  } catch (error) {
    return null;
  }
}

export async function getUserConsultancies() {
  return await database.listDocuments(
    APPWRITE_DATABASE_ID,
    APPWRITE_CONSULTANCY_PRODUCTS_COLLECTION_ID,
    [Query.limit(100), Query.orderDesc("$createdAt")],
  );
}
