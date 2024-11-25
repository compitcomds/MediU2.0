<template>
    <main class="w-3/4 px-10">
      <h1 class="text-2xl font-bold mb-4 text-[#238878]">
        Profile
      </h1>
      <div class=" p-8 rounded-lg border-dashed border border-[#238878]">
        <div class="relative flex items-center mb-6">
          <!-- Profile Image -->
          <img
            src="https://via.placeholder.com/80"
            alt="John Doe"
            class="w-20 h-20 rounded-full mr-4"
          />
          <!-- Camera Icon -->
          <div class="absolute top-2 left-14 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-camera h-4 w-4"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
          </div>
  
          <div>
            <h1 class="text-2xl font-semibold" style="color: #238878;">John Doe</h1>
            <p class="text-gray-500">johndoe@example.com</p>
          </div>
        </div>
  
        <!-- Form Fields -->
        <div class="grid grid-cols-2 gap-6">
          <!-- First Name -->
          <div>
            <label for="first-name" class="block text-sm font-medium text-[#238878]">First Name</label>
            <input
              type="text"
              id="first-name"
              class="mt-1 block w-full border-gray-300 border rounded py-2 px-2 shadow-sm focus:ring-green-500 focus:border-green-500 bg-white  text-black"
            />
          </div>
  
          <!-- Last Name -->
          <div>
            <label for="last-name" class="block text-sm font-medium text-[#238878]">Last Name</label>
            <input
              type="text"
              id="last-name"
              class="mt-1 block w-full border-gray-300 border rounded py-2 px-2 shadow-sm focus:ring-green-500 focus:border-green-500 bg-white  text-black"
            />
          </div>
  
          <!-- Email Address -->
          <div>
            <label for="email" class="block text-sm font-medium text-[#238878]">Email address</label>
            <input
              type="email"
              id="email"
              class="mt-1 block w-full border-gray-300 border rounded py-2 px-2 shadow-sm focus:ring-green-500 focus:border-green-500 bg-white  text-black"
            />
          </div>
  
          <!-- Phone -->
          <div>
            <label for="phone" class="block text-sm font-medium text-[#238878]">Phone</label>
            <input
              type="tel"
              id="phone"
              class="mt-1 block w-full border-gray-300 border rounded py-2 px-2 shadow-sm focus:ring-green-500 focus:border-green-500 bg-white  text-black"
            />
          </div>
  
          <!-- New Password -->
          <div>
            <label for="new-password" class="block text-sm font-medium text-[#238878]">New password (leave blank to leave unchanged)</label>
            <input
              type="password"
              id="new-password"
              class="mt-1 block w-full border-gray-300 border rounded py-2 px-2 shadow-sm focus:ring-green-500 focus:border-green-500 bg-white  text-black"
            />
          </div>
  
          <!-- Confirm New Password -->
          <div>
            <label for="confirm-password" class="block text-sm font-medium text-[#238878]">Confirm new password</label>
            <input
              type="password"
              id="confirm-password"
              class="mt-1 block w-full border-gray-300 border rounded py-2 px-2 shadow-sm focus:ring-green-500 focus:border-green-500 bg-white  text-black"
            />
          </div>
        </div>
  
        <!-- Update Button -->
        <div class="mt-8">
          <button class="bg-[#238878] text-white py-2 px-4 rounded-lg hover:bg-[#44756c]">
            Update Profile
          </button>
        </div>
      </div>
    </main>
  </template>
  
  <script>
  export default {

  };
  </script>
  
  <style scoped>
  .relative {
    position: relative;
  }
  
  .absolute {
    position: absolute;
  }
  </style>
  