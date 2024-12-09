import { type Databases, Permission, Role } from "node-appwrite";

const APPWRITE_DATABASE = process.env.VITE_APPWRITE_DATABASE_ID as string;
const APPWRITE_WALLET = String(process.env.VITE_APPWRITE_WALLET_COLLECTION_ID);

export default async function getUserWalletServer(
  database: Databases,
  userId: string,
) {
  try {
    return await database.getDocument(
      APPWRITE_DATABASE,
      APPWRITE_WALLET,
      userId,
    );
  } catch (error) {
    return await database.createDocument(
      APPWRITE_DATABASE,
      APPWRITE_WALLET,
      userId,
      { amount: 0 },
      [Permission.read(Role.user(userId))],
    );
  }
}
