import { database } from "../config";
import { ID } from "appwrite";

const APPWRITE_DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const APPWRITE_REVIEW_COLLECTION_ID = import.meta.env
  .VITE_APPWRITE_REVIEW_COLLECTION_ID;

export default async function addProductReviewInAppwrite(data: {
  productId: string;
  user: string;
  rating: number;
  description: string;
  name: string;
}) {
  return await database.createDocument(
    APPWRITE_DATABASE_ID,
    APPWRITE_REVIEW_COLLECTION_ID,
    ID.unique(),
    data,
  );
}
