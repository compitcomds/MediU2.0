import { getUser } from "~/appwrite/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (import.meta.server) {
    useState("isAuthLoading", () => true);
    return;
  }
  const isAuthLoading = useState("isAuthLoading", () => true);
  let user = null;
  try {
    user = await getUser();
  } catch (error) {}
  const authenticated = !!user;

  const protectedRoutes = [/^\/dashboard/, /^\/consultancy/, /^\/checkout/];

  const authRoutes = ["/auth/login", "/auth/register"];

  isAuthLoading.value = false;

  if (authenticated && authRoutes.includes(to.path)) {
    const backRoute = (to.query.back as string) || "/dashboard";
    return navigateTo(backRoute);
  }

  // Protect specific routes
  const isProtectedRoute = protectedRoutes.some((route) => route.test(to.path));
  if (isProtectedRoute && !authenticated) {
    return navigateTo(`/auth/login?back=${encodeURIComponent(to.path)}`);
  }
});
