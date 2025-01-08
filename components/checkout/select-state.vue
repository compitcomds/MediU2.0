<template>
  <div>
    <select
      id="state"
      v-model="modelValue"
      class="w-full rounded-lg border border-gray-300 bg-white p-3"
      placeholder="Select a state"
    >
      <option disabled value="">-- Select a State --</option>
      <option v-for="state in states" :key="state" :value="state">
        {{ state }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
const modelValue = defineModel();

const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
];
</script>

<style scoped>
/* Add custom styles here if needed */
</style>
