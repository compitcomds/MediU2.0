<template>
  <div class="p-4 mt-4">
    <h1 class="text-4xl text-center font-semibold mb-6 text-[#238878]">Package status</h1>
    <div class="container">
      <div class="flex flex-col md:grid grid-cols-12 text-gray-50">
        <div v-for="(status, index) in packageStatuses" :key="index" class="flex md:contents">
          <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
            <div class="h-full w-6 flex items-center justify-center">
              <div
                :class="['h-full w-1 pointer-events-none', status.isActive ? status.isCompleted ? 'bg-green-500' : 'bg-orange-500' : 'bg-gray-300']"
              ></div>
            </div>
            <div
              :class="[ 
                'w-6 h-6 absolute top-1/2 -mt-3 rounded-full shadow text-center',
                status.isCompleted
                  ? 'bg-green-500'
                  : status.isFailed
                  ? 'bg-orange-500'
                  : 'bg-gray-300'
              ]"
            >
              <i
                :class="[ 
                  'fas',
                  status.isCompleted
                    ? 'fa-check-circle text-white'
                    : status.isFailed
                    ? 'fa-times-circle text-white'
                    : 'fa-exclamation-circle text-gray-400'
                ]"
              ></i>
            </div>
          </div>
          <div
            :class="[ 
              'col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full',
              status.isCompleted
                ? 'bg-green-500'
                : status.isFailed
                ? 'bg-orange-500'
                : 'bg-gray-300'
            ]"
          >
            <!-- Ensure there are no invalid elements here -->
            <div class="time text-white">{{ status.time }}</div>
            <p class="text-lg font-semibold">{{ status.title }}</p>
            <p v-if="status.courier">Courier Service: {{ status.courier }}</p>
            <p v-if="status.trackingNumber">Tracking Number: {{ status.trackingNumber }}</p>
            <p v-if="status.estimatedDelivery">Estimated Delivery Date: {{ status.estimatedDelivery }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      packageStatuses: [
        {
          time: '08/04/2024 5:23pm',
          title: 'Product Shipped',
          courier: 'UPS, R. Gosling',
          estimatedDelivery: '09/04/2024',
          isCompleted: true,
          isActive: true,
        },
        {
          time: '08/04/2024 5:23pm',
          title: 'Product Shipped',
          trackingNumber: '3409-4216-8759',
          warehouse: 'Top Shirt 12b',
          isCompleted: true,
          isActive: true,
        },
        {
          time: '09/04/2024 4:34pm',
          title: 'Product Packaging',
          isCompleted: false,
          isFailed: true,
          isActive: true,
        },
        {
          time: '10/04/2024 2:36pm',
          title: 'Order Placed',
          isCompleted: false,
          isActive: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>
