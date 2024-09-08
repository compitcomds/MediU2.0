import { getUser } from "~/appwrite/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log("running middleware...");
  try {
    const account = await getUser();
    console.log(account);
  } catch (error: any) {
    console.log("navigating...");
    return navigateTo("/auth/login");
  }
});
