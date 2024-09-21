import { database, account } from "./config";
import { Storage } from "appwrite";

import { ID } from "appwrite";

export const usePrescription = () => {
  const config = useRuntimeConfig();

  const checkUserSession = async () => {
    try {
      await account.getSession("current");
    } catch (error) {
      console.error("No active session:", error);
      throw new Error("User is not authenticated");
    }
  };

  const uploadImage = async (imageUri: string | null) => {
    if (!imageUri) {
      alert("Please select an image to upload.");
      return;
    }

    try {
      await checkUserSession();

      const response = await fetch(imageUri);
      const fileBlob = await response.blob();

      const fileType = fileBlob.type.split("/")[1];
      const fileName = `photo.${fileType}`;

      const file = new File([fileBlob], fileName, {
        type: `image/${fileType}`,
      });

      const fileId = ID.unique();

      const uploadResponse = await Storage.createFile(
        config.appwriteStoragePrescriptionImage,
        fileId,
        file
      );

      alert("Your image has been uploaded.");
      console.log("Upload response:", uploadResponse);

      const documents = await fetchAllDocuments();
      if (documents.length > 0) {
        const documentId = documents[0].$id;
        await updatePrescriptionWithImageId(documentId, fileId);
      } else {
        await createPrescriptionWithImageId(fileId);
      }
    } catch (error) {
      alert("Something went wrong while uploading the image.");
      console.error("Upload error:", error);
    }
  };

  const createPrescriptionWithImageId = async (fileId: string) => {
    try {
      const session = await account.getSession("current");
      const userId = session.userId;

      await database.createDocument(
        config.public.appwriteDatabaseId,
        config.public.appwritePrescriptionCollectionId,
        ID.unique(),
        {
          image_Id: [fileId],
          userId: userId,
        }
      );
      alert("Document created and image ID stored successfully.");
    } catch (error) {
      alert("Failed to create document.");
      console.error("Document creation error:", error);
    }
  };

  const updatePrescriptionWithImageId = async (
    documentId: string,
    fileId: string
  ) => {
    try {
      const document = await database.getDocument(
        config.public.appwriteDatabaseId,
        config.public.appwritePrescriptionCollectionId,
        documentId
      );

      const updatedImageIds = [...document.image_Id, fileId];

      await database.updateDocument(
        config.public.appwriteDatabaseId,
        config.public.appwritePrescriptionCollectionId,
        documentId,
        {
          image_Id: updatedImageIds,
        }
      );
      alert("Document updated successfully.");
    } catch (error) {
      alert("Failed to update document.");
      console.error("Document update error:", error);
    }
  };

  const fetchAllDocuments = async () => {
    try {
      const response = await database.listDocuments(
        config.public.appwriteDatabaseId,
        config.public.appwritePrescriptionCollectionId
      );
      return response.documents;
    } catch (error) {
      console.error("Failed to fetch documents:", error);
      return [];
    }
  };

  return {
    uploadImage,
    createPrescriptionWithImageId,
    updatePrescriptionWithImageId,
  };
};
