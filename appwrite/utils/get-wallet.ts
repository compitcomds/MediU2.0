import { Permission, Role } from "appwrite";
import { getUser } from "../auth";
import { database } from "../config";

const APPWRITE_DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const WALLET_COLLECTION_ID = import.meta.env.VITE_APPWRITE_WALLET_COLLECTION_ID;

export default async function getUserWallet() {
  const user = await getUser();
  try {
    return database.getDocument(
      APPWRITE_DATABASE_ID,
      WALLET_COLLECTION_ID,
      user.$id,
    );
  } catch (error) {
    return database.createDocument(
      APPWRITE_DATABASE_ID,
      WALLET_COLLECTION_ID,
      user.$id,
      { amount: 0 },
      [Permission.read(Role.user(user.$id))],
    );
  }
}
