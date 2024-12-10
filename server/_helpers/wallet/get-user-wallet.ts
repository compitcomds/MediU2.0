import { type Databases, Permission, Role } from "node-appwrite";

export default async function getUserWalletServer(
  database: Databases,
  userId: string,
) {
  try {
    return await database.getDocument(
      serverConfig.APPWRITE_DATABASE,
      serverConfig.APPWRITE_WALLET_ID,
      userId,
    );
  } catch (error) {
    return await database.createDocument(
      serverConfig.APPWRITE_DATABASE,
      serverConfig.APPWRITE_WALLET_ID,
      userId,
      { amount: 0 },
      [Permission.read(Role.user(userId))],
    );
  }
}
