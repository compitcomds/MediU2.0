import { Client, Databases, Permission, Role } from "appwrite"; 

export const createUserDocument = async (
  userId: string,
  data: {
    shopifyPassword: string;
    shopifyCustomerId: string;
    wishlist: string[];
    shopifyCartId?: string;
  }
) => {
  const { public: { appwriteDatabaseId, appwriteUsersCollectionId } } = useRuntimeConfig();

 
  const client = new Client();
  client
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) 
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

  const database = new Databases(client);

  try {
   
    const document = await database.createDocument(
      appwriteDatabaseId,
      appwriteUsersCollectionId,
      userId,
      data,
      [
        Permission.read(Role.user(userId)),
        Permission.update(Role.user(userId))
      ]
    );

    return document;

  } catch (error) {
    console.error("Error creating user document:", error);
    throw error;
  }
};
