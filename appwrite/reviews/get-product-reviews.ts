import { database } from "../config";
import { Query } from "appwrite";

const APPWRITE_DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const APPWRITE_REVIEW_COLLECTION_ID = import.meta.env
  .VITE_APPWRITE_REVIEW_COLLECTION_ID;

export default async function getProductReviews(productId: string) {
  return await database.listDocuments(
    APPWRITE_DATABASE_ID,
    APPWRITE_REVIEW_COLLECTION_ID,
    [Query.equal("productId", productId), Query.orderDesc("$createdAt")],
  );
}
