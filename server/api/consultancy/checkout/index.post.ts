import { Client, Databases, ID, Permission, Role } from "node-appwrite";
import getPhonepayCheckout from "~/server/utils/get-phonepay-checkout";

const PHONEPAY_CONSULTANCY_CALLBACK_URL = process.env
  .PHONEPAY_CONSULTANCY_CALLBACK_URL as string;
const PHONEPAY_CONSULTANCY_REDIRECT_URL = process.env
  .PHONEPAY_CONSULTANCY_REDIRECT_URL as string;
const PHONEPAY_CONSULTANCY_REDIRECT_MODE = process.env
  .PHONEPAY_CONSULTANCY_REDIRECT_MODE as string;

const APPWRITE_ENDPOINT = process.env.VITE_APPWRITE_ENDPOINT as string;
const APPWRITE_PROJECT_ID = process.env.VITE_APPWRITE_PROJECT_ID as string;
const APPWRITE_API_KEY = process.env.APPWRITE_API_KEY as string;
const APPWRITE_DATABASE = process.env.VITE_APPWRITE_DATABASE_ID as string;
const APPWRITE_CONSULTANCY_ID = process.env
  .VITE_APPWRITE_CONSULTANCY_ID as string;
const APPWRITE_CONSULTANCY_PRODUCTS_ID = process.env
  .VITE_APPWRITE_CONSULTANCY_PRODUCTS_COLLECTION_ID as string;

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const client = new Client();
  client
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(APPWRITE_PROJECT_ID)
    .setKey(APPWRITE_API_KEY);

  const database = new Databases(client);

  const consultancy = await getConsultancy(database, body.consultancy);
  if (!consultancy)
    throw new Error("Invalid Consultancy. Please select a valid service.");

  const transactionId = createTransactionId();

  await database.createDocument(
    APPWRITE_DATABASE,
    APPWRITE_CONSULTANCY_ID,
    ID.unique(),
    {
      ...body,
      consultancy: [body.consultancy],
      price: consultancy.price,
      transactionId,
    },
    [Permission.read(Role.user(body.userId))],
  );

  const { instrumentResponse } = await getPhonepayCheckout({
    amount: consultancy.price,
    userId: body.userId,
    name: `${body.firstName} ${body.lastName}`,
    phone: body.phone,
    callbackUrl: PHONEPAY_CONSULTANCY_CALLBACK_URL,
    redirectUrl: PHONEPAY_CONSULTANCY_REDIRECT_URL,
    redirectMode: PHONEPAY_CONSULTANCY_REDIRECT_MODE,
    transactionId,
  });

  return instrumentResponse.redirectInfo;
});

async function getConsultancy(database: Databases, id: string) {
  try {
    return (await database.getDocument(
      APPWRITE_DATABASE,
      APPWRITE_CONSULTANCY_PRODUCTS_ID,
      id,
    )) as any;
  } catch (error) {
    return null;
  }
}
