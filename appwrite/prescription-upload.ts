import { storage } from "./config";
import { ID } from "appwrite";

const APPWRITE_PRESCRIPTION_BUCKED_ID = import.meta.env
  .VITE_APPWRITE_PRESCRIPTION_BUCKED_ID;

export async function uploadFileInAppwrite(file: File) {
  const uploadedFile = await storage.createFile(
    APPWRITE_PRESCRIPTION_BUCKED_ID,
    ID.unique(),
    file
  );
  return await storage.getFileView(
    APPWRITE_PRESCRIPTION_BUCKED_ID,
    uploadedFile.$id
  );
}
