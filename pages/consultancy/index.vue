<template>
  <div class="flex justify-center space-x-4 h-screen p-16 bg-white">
    <!-- Sidebar -->
    <aside class="w-60 bg-white shadow-lg rounded-md p-6 max-h-56">
      <nav>
        <ul>
          <!-- Service Tab -->
          <li
            :class="{
              'text-blue-600 font-semibold': currentTab === 'service',
              'text-gray-400 cursor-not-allowed': currentTab !== 'service',
              'text-blue-400': progress >= 0,
            }"
            class="mb-6 flex space-x-4"
            :style="tabStyle('service')"
          >
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0V0z" fill="none"></path>
              <path
                d="M19 13H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM19 3H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
              ></path>
            </svg>
            <i class="fas fa-concierge-bell"></i> Service
          </li>

          <!-- Basic Details Tab -->
          <li
            :class="{
              'text-blue-600 font-semibold': currentTab === 'basicDetails',
              'text-gray-400 cursor-not-allowed': progress < 1,
              'text-blue-400': progress >= 1,
            }"
            class="mb-6 flex space-x-4"
            :style="tabStyle('basicDetails')"
          >
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              viewBox="0 0 24 24"
            >
              <g>
                <rect fill="none" height="24" width="24"></rect>
                <path
                  d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M13,17H8c-0.55,0-1-0.45-1-1 c0-0.55,0.45-1,1-1h5c0.55,0,1,0.45,1,1C14,16.55,13.55,17,13,17z M16,13H8c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h8 c0.55,0,1,0.45,1,1C17,12.55,16.55,13,16,13z M16,9H8C7.45,9,7,8.55,7,8c0-0.55,0.45-1,1-1h8c0.55,0,1,0.45,1,1 C17,8.55,16.55,9,16,9z"
                ></path>
              </g>
            </svg>
            <i class="fas fa-user"></i> Basic Details
          </li>

          <!-- Summary Tab -->
          <li
            :class="{
              'text-blue-600 font-semibold': currentTab === 'summary',
              'text-gray-400 cursor-not-allowed': progress < 2,
              'text-blue-400': progress >= 2,
            }"
            class="mb-6 flex space-x-4"
            :style="tabStyle('summary')"
          >
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0V0z" fill="none"></path>
              <path
                d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9.29 16.29L6.7 13.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l5.88-5.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-6.59 6.59c-.38.39-1.02.39-1.41 0z"
              ></path>
            </svg>
            <i class="fas fa-file-alt"></i> Summary
          </li>

          <!-- Confirmation Tab -->
          <li
            :class="{
              'text-blue-600 font-semibold': currentTab === 'confirmation',
              'text-gray-400 cursor-not-allowed': progress < 3,
              'text-blue-400': progress >= 3,
            }"
            class="flex space-x-4"
            :style="tabStyle('confirmation')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="black"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-calendar-check"
            >
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M3 10h18" />
              <path d="m9 16 2 2 4-4" />
            </svg>
            <i class="fas fa-check-circle"></i> Confirmation
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main content -->
    <main class="w-2/4 p-8 border border-[#28574e] rounded-xl">
      <!-- The components (Service, BasicDetails, Summary, Confirmation) are rendered based on currentTab -->
      <component
        :is="currentTabComponent"
        @nextTab="handleNextTab"
        @serviceSelected="handleServiceSelected"
        @basicDetailsFilled="handleBasicDetailsFilled"
        @appointmentBooked="handleAppointmentBooked"
      ></component>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTab: "service", // The current active tab
      progress: 0, // Progress tracking (0: Service, 1: BasicDetails, 2: Summary, 3: Confirmation)
    };
  },
  computed: {
    // Compute which component should be loaded based on the currentTab
    currentTabComponent() {
      return this.currentTab;
    },
  },
  methods: {
    // Method to handle the "Next" button click and proceed to the next tab
    handleNextTab() {
      if (this.progress === 0) {
        this.currentTab = "basicDetails";
        this.progress = 1;
      } else if (this.progress === 1) {
        this.currentTab = "summary";
        this.progress = 2;
      } else if (this.progress === 2) {
        this.currentTab = "confirmation";
        this.progress = 3;
      }
    },
    handleServiceSelected(serviceSelected) {
      // Service selected and proceed to next tab
      if (serviceSelected) {
        this.currentTab = "basicDetails";
        this.progress = 1;
      }
    },
    handleBasicDetailsFilled(detailsFilled) {
      // Basic details filled and proceed to next tab
      if (detailsFilled) {
        this.currentTab = "summary";
        this.progress = 2;
      }
    },
    handleAppointmentBooked(appointmentBooked) {
      // Appointment booked and proceed to next tab
      if (appointmentBooked) {
        this.currentTab = "confirmation";
        this.progress = 3;
      }
    },
    // Custom style based on tab state
    tabStyle(tab) {
      return {
        cursor: this.isTabClickable(tab) ? "pointer" : "not-allowed",
      };
    },
    isTabClickable(tab) {
      if (tab === "service") return this.progress >= 0;
      if (tab === "basicDetails") return this.progress >= 1;
      if (tab === "summary") return this.progress >= 2;
      if (tab === "confirmation") return this.progress >= 3;
    },
  },
};
</script>

<style scoped>
.cursor-not-allowed {
  pointer-events: none;
}
</style>
