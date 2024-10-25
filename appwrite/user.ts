import shopifyUpdateCustomerDetails from "~/shopify/user/update-details";
import { account } from "./config";

export async function updateUserName(data: {
  firstName: string;
  lastName: string;
}) {
  await shopifyUpdateCustomerDetails({
    firstName: data.firstName,
    lastName: data.lastName,
  });
  await account.updateName(`${data.firstName} ${data.lastName}`);
}

export async function updatePassword(data: {
  password: string;
  oldPassword: string;
}) {
  await account.updatePassword(data.password, data.oldPassword);
}

export async function updateUserPhone(data: {
  phone: string;
  passwordForPhone: string;
}) {
  await account.updatePhone(data.phone, data.passwordForPhone);
  await shopifyUpdateCustomerDetails({ phone: data.phone });
}
