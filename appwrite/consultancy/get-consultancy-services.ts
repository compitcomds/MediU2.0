import { Query } from "appwrite";
import { database } from "../config";

const APPWRITE_DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const APPWRITE_CONSULTANCY_PRODUCTS_COLLECTION_ID = import.meta.env
  .VITE_APPWRITE_CONSULTANCY_PRODUCTS_COLLECTION_ID;

export default async function getAllConsultancyServices() {
  return await database.listDocuments(
    APPWRITE_DATABASE_ID,
    APPWRITE_CONSULTANCY_PRODUCTS_COLLECTION_ID,
    [Query.limit(100)],
  );
}
