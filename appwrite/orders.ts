import { ID, Query } from "appwrite";
import { database } from "./config";

const APPWRITE_DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const APPWRITE_ORDERS_COLLECTION_ID = import.meta.env
  .VITE_APPWRITE_ORDERS_COLLECTION_ID;

export async function createOrderDocument(data: {
  userId: string;
  transactionId: string;
  orderId?: string;
  shopifyCartId: string;
  prescriptionUrl?: string | null;
  typeOfProduct?: string | null;
}) {
  return await database.createDocument(
    APPWRITE_DATABASE_ID,
    APPWRITE_ORDERS_COLLECTION_ID,
    ID.unique(),
    data
  );
}

export async function getOrderDocumentThroughTransactionId(
  transactionId: string
) {
  return await database.listDocuments(
    APPWRITE_DATABASE_ID,
    APPWRITE_ORDERS_COLLECTION_ID,
    [Query.equal("transactionId", transactionId), Query.limit(1)]
  );
}
