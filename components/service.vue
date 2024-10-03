<template>
  <div class=" bg-white">
    <h2 class="text-2xl font-bold mb-4 text-[#28574e]">Select Category</h2>

    <!-- Category Buttons -->
    <div class="flex flex-wrap mb-4 md:space-x-2 space-y-2 md:space-y-0">
      <button 
        :class="{
          'bg-[#28574e] text-white': activeFilter === 'all',
          'bg-blue-100 text-[#28574e]': activeFilter !== 'all'
        }"
        class="px-4 py-2 rounded flex items-center w-full sm:w-auto"
        @click="filterServices('all')"
      >
        <span>All</span>
      </button>

      <button 
        :class="{
          'bg-[#28574e] text-white': activeFilter === 'Hair',
          'bg-blue-100 text-[#28574e]': activeFilter !== 'Hair'
        }"
        class="border px-4 py-2 rounded flex items-center w-full sm:w-auto"
        @click="filterServices('Hair')"
      >
        <span>Hair</span>
      </button>

      <button 
        :class="{
          'bg-[#28574e] text-white': activeFilter === 'Skin',
          'bg-blue-100 text-[#28574e]': activeFilter !== 'Skin'
        }"
        class="border px-4 py-2 rounded flex items-center w-full sm:w-auto"
        @click="filterServices('Skin')"
      >
        <span>Skin Care</span>
      </button>

      <button 
        :class="{
          'bg-[#28574e] text-white': activeFilter === 'Baby',
          'bg-blue-100 text-[#28574e]': activeFilter !== 'Baby'
        }"
        class="border px-4 py-2 rounded flex items-center w-full sm:w-auto"
        @click="filterServices('Baby')"
      >
        <span>Baby Care</span>
      </button>
    </div>

    <!-- Display Services -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        v-for="service in filteredServices"
        :key="service.id"
        @click="selectService(service)"
        :class="[ 
          'p-4 border rounded cursor-pointer bg-white hover:shadow-md text-[#28574e]', 
          selectedService === service ? 'border-[#28574e]' : 'border-gray-300' 
        ]"
      >
        <div class="flex space-x-4 items-center">
          <div class="w-14 border rounded-full p-1 text-[#28574e] border-[#28574e]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0V0z" fill="none"></path>
              <path d="M13.2 7.07L10.25 11l2.25 3c.33.44.24 1.07-.2 1.4-.44.33-1.07.25-1.4-.2-1.05-1.4-2.31-3.07-3.1-4.14-.4-.53-1.2-.53-1.6 0l-4 5.33c-.49.67-.02 1.61.8 1.61h18c.82 0 1.29-.94.8-1.6l-7-9.33c-.4-.54-1.2-.54-1.6 0z"></path>
            </svg>
          </div>
          <div class="flex flex-col">
            <h3 class="font-semibold">{{ service.name }}</h3>
            <p>Duration: {{ service.duration }} mins</p>
            <p>Price: ₹{{ service.price }} ({{ service.category }} care)</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Next Button -->
    <button
      @click="confirmService"
      :disabled="!selectedService"
      class="mt-6 bg-[#28574e] text-white px-4 py-2 rounded w-full sm:w-auto"
    >
      Next: Basic Details
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        { id: 1, name: "Dandruff", duration: 60, price: 1000, category: "Hair" },
        { id: 2, name: "Hairfall", duration: 60, price: 1000, category: "Hair" },
        { id: 3, name: "Hair Thinning", duration: 60, price: 1000, category: "Hair" },
        { id: 4, name: "Damaged & Fizzy Hair", duration: 60, price: 1000, category: "Hair" },
        { id: 5, name: "Bald Patches", duration: 60, price: 1000, category: "Hair" },
        { id: 6, name: "Dull Hair", duration: 60, price: 1000, category: "Hair" },
        { id: 7, name: "Oily Scalp", duration: 60, price: 1000, category: "Hair" },

        { id: 8, name: "Acne & Acne Scar", duration: 30, price: 500, category: "Skin" },
        { id: 9, name: "Aging", duration: 30, price: 500, category: "Skin" },
        { id: 10, name: "Dehydration", duration: 30, price: 500, category: "Skin" },
        { id: 11, name: "Damaged & Sensitive Skin", duration: 30, price: 500, category: "Skin" },
        { id: 12, name: "Under Eye Darkness", duration: 30, price: 500, category: "Skin" },
        { id: 13, name: "Under Arm Darkness", duration: 30, price: 500, category: "Skin" },
        { id: 14, name: "Stretch Marks", duration: 30, price: 500, category: "Skin" },
        { id: 15, name: "Pigmentation", duration: 30, price: 500, category: "Skin" },
        { id: 16, name: "Oiliness", duration: 30, price: 500, category: "Skin" },
        { id: 17, name: "Lip(Cracked/Darkness)", duration: 30, price: 500, category: "Skin" },
      ],
      selectedService: null,
      filteredServices: [],
      activeFilter: 'all',
    };
  },
  created() {
    this.filteredServices = this.services.sort((a, b) => a.name.localeCompare(b.name));
  },
  methods: {
    filterServices(category) {
      this.activeFilter = category;
      this.filteredServices = category === 'all'
        ? this.services
        : this.services.filter(service => service.category === category);
      this.filteredServices.sort((a, b) => a.name.localeCompare(b.name));
    },
    selectService(service) {
      this.selectedService = service;
    },
    confirmService() {
      if (this.selectedService) {
        this.$emit("serviceSelected", this.selectedService);
      }
    },
  },
};
</script>

<style scoped>
/* Additional styles */
</style>
