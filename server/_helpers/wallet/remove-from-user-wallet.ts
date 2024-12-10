import { type Databases } from "node-appwrite";
import getUserWalletServer from "./get-user-wallet";
import serverConfig from "../../utils/server-config";

export default async function removeFromUserWallet(
  databases: Databases,
  userId: string,
  amount: number,
) {
  const wallet: any = await getUserWalletServer(databases, userId);
  await databases.updateDocument(
    serverConfig.APPWRITE_DATABASE,
    serverConfig.APPWRITE_WALLET_ID,
    userId,
    {
      amount: wallet.amount - amount,
    },
  );
}
