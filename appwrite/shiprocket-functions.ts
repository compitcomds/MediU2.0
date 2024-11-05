import { ExecutionMethod } from "appwrite";
import { functions } from "./config";

const SHIPROCKET_FUNCTION_ID = import.meta.env
  .VITE_APPWRITE_SHIPROCKET_FUNCTION_ID;

export async function appwriteCheckPincode(pincode: string, weight?: number) {
  const response = await functions.createExecution(
    SHIPROCKET_FUNCTION_ID,
    JSON.stringify({
      pincode,
      weight,
    }),
    false,
    "/check-pincode",
    ExecutionMethod.POST,
  );

  return await JSON.parse(response.responseBody);
}
