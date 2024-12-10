import serverConfig from "../../utils/server-config";
import { type Databases, Permission, Role, ID } from "node-appwrite";

export default async function createOrderDocument(
  database: Databases,
  data: {
    userId: string;
    transactionId: string;
    orderId?: string;
    shopifyCartId: string;
    prescriptionUrl?: string | null;
    typeOfProduct?: string | null;
    walletAmountUsed: number;
  },
) {
  return await database.createDocument(
    serverConfig.APPWRITE_DATABASE,
    serverConfig.APPWRITE_ORDERS_COLLECTION_ID,
    ID.unique(),
    data,
    [Permission.read(Role.user(data.userId))],
  );
}
