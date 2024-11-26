import { getUser } from "../auth";
import { database } from "../config";
import { Query } from "appwrite";

const APPWRITE_DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const APPWRITE_REVIEW_COLLECTION_ID = import.meta.env
  .VITE_APPWRITE_REVIEW_COLLECTION_ID;

export default async function getUserReviews() {
  try {
    const user = await getUser();

    return await database.listDocuments(
      APPWRITE_DATABASE_ID,
      APPWRITE_REVIEW_COLLECTION_ID,
      [
        Query.limit(100),
        Query.equal("user", user.email),
        Query.orderDesc("$createdAt"),
      ],
    );
  } catch (error) {
    return {
      total: 0,
      documents: [],
    };
  }
}
