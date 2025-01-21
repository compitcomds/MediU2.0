import { defineEventHandler } from "h3";
import { Client, Databases } from "node-appwrite";
import { getOrderDocumentThroughTransactionId } from "~/server/_helpers/orders/get-order-document";
import processOrderInShopify from "~/server/_helpers/orders/processOrderInShopify";
import { updateOrderDocument } from "~/server/_helpers/orders/update-order-document";
import CreatedOrderType from "~/server/_helpers/types/created-order-type";
import removeFromUserWallet from "~/server/_helpers/wallet/remove-from-user-wallet";

const PHONEPAY_REDIRECT_SUCCESS_URL = String(
  process.env.PHONEPAY_REDIRECT_SUCCESS_URL,
);
const PHONEPAY_REDIRECT_ERROR_URL = String(
  process.env.PHONEPAY_REDIRECT_ERROR_URL,
);
export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    if (body.code !== "PAYMENT_SUCCESS") throw new Error("Payment failed...");
    const transactionId = body.transactionId;

    if (!transactionId) throw new Error("Invalid confirmation.");

    const client = new Client()
      .setEndpoint(serverConfig.APPWRITE_ENDPOINT)
      .setProject(serverConfig.APPWRITE_PROJECT_ID)
      .setKey(serverConfig.APPWRITE_API_KEY);

    const database = new Databases(client);

    const document = await getOrderDocumentThroughTransactionId(
      database,
      transactionId,
    );

    if (!document) throw new Error("Invalid order.");

    const orderBody = (await processOrderInShopify(document.shopifyCartId, {
      prescriptionUrl: document.prescriptionUrl || "",
      appwriteOrderId: document.$id || "N/A",
      walletAmountUsed: document.walletAmountUsed,
    })) as CreatedOrderType;

    await removeFromUserWallet(
      database,
      document.userId,
      document.walletAmountUsed,
    );

    await updateOrderDocument(database, document.$id, {
      paymentStatus: "PAID",
      orderId: orderBody.id.toString() || "",
    });

    return sendRedirect(event, PHONEPAY_REDIRECT_SUCCESS_URL);
  } catch (error: any) {
    console.log(error);
    return sendRedirect(event, PHONEPAY_REDIRECT_ERROR_URL);
  }
});
