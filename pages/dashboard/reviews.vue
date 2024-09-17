<template>
    <div class="min-h-screen p-6 bg-[#edf8f3] flex">
        
      <DashboardSidenav />
  
      <div class="flex-1 px-8 bg-gray-100">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-[#28574e]">
          <DashboardReviewCard
            name="Michel Poe"
            img="https://via.placeholder.com/50"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <DashboardReviewCard
            name="Celesto Anderson"
            img="https://via.placeholder.com/50"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <DashboardReviewCard
            name="Monsur Rahman Lito"
            img="https://via.placeholder.com/50"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <DashboardReviewCard
            name="Johan Doe"
            img="https://via.placeholder.com/50"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <!-- Add more cards as needed -->
        </div>
      </div>
    </div>
  </template>
  
  <script>  
  export default {
  }
  </script>
  