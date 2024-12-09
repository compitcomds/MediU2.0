import { type Databases } from "node-appwrite";
import getUserWalletServer from "./get-user-wallet";

const APPWRITE_DATABASE = process.env.VITE_APPWRITE_DATABASE_ID as string;
const APPWRITE_WALLET = String(process.env.VITE_APPWRITE_WALLET_COLLECTION_ID);

export default async function addToUserWalletServer(
  databases: Databases,
  userId: string,
  amount: number,
) {
  const wallet: any = await getUserWalletServer(databases, userId);
  await databases.updateDocument(APPWRITE_DATABASE, APPWRITE_WALLET, userId, {
    amount: wallet.amount + amount,
  });
}
