import { ID, Permission, Role, type Databases } from "node-appwrite";
import getUserWalletServer from "./get-user-wallet";
import serverConfig from "../../utils/server-config";

export default async function addToUserWalletServer(
  databases: Databases,
  userId: string,
  amount: number,
  orderDetails: {
    appwriteOrderId: string;
    appwriteOrderType: "CONSULTANCY" | "ORDER" | null;
    transactionId: string;
  },
) {
  const wallet: any = await getUserWalletServer(databases, userId);
  await databases.updateDocument(
    serverConfig.APPWRITE_DATABASE,
    serverConfig.APPWRITE_WALLET_ID,
    userId,
    {
      amount: wallet.amount + amount,
    },
  );
  await databases.createDocument(
    serverConfig.APPWRITE_DATABASE,
    serverConfig.APPWRITE_WALLET_TRANSACTIONS_ID,
    ID.unique(),
    {
      userId,
      amount,
      type: "RECEIVED",
      ...orderDetails,
    },
    [Permission.read(Role.user(userId))],
  );
}
