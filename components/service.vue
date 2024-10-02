<template>
  <div class=" ">
    <h2 class="text-2xl font-bold mb-4 text-[#28574e]">Select Category</h2>

    <div class="flex mb-4 space-x-4">
      <button 
        :class="{
          'bg-[#28574e] text-white': activeFilter === 'all',
          'bg-blue-100 text-[#28574e]': activeFilter !== 'all'
        }"
        class="px-4 py-2 rounded flex items-center"
        @click="filterServices('all')"
      >
        <span>All</span>
        <svg v-if="activeFilter === 'all'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4 ml-2 rounded-full">
          <path d="M0 0h24v24H0V0z" fill="white"></path>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29 5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z"></path>
        </svg>
      </button>

      <button 
        :class="{
          'bg-[#28574e] text-white': activeFilter === 'Hair',
          'bg-blue-100 text-[#28574e]': activeFilter !== 'Hair'
        }"
        class="border px-4 py-2 rounded flex items-center"
        @click="filterServices('Hair')"
      >
        <span>Hair</span>
        <svg v-if="activeFilter === 'Hair'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4 ml-2 rounded-full">
          <path d="M0 0h24v24H0V0z" fill="white"></path>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29 5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z"></path>
        </svg>
      </button>

      <button 
        :class="{
          'bg-[#28574e] text-white': activeFilter === 'Skin',
          'bg-blue-100 text-[#28574e]': activeFilter !== 'Skin'
        }"
        class="border px-4 py-2 rounded flex items-center"
        @click="filterServices('Skin')"
      >
        <span>Skin Care</span>
        <svg v-if="activeFilter === 'Skin'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4 ml-2 rounded-full">
          <path d="M0 0h24v24H0V0z" fill="white"></path>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29 5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z"></path>
        </svg>
      </button>
      <button 
        :class="{
          'bg-[#28574e] text-white': activeFilter === 'Baby',
          'bg-blue-100 text-[#28574e]': activeFilter !== 'Baby'
        }"
        class="border px-4 py-2 rounded flex items-center"
        @click="filterServices('Baby')"
      >
        <span>Baby Care</span>
        <svg v-if="activeFilter === 'Baby'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4 ml-2 rounded-full">
          <path d="M0 0h24v24H0V0z" fill="white"></path>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29 5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z"></path>
        </svg>
      </button>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div
        v-for="service in filteredServices"
        :key="service.id"
        @click="selectService(service)"
        :class="[ 
          'p-4 border rounded cursor-pointer bg-white hover:shadow-md text-[#28574e]', 
          selectedService === service ? 'border-[#28574e]' : 'border-gray-300' 
        ]"
      >
        <h3 class="font-semibold">{{ service.name }}</h3>
        <p>Duration: {{ service.duration }} mins</p>
        <p>Price: ₹{{ service.price }}</p>
      </div>
    </div>

    <button
      @click="confirmService"
      :disabled="!selectedService"
      class="mt-6 bg-[#28574e] text-white px-4 py-2 rounded"
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
        { id: 1, name: "Illness", duration: 60, price: 100, category: "Hair" },
        { id: 2, name: "Cosmetic Dentistry", duration: 30, price: 100, category: "Skin" },
        { id: 3, name: "Hair Infection", duration: 30, price: 100, category: "Hair" },
        { id: 3, name: "Ear Infection", duration: 30, price: 100, category: "Baby" },
      ],
      selectedService: null,
      filteredServices: [],
      activeFilter: 'all', // Track the currently active filter
    };
  },
  created() {
    this.filteredServices = this.services;
  },
  methods: {
    filterServices(category) {
      this.activeFilter = category; // Update the active filter
      if (category === "all") {
        this.filteredServices = this.services;
      } else {
        this.filteredServices = this.services.filter(service => service.category === category);
      }
    },
    selectService(service) {
      this.selectedService = service;
    },
    confirmService() {
      if (this.selectedService) {
        this.$emit("serviceSelected", true); // Notify the parent component that a service is selected
      }
    },
  },
};
</script>

<style scoped>
/* Additional styles if needed */
</style>
