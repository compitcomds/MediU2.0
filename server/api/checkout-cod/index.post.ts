import { defineEventHandler } from "h3";
import { Databases, Client } from "node-appwrite";
import getCartDataForCheckout from "~/shopify/cart/get-cart-data-for-checkout";
import serverConfig from "../../utils/server-config";
import getUserWalletServer from "../../_helpers/wallet/get-user-wallet";
import createOrderDocument from "~/server/_helpers/orders/create-order-document";
import processOrderInShopify from "~/server/_helpers/orders/processOrderInShopify";
import removeFromUserWallet from "~/server/_helpers/wallet/remove-from-user-wallet";
import { updateOrderDocument } from "~/server/_helpers/orders/update-order-document";
import CreatedOrderType from "~/server/_helpers/types/created-order-type";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const cartId = body.cart;
  const userId = body.userId;
  const prescriptionUrl = body.prescriptionUrl;
  try {
    if (!cartId) throw new Error("Invalid cartid.");

    const cartData = await getCartDataForCheckout(cartId);

    if (!cartData) throw new Error("Invalid cart data.");

    const client = new Client()
      .setEndpoint(serverConfig.APPWRITE_ENDPOINT)
      .setProject(serverConfig.APPWRITE_PROJECT_ID)
      .setKey(serverConfig.APPWRITE_API_KEY);

    const database = new Databases(client);

    const { totalAmountAfterWallet, walletAmountUsed } =
      await returnWalletReducedAmount(
        database,
        userId,
        parseFloat(cartData.totalAmount.amount),
      );

    const document: any = await createOrderDocument(database, {
      userId,
      transactionId: "",
      shopifyCartId: cartId,
      prescriptionUrl,
      walletAmountUsed,
    });

    const orderBody = (await processOrderInShopify(
      cartId,
      {
        prescriptionUrl: prescriptionUrl || "",
        appwriteOrderId: document.$id || "N/A",
        walletAmountUsed,
      },
      "pending",
    )) as CreatedOrderType;

    await removeFromUserWallet(
      database,
      document.userId,
      document.walletAmountUsed,
    );

    await updateOrderDocument(database, document.$id, {
      orderId: orderBody.id.toString(),
    });

    return { message: "Successfully created the order." };
  } catch (err: any) {
    console.error("Error occurred:", err);
    return {
      error: err.message || `An error occurred while processing your request`,
    };
  }
});

async function returnWalletReducedAmount(
  database: Databases,
  userId: string,
  totalAmount: number,
) {
  const wallet: any = await getUserWalletServer(database, userId);
  const walletAmountUsed = Math.min(wallet.amount, totalAmount - 1);
  return {
    totalAmountAfterWallet: totalAmount - walletAmountUsed,
    walletAmountUsed,
  };
}
