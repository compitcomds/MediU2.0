import { getUser } from "~/appwrite/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log("Running middleware...");

  try {
    const account = await getUser();
    console.log("User account:", account);

    if (!account || !account.$id) {
      console.log("User not authenticated. Redirecting to /auth/login.");
      return navigateTo('/auth/login');
    }
  } catch (error) {
    console.error("Error during authentication check:", error);
    return navigateTo('/login');
  }
});
