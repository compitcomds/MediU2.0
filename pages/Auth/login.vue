<template>
  <div class="min-h-screen flex bg-gray-50">
    <div
      class="flex flex-col md:flex-row w-full bg-white overflow-hidden justify-center"
    >
      <!-- Left Section (Form) -->
      <div
        class="lg:w-1/2 w-full lg:p-8 flex lg:flex-col flex-row justify-center"
      >
        <div class="lg:w-8/12 space-y-10 p-3">
          <h2 class="text-4xl font-serif font-semibold text-[#285742]">
            Sign In
          </h2>
          <p class="text-black mb-6 text-xl">
            Welcome, please login to your account
          </p>

          <div class="grid-container">
            <button
              @click="loginWithGoogle"
              class="grid-item bg-white text-gray-600 border border-gray-300 px-4 py-2 rounded-lg shadow hover:shadow-lg gap-3"
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
              <p>Log In With Google</p>
            </button>
            <button
              class="grid-item bg-white text-gray-600 border border-gray-300 px-4 py-2 rounded-lg shadow hover:shadow-lg gap-3"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                class="h-5 w-5"
                alt="Facebook Logo"
              />
              <p>Log In With Facebook</p>
            </button>
          </div>

          <div class="flex items-center justify-center my-4">
            <span class="border-b border-black bg-black w-1/5 md:w-1/3"></span>
            <p class="text-center text-black text-lg mx-4">or</p>
            <span class="border-b border-black w-1/5 md:w-1/3"></span>
          </div>

          <form @submit.prevent="submitForm">
            <div class="mb-4">
              <label
                class="block text-black text-xl font-semibold mb-2"
                for="email"
                >Email Address</label
              >
              <input
                v-model="formData.email"
                id="email"
                type="email"
                placeholder="Email Address"
                required
                class="w-full px-3 py-2 text-black bg-white border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div class="mb-6 relative">
              <label
                class="block text-black text-xl font-semibold mb-2"
                for="password"
                >Password</label
              >
              <input
                v-model="formData.password"
                id="password"
                type="password"
                placeholder="Password"
                required
                class="w-full px-3 py-2 text-black bg-white border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <div
                class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 mt-6"
              >
                <button
                  @click.prevent="togglePasswordVisibility"
                  class="focus:outline-none"
                >
                  <svg
                    v-if="showPassword"
                    class="h-5 w-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-.7 1.912-2.034 3.568-3.694 4.643M15 12a3 3 0 00-6 0"
                    />
                  </svg>
                  <svg
                    v-else
                    class="h-5 w-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 01-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-.7 1.912-2.034 3.568-3.694 4.643M15 12a3 3 0 016 0"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                
                <a href="/auth/register"
                  for="remember_me"
                  class="ml-2 block text-sm text-blue-600 hover:text-blue-800"
                  >Don't have an account / Sign Up</a
                >
              </div>
              <!-- <a href="#" class="text-sm text-blue-600 hover:text-blue-800"
                >Forgot Password?</a
              > -->
            </div>

            <div class="mt-6">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-[#285742] text-white text-xl font-semibold rounded-lg py-2 shadow-lg hover:bg-[#377d5d] focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:animate-pulse disabled:cursor-not-allowed"
              >
                {{ isSubmitting ? "Signing in..." : "Sign In" }}
              </button>
            </div>
          </form>

          <p class="mt-6 text-sm text-gray-600">
            Don’t have an account?
            <a href="/auth/register" class="text-blue-600 hover:text-blue-800"
              >Sign up for free</a
            >
          </p>
        </div>
      </div>
      <!-- Right Section (Image) -->
      <div
        class="hidden lg:block md:w-1/2 bg-cover bg-center"
        :style="{
          backgroundImage: 'url(https://ccdstest.b-cdn.net/Medi%20u/2.png)',
        }"
      >
        <!-- Image comes from the image.png provided by the user -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { loginUser, loginWithGoogle } from "~/appwrite/auth";

const router = useRouter();
const isSubmitting = ref(false);
const formData = ref({
  email: "",
  password: "",
});

const showPassword = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const submitForm = async () => {
  isSubmitting.value = true;
  try {
    await loginUser(formData.value);
    isSubmitting.value = false;
    router.replace("/dashboard");
  } catch (error) {
    isSubmitting.value = false;
    alert(`Error: ${error.message}`);
  }
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem; /* Space between grid items */
  margin-bottom: 1rem;
}

.grid-item {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (min-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(
      2,
      1fr
    ); /* Two columns on medium screens and above */
  }
}
</style>
