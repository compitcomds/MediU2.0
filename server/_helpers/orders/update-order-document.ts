import { type Databases } from "node-appwrite";
import serverConfig from "../../utils/server-config";

export async function updateOrderDocument(
  database: Databases,
  documentId: string,
  data: {
    paymentStatus?: "PAID" | "UNPAID";
    orderId?: string;
  },
): Promise<any> {
  const updateDocument = await database.updateDocument(
    serverConfig.APPWRITE_DATABASE,
    serverConfig.APPWRITE_ORDERS_COLLECTION_ID,
    documentId,
    data,
  );

  return updateDocument;
}
