<template>
  <main class="w-full lg:w-3/4 lg:p-10 pb-20 lg:pb-0">
    <h2 class="text-gray-600 mb-6">
      The following addresses will be used on the checkout page by default.
    </h2>

    <!-- Addresses Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Loop through addresses -->
      <div v-for="(address, index) in addresses" :key="index" class="border p-6 rounded-lg shadow-lg bg-white">
        <!-- Header with Address Type -->
        <h3 class="font-semibold mb-4 text-[#238878] text-xl">
          {{ address.type }} Address
        </h3>

        <!-- Address Details -->
        <div class="text-[#238878] space-y-2">
          <p><span class="font-medium">Name:</span> {{ address.name }}</p>
          <p><span class="font-medium">City:</span> {{ address.city }}</p>
          <p><span class="font-medium">Phone:</span> {{ address.phone }}</p>
          <p><span class="font-medium">Email:</span> {{ address.email }}</p>
        </div>

        <!-- Action Buttons -->
        <div class="border-t mt-4 pt-4 flex justify-end">
          <button
            class="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-red-600 bg-red-100 hover:bg-red-200 rounded-lg transition"
            @click="removeAddress(index)">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
            Remove
          </button>
        </div>
      </div>

    </div>

    <!-- Add New Address Section -->
    <div class="border-dashed border-2 border-gray-300 mt-8 p-10 text-center rounded-lg">
      <div class="flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="White"
          stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
          class="p-1 lucide lucide-house-plus bg-[#38996e]">
          <path d="M13.22 2.416a2 2 0 0 0-2.511.057l-7 5.999A2 2 0 0 0 3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.354" />
          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
          <path d="M15 6h6" />
          <path d="M18 3v6" />
        </svg>
        <p class="mb-4 text-black">Add New Address</p>
        <button class="bg-[#38996e] text-white py-2 px-4 rounded-lg hover:bg-green-600" @click="showModal = true">
          Add
        </button>
      </div>
    </div>

    <!-- Modal for Adding Address -->
    <div v-if="showModal" class="fixed inset-0 z-10 flex items-center justify-center bg-gray-500 bg-opacity-75"
      aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <!-- Modal Container -->
      <div
        class="relative bg-white rounded-lg shadow-lg transition-all transform sm:max-w-lg w-full p-6 mx-4 sm:mx-0 sm:my-8">
        <!-- Header with Title -->
        <div class="text-center sm:text-left mb-6">
          <h3 class="text-2xl font-semibold text-gray-800" id="modal-title">
            Add New Address
          </h3>
        </div>

        <!-- Form Section -->
        <div class="space-y-4">
          <form @submit.prevent="submitAddress">
            <!-- Name Field -->
            <div>
              <label class="block text-gray-600 font-medium">Name</label>
              <input type="text" v-model="newAddress.name"
                class="w-full mt-1 px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                required />
            </div>

            <!-- City Field -->
            <div>
              <label class="block text-gray-600 font-medium">City</label>
              <input type="text" v-model="newAddress.city"
                class="w-full mt-1 px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                required />
            </div>

            <!-- Phone Number Field -->
            <div>
              <label class="block text-gray-600 font-medium">Phone Number</label>
              <input type="text" v-model="newAddress.phone"
                class="w-full mt-1 px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                required />
            </div>

            <!-- Zipcode Field -->
            <div>
              <label class="block text-gray-600 font-medium">Zipcode</label>
              <input type="text" v-model="newAddress.zipcode"
                class="w-full mt-1 px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                required />
            </div>

            <!-- Email Field -->
            <div>
              <label class="block text-gray-600 font-medium">Email</label>
              <input type="email" v-model="newAddress.email"
                class="w-full mt-1 px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                required />
            </div>

            <!-- Buttons Section -->
            <div class="flex justify-end mt-6 space-x-3">
              <button type="button" @click="showModal = false"
                class="py-2 px-4 rounded-lg bg-gray-500 text-white font-semibold hover:bg-gray-600 transition-colors">
                Cancel
              </button>
              <button type="submit"
                class="py-2 px-4 rounded-lg bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors">
                Add Address
              </button>
            </div>
          </form>
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
