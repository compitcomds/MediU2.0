import { database } from "../config";
import { ID } from "appwrite";

const APPWRITE_DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const APPWRITE_CREATE_AN_ALERT_COLLECTION_ID = import.meta.env
  .VITE_APPWRITE_CREATE_AN_ALERT_COLLECTION_ID;

export default async function createProductAlertForUser(data: {
  productId: string;
  productVariantId?: string;
  name: string;
  email: string;
  phone: string;
}) {
  await database.createDocument(
    APPWRITE_DATABASE_ID,
    APPWRITE_CREATE_AN_ALERT_COLLECTION_ID,
    ID.unique(),
    data,
  );
}
