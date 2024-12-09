import { Client, Query, Databases } from "node-appwrite";
import addToUserWalletServer from "~/server/_helpers/wallet/add-to-user-wallet";

const APPWRITE_ENDPOINT = process.env.VITE_APPWRITE_ENDPOINT as string;
const APPWRITE_PROJECT_ID = process.env.VITE_APPWRITE_PROJECT_ID as string;
const APPWRITE_API_KEY = process.env.APPWRITE_API_KEY as string;
const APPWRITE_DATABASE = process.env.VITE_APPWRITE_DATABASE_ID as string;
const APPWRITE_CONSULTANCY_ID = process.env
  .VITE_APPWRITE_CONSULTANCY_ID as string;

const PHONEPAY_CONSULTANCY_REDIRECT_SUCCESS_URL = String(
  process.env.PHONEPAY_CONSULTANCY_REDIRECT_SUCCESS_URL,
);
const PHONEPAY_CONSULTANCY_REDIRECT_ERROR_URL = String(
  process.env.PHONEPAY_CONSULTANCY_REDIRECT_ERROR_URL,
);

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    if (body.code !== "PAYMENT_SUCCESS") throw new Error("Payment failed...");
    const amount = parseFloat(body.amount) / 100;
    const document = await updateDocumentPaymentStatus(
      body.transactionId,
      amount,
    );
    return sendRedirect(
      event,
      `${PHONEPAY_CONSULTANCY_REDIRECT_SUCCESS_URL}/${document.$id}`,
    );
  } catch (error) {
    console.log(error);
    return sendRedirect(event, PHONEPAY_CONSULTANCY_REDIRECT_ERROR_URL);
  }
});

async function updateDocumentPaymentStatus(
  transactionId: string,
  amount: number,
) {
  const client = new Client();
  client
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(APPWRITE_PROJECT_ID)
    .setKey(APPWRITE_API_KEY);

  const database = new Databases(client);
  const { documents } = await database.listDocuments(
    APPWRITE_DATABASE,
    APPWRITE_CONSULTANCY_ID,
    [Query.equal("transactionId", transactionId), Query.limit(1)],
  );

  if (documents.length !== 1)
    throw new Error(
      "Invaid Transaction Id. The transaction id does not exists in our database.",
    );

  await addToUserWalletServer(database, (documents[0] as any).userId, amount);

  return await database.updateDocument(
    APPWRITE_DATABASE,
    APPWRITE_CONSULTANCY_ID,
    documents[0].$id,
    { paymentStatus: "PAID" },
  );
}
