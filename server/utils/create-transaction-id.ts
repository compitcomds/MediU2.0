import { v4 as uuidv4 } from "uuid";
export default function createTransactionId() {
  return uuidv4().slice(0, 30);
}
