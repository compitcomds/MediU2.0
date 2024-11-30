import axios from "axios";
import createPhonepayPayload from "./create-phonepay-payload";
import createTransactionId from "./create-transaction-id";

const PHONEPAY_API_URL = process.env.PHONEPAY_API_URL as string;
const MERCHANT_ID = process.env.PHONEPAY_MERCHANT_ID;

export default async function getPhonepayCheckout(info: {
  userId: string;
  name: string;
  amount: number;
  phone: string;
  callbackUrl: string;
  redirectUrl: string;
  redirectMode: string;
  transactionId?: string;
}) {
  const transactionId = info.transactionId || createTransactionId();
  const d = {
    merchantId: MERCHANT_ID,
    merchantTransactionId: transactionId,
    merchantUserId: info.userId,
    name: info.name,
    amount: info.amount * 100,
    callbackUrl: info.callbackUrl,
    redirectUrl: info.redirectUrl,
    redirectMode: info.redirectMode,
    mobileNumber: info.phone,
    paymentInstrument: { type: "PAY_PAGE" },
  };
  if (d.amount <= 0) throw new Error("Amount can't be zero.");
  const { checksum, payloadMain } = createPhonepayPayload(d);

  const { data } = await axios.post(
    PHONEPAY_API_URL,
    { request: payloadMain },
    {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
      },
    },
  );

  return {
    transactionId,
    instrumentResponse: data.data.instrumentResponse,
  };
}
