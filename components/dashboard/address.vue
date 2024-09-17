<template>
    <main class="w-3/4 p-10">
      <h2 class="text-gray-600 mb-6">
        The following addresses will be used on the checkout page by default.
      </h2>
  
      <!-- Addresses Section -->
      <div class="grid grid-cols-2 gap-8">
        <!-- Loop through addresses -->
        <div
          v-for="(address, index) in addresses"
          :key="index"
          class="border p-6 rounded-lg shadow-sm"
        >
          <h3 class="font-semibold mb-4 text-[#28574e]">{{ address.type }} address</h3>
          <p class="text-[#28574e]">{{ address.name }}</p>
          <p class="text-[#28574e]">{{ address.city }}</p>
          <p class="text-[#28574e]">{{ address.phone }}</p>
          <p class="text-[#28574e]">{{ address.email }}</p>
          <div class="border mt-4 flex justify-between bg-white p-3">
            <button
              class="flex items-center text-sm text-gray-700 hover:text-gray-900"
              @click="editAddress(index)"
            >
              <svg
                class="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 17l-5-5m0 0l5-5m-5 5h12"
                ></path>
              </svg>
              Edit
            </button>
            <button
              class="flex items-center text-sm text-gray-700 hover:text-gray-900"
              @click="removeAddress(index)"
            >
              <svg
                class="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
              Remove
            </button>
          </div>
        </div>
      </div>
  
      <!-- Add New Address Section -->
      <div
        class="border-dashed border-2 border-gray-300 mt-8 p-10 text-center rounded-lg"
      >
        <div class="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="White"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="p-1 lucide lucide-house-plus bg-[#38996e]"
          >
            <path
              d="M13.22 2.416a2 2 0 0 0-2.511.057l-7 5.999A2 2 0 0 0 3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.354"
            />
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
            <path d="M15 6h6" />
            <path d="M18 3v6" />
          </svg>
          <p class="mb-4 text-black">Add New Address</p>
          <button
            class="bg-[#38996e] text-white py-2 px-4 rounded-lg hover:bg-green-600"
            @click="showModal = true"
          >
            Add
          </button>
        </div>
      </div>
  
      <!-- Modal for Adding Address -->
      <div
        v-if="showModal"
        class="fixed z-10 inset-0 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
  
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
  
          <div
            class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
          >
            <div class="mt-3 text-center sm:mt-0 sm:text-left">
              <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                Add New Address
              </h3>
              <div class="mt-2">
                <form @submit.prevent="submitAddress">
                  <div class="mb-4">
                    <label class="block text-gray-700">Name</label>
                    <input
                      type="text"
                      v-model="newAddress.name"
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white"
                      required
                    />
                  </div>
  
                  <div class="mb-4">
                    <label class="block text-gray-700">City</label>
                    <input
                      type="text"
                      v-model="newAddress.city"
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white"
                      required
                    />
                  </div>
  
                  <div class="mb-4">
                    <label class="block text-gray-700">Phone Number</label>
                    <input
                      type="text"
                      v-model="newAddress.phone"
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white"
                      required
                    />
                  </div>
  
                  <div class="mb-4">
                    <label class="block text-gray-700">Zipcode</label>
                    <input
                      type="text"
                      v-model="newAddress.zipcode"
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white"
                      required
                    />
                  </div>
  
                  <div class="mb-4">
                    <label class="block text-gray-700">Email</label>
                    <input
                      type="email"
                      v-model="newAddress.email"
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white"
                      required
                    />
                  </div>
  
                  <div class="flex justify-end">
                    <button
                      type="button"
                      @click="showModal = false"
                      class="bg-gray-500 text-white py-2 px-4 rounded-lg mr-2"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      class="bg-[#38996e] text-white py-2 px-4 rounded-lg"
                    >
                      Add Address
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </template>
  <script>
export default {
  data() {
    return {
      showModal: false,
      newAddress: {
        name: '',
        city: '',
        phone: '',
        zipcode: '',
        email: '',
      },
      addresses: [], // Initial empty array for addresses
    };
  },
  methods: {
    // Method to show the modal for adding a new address
    addAddress() {
      this.showModal = true;
    },
    // Method to remove an address by index
    removeAddress(index) {
      this.addresses.splice(index, 1);
    },
    // Placeholder for editing an address (expand as needed)
    editAddress(index) {
      alert('Edit address at index: ' + index);
    },
    // Method to handle address form submission
    submitAddress() {
      this.addresses.push({
        type: 'New',
        name: this.newAddress.name,
        city: this.newAddress.city,
        phone: this.newAddress.phone,
        zipcode: this.newAddress.zipcode,
        email: this.newAddress.email,
      });
      this.showModal = false; // Close the modal after adding the address
      this.newAddress = {
        name: '',
        city: '',
        phone: '',
        zipcode: '',
        email: '',
      };
    },
  },
};
</script>
