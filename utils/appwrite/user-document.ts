

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