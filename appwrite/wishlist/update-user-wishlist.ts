import { getUser } from "../auth";
import { database } from "../config";

const APPWRITE_DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const APPWRITE_USERS_COLLECTION_ID = import.meta.env
  .VITE_APPWRITE_USERS_COLLECTION_ID;

export default async function updateUserWishlist(wishlist: string[]) {
  try {
    const user = await getUser();
    return await database.updateDocument(
      APPWRITE_DATABASE_ID,
      APPWRITE_USERS_COLLECTION_ID,
      user.$id,
      {
        wishlist,
      },
    );
  } catch (error) {
    return;
  }
}
