<template>
  <div
    class="flex w-full flex-col justify-center overflow-hidden bg-white pb-20 md:flex-row lg:min-h-screen lg:pb-0"
  >
    <div
      class="flex w-full flex-row justify-center lg:w-1/2 lg:flex-col lg:p-8"
    >
      <div class="space-y-10 p-3 lg:w-8/12">
        <h2 class="font-serif text-4xl font-semibold text-[#285742]">
          Sign Up
        </h2>
        <p class="mb-6 text-xl text-black">
          Welcome, get started by creating an account.
        </p>

        <div class="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <button
            @click="loginWithGoogle"
            class="flex items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-600 shadow hover:shadow-lg"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1381_2836)">
                <path
                  d="M5.76215 15.7122L4.85713 19.0908L1.54929 19.1607C0.560727 17.3272 0 15.2294 0 13.0001C0 10.8443 0.524266 8.81147 1.45356 7.02148H1.45427L4.39918 7.56139L5.68923 10.4886C5.41922 11.2758 5.27206 12.1208 5.27206 13.0001C5.27216 13.9543 5.44502 14.8687 5.76215 15.7122Z"
                  fill="#FBBB00"
                ></path>
                <path
                  d="M25.7722 10.5715C25.9215 11.3579 25.9994 12.1701 25.9994 13.0001C25.9994 13.9308 25.9015 14.8387 25.7151 15.7144C25.0823 18.6944 23.4287 21.2965 21.138 23.138L21.1373 23.1373L17.428 22.948L16.903 19.6708C18.423 18.7794 19.6109 17.3844 20.2366 15.7144H13.2852V10.5715H20.338H25.7722Z"
                  fill="#518EF8"
                ></path>
                <path
                  d="M21.1374 23.1371L21.1381 23.1378C18.9103 24.9285 16.0802 26 12.9995 26C8.04883 26 3.74456 23.2329 1.54883 19.1607L5.76169 15.7122C6.85953 18.6421 9.68596 20.7279 12.9995 20.7279C14.4238 20.7279 15.7581 20.3428 16.9031 19.6707L21.1374 23.1371Z"
                  fill="#28B446"
                ></path>
                <path
                  d="M21.2974 2.99284L17.086 6.44069C15.901 5.69999 14.5003 5.27211 12.9996 5.27211C9.61098 5.27211 6.73168 7.45352 5.68884 10.4886L1.45384 7.02142H1.45312C3.61671 2.85 7.97527 0 12.9996 0C16.1538 0 19.046 1.12359 21.2974 2.99284Z"
                  fill="#F14336"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_1382_2836">
                  <rect width="26" height="26" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            <span>Log In With Google</span>
          </button>
          <button
            class="flex items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-600 shadow hover:shadow-lg"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              class="h-5 w-5"
              alt="Facebook Logo"
            />
            <span>Log In With Facebook</span>
          </button>
        </div>

        <!-- Separator -->
        <div class="my-4 flex items-center justify-center">
          <span class="w-1/5 border-b border-black bg-black md:w-1/3"></span>
          <p class="mx-4 text-center text-lg text-black">or</p>
          <span class="w-1/5 border-b border-black md:w-1/3"></span>
        </div>

        <!-- Form -->
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label
              class="mb-2 block text-xl font-bold text-gray-700"
              for="first-name"
              >First Name</label
            >
            <input
              v-model="formData.firstName"
              id="first-name"
              type="text"
              placeholder="First Name"
              required
              class="w-full rounded-lg border bg-white px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div class="mb-4">
            <label
              class="mb-2 block text-xl font-bold text-gray-700"
              for="last-name"
              >Last Name</label
            >
            <input
              v-model="formData.lastName"
              id="last-name"
              type="text"
              placeholder="Last Name"
              required
              class="w-full rounded-lg border bg-white px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div class="mb-4">
            <label
              class="mb-2 block text-xl font-bold text-gray-700"
              for="email"
              >Email Address</label
            >
            <input
              v-model="formData.email"
              id="email"
              type="email"
              placeholder="Email Address"
              required
              class="w-full rounded-lg border bg-white px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div class="relative mb-6">
            <label
              class="mb-2 block text-xl font-bold text-gray-700"
              for="password"
              >Password</label
            >
            <input
              v-model="formData.password"
              id="password"
              type="password"
              placeholder="Password"
              required
              class="mb-2 w-full rounded-lg border bg-white px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <p class="mb-4 text-xs text-gray-500">
              Must be at least 8 characters.
            </p>
          </div>

          <!-- Submit Button -->
          <div class="mt-6">
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full rounded-lg bg-[#285742] py-2 text-xl font-semibold text-white shadow-lg hover:bg-[#379168] focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:animate-pulse disabled:cursor-not-allowed"
            >
              {{ isSubmitting ? "Signing up..." : "Sign Up" }}
            </button>
          </div>
        </form>

        <p class="mt-6 text-sm text-gray-600">
          Already have an account?
          <nuxt-link
            :to="{ path: '/auth/login', query: route.query }"
            class="text-blue-600 hover:text-blue-800"
            >Log in</nuxt-link
          >
        </p>
      </div>
    </div>
    <div class="hidden md:w-1/2 lg:block">
      <img
        src="https://ccdstest.b-cdn.net/Medi%20u/1.png"
        alt="Register Image"
        class="h-full w-full object-cover object-center"
      />
    </div>
  </div>
</template>
<script setup>
import { toast } from "vue-sonner";
import { registerUser, loginWithGoogle } from "~/appwrite/auth";

const router = useRouter();
const route = useRoute();
const isSubmitting = ref(false);

const formData = ref({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
});

const submitForm = async () => {
  isSubmitting.value = true;

  try {
    await registerUser(formData.value);
    isSubmitting.value = false;
    await refreshNuxtData(["user"]);
    await router.replace("/dashboard");
  } catch (error) {
    toast.error(`Error: ${error.message}`, { richColors: true });
    isSubmitting.value = false;
  }
};

useHead({
  title: "Register - Mediu",
  meta: [
    { name: "description", content: "Register" },
    { name: "og:title", content: "Register - Mediu" },
    { name: "og:description", content: "Register" },
    { name: "keywords", content: `Mediu, Register, health, wellness` },
    {
      name: "og:image",
      content:
        "https://ccdstest.b-cdn.net/Medi%20u/home%20bg/mediu%20bg3%402x.jpg",
    },
    {
      name: "og:image:secure_url",
      content:
        "https://ccdstest.b-cdn.net/Medi%20u/home%20bg/mediu%20bg3%402x.jpg",
    },
    {
      name: "og:type",
      content: "website",
    },
    {
      name: "og:site_name",
      content: "Mediu",
    },
    {
      name: "og:url",
      content: "https://mediu.in/auth/register",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Mediu | Register",
    },
    {
      name: "twitter:description",
      content: "Mediu Register",
    },
    {
      name: "twitter:image",
      content:
        "https://ccdstest.b-cdn.net/Medi%20u/home%20bg/mediu%20bg3%402x.jpg",
    },
  ],
});
</script>
