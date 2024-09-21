import { database, account } from "./config";
import { ID } from "appwrite";

const config = useRuntimeConfig();

// This is Create Consultancy Function
export async function consultancyDocument(
  userId: string,
  title: string,
  description: string,
  imagesId: string[],
  bookingTime: string,
  consultancyStatus: boolean = false,
  payment: boolean = false,
  paymentFee: number = 10000,
  gender: string
) {
  try {
    const uploadData = await database.createDocument(
      config.public.appwriteDatabaseId,
      config.public.appwriteConsultancyCollectionId,
      ID.unique(),
      {
        userId,
        title,
        Description: description,
        imagesId,
        bookingTime,
        consultancy_Status: consultancyStatus,
        payment,
        paymentFee,
        gender,
      }
    );
    console.log("Document Created SuccesFully: ", uploadData);
  } catch (error: any) {
    console.error(
      "Error in consultancyDocument Function:",
      error.message || error
    );
    throw new Error("Failed to create consultancy document");
  }
}

// This is upload Image Function

export async function uploadImage(imageUri: string) {
  if (!imageUri) {
    throw new Error("Please Select an Image to Upload.");
  }
  try {
    await checkUserSession();

    let fileBlob: Blob;

    if (typeof window !== "undefined") {
      const response = await fetch(imageUri);
      fileBlob = await response.blob();
    } else {
      const response = await fetch(imageUri);
      fileBlob = await response.blob();
    }

    const file = new File([fileBlob], "uploaded-image-jpg");
    const storage = new Storage();

    const uploadResponse = await storage.createFile(
      config.public.appwriteConsultancyBucketId,
      ID.unique(),
      file
    );
    console.log("Image uploaded successfully: ", uploadResponse);
    return uploadResponse.$id;
  } catch (error: any) {
    console.error("Error in uploadImage Function:", error.message || error);
    throw new Error("Failed to upload image");
  }
}

// This is Check User Session Function
const checkUserSession = async () => {
  try {
    await account.getSession("current");
  } catch (error) {
    console.error("No active session:", error);
    throw new Error("User is not authenticated");
  }
};
// This is Get User ID Function
export const getUserId = async (): Promise<string> => {
  try {
    const session = await account.getSession("current");
    return session.userId;
  } catch (error) {
    console.error("Failed to get user ID:", error);
    throw new Error("User is not authenticated");
  }
};
