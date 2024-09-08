

export const createUserDocument = async (
  userId: string,
  data: {
    shopifyPassword: string;
    shopifyCustomerId: string;
    wishlist: string[];
    shopifyCartId?: string;
  }
) => {
  const { appwriteDatabaseId, appwriteUsersCollectionId } =
    useRuntimeConfig().public;
  const { database, Permission, Role } = useAppwrite();

  return await database.createDocument(
    appwriteDatabaseId,
    appwriteUsersCollectionId,
    userId,
    data,
    [Permission.read(Role.user(userId)), Permission.update(Role.user(userId))]
  );
};
function useAppwrite(): { database: any; Permission: any; Role: any; } {
  throw new Error("Function not implemented.");
}

