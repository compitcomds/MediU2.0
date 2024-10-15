import { storage } from "./config";
import { ID } from "appwrite";

const APPWRITE_CONSULTANCY_BUCKED_ID = import.meta.env
  .VITE_APPWRITE_CONSULTANCY_BUCKED_ID;

export default async function consultancyImageUpload(file: File) {
  const uploadedFile = await storage.createFile(
    APPWRITE_CONSULTANCY_BUCKED_ID,
    ID.unique(),
    file
  );
  return storage.getFileView(APPWRITE_CONSULTANCY_BUCKED_ID, uploadedFile.$id);
}
