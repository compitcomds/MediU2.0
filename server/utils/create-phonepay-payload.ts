import crypto from "crypto";

const PHONEPAY_API_KEY_INDEX = process.env.PHONEPAY_API_KEY_INDEX;
const PHONEPAY_API_KEY = process.env.PHONEPAY_API_KEY;

export default function createPhonepayPayload(data: any) {
  const payload = JSON.stringify(data);
  const payloadMain = Buffer.from(payload).toString("base64");
  const keyIndex = PHONEPAY_API_KEY_INDEX || "1";
  const string = payloadMain + "/pg/v1/pay" + PHONEPAY_API_KEY;
  const sha256 = crypto.createHash("sha256").update(string).digest("hex");
  return {
    payloadMain,
    checksum: sha256 + "###" + keyIndex,
  };
}
