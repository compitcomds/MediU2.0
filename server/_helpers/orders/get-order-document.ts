import { type Databases, Query } from "node-appwrite";
import serverConfig from "../../utils/server-config";

export async function getOrderDocumentThroughTransactionId(
  database: Databases,
  transactionId: string,
): Promise<any> {
  const { documents, total } = await database.listDocuments(
    serverConfig.APPWRITE_DATABASE,
    serverConfig.APPWRITE_ORDERS_COLLECTION_ID,
    [Query.equal("transactionId", transactionId), Query.limit(1)],
  );

  if (total === 0) return null;
  return documents[0];
}
