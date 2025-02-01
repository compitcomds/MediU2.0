<template>
  <main class="w-3/4 px-10">
    <h1 class="mb-4 text-2xl font-bold text-[#238878]">Profile</h1>
    <div class="rounded-lg border border-dashed border-[#238878] p-8">
      <div class="relative mb-6 flex items-center">
        <!-- Profile Image -->
        <img
          src="https://via.placeholder.com/80"
          alt="John Doe"
          class="mr-4 h-20 w-20 rounded-full"
        />
        <!-- Camera Icon -->
        <div
          class="absolute left-14 top-2 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-green-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-camera h-4 w-4"
          >
            <path
              d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"
            />
            <circle cx="12" cy="13" r="3" />
          </svg>
        </div>

        <div>
          <h1 class="text-2xl font-semibold" style="color: #238878">
            John Doe
          </h1>
          <p class="text-gray-500">johndoe@example.com</p>
        </div>
      </div>

      <!-- Form Fields -->
      <div class="grid grid-cols-2 gap-6">
        <!-- First Name -->
        <div>
          <label
            for="first-name"
            class="block text-sm font-medium text-[#238878]"
            >First Name</label
          >
          <input
            type="text"
            id="first-name"
            class="mt-1 block w-full rounded border border-gray-300 bg-white px-2 py-2 text-black shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>

        <!-- Last Name -->
        <div>
          <label
            for="last-name"
            class="block text-sm font-medium text-[#238878]"
            >Last Name</label
          >
          <input
            type="text"
            id="last-name"
            class="mt-1 block w-full rounded border border-gray-300 bg-white px-2 py-2 text-black shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>

        <!-- Email Address -->
        <div>
          <label for="email" class="block text-sm font-medium text-[#238878]"
            >Email address</label
          >
          <input
            type="email"
            id="email"
            class="mt-1 block w-full rounded border border-gray-300 bg-white px-2 py-2 text-black shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>

        <!-- Phone -->
        <div>
          <label for="phone" class="block text-sm font-medium text-[#238878]"
            >Phone</label
          >
          <input
            type="tel"
            id="phone"
            class="mt-1 block w-full rounded border border-gray-300 bg-white px-2 py-2 text-black shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>

        <!-- New Password -->
        <div>
          <label
            for="new-password"
            class="block text-sm font-medium text-[#238878]"
            >New password (leave blank to leave unchanged)</label
          >
          <input
            type="password"
            id="new-password"
            class="mt-1 block w-full rounded border border-gray-300 bg-white px-2 py-2 text-black shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>

        <!-- Confirm New Password -->
        <div>
          <label
            for="confirm-password"
            class="block text-sm font-medium text-[#238878]"
            >Confirm new password</label
          >
          <input
            type="password"
            id="confirm-password"
            class="mt-1 block w-full rounded border border-gray-300 bg-white px-2 py-2 text-black shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>
      </div>

      <!-- Update Button -->
      <div class="mt-8">
        <button
          class="rounded-lg bg-[#238878] px-4 py-2 text-white hover:bg-[#44756c]"
        >
          Update Profile
        </button>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts"></script>
