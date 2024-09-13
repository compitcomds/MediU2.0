<template>
  <div :class="[showNotification ? 'mt- xl:mt-[0px]' : 'mt- xl:mt-[0px]']"
    class="w-full sticky z-10 top-0 bg-[#537971] text-black">
    <div class="relative bg-white">
      <!-- Main Menu -->
      <ul class="flex justify-center space-x-24 bg-[#537971] text-white py-4">
        <li class="group relative cursor-pointer py-2">
          <a href="/" class="font-semibold hover:opacity-70 text-xl">Home</a>
        </li>

        <!-- Hair Concerns Menu -->
        <li class="group relative cursor-pointer py-2">
          <div class="font-semibold hover:opacity-70 text-xl">Hair</div>
          <!-- Mega Menu Dropdown for Hair -->
          <div
            class="invisible absolute p-4 -left-[300px] text-black top-full z-50 w-[90vw] max-w-7xl bg-white opacity-0 transform transition-all duration-500 ease-in-out group-hover:visible group-hover:opacity-100 group-hover:translate-y-5">
            <div class="p-6 flex justify-between w-full">
              <div class="w-8/12 grid grid-cols-3 gap-6">
                <!-- Concerns Related to Hair -->
                <div>
                  <h2 class="font-bold text-lg mb-4 border-b text-center">Hair Concerns</h2>
                  <ul class="space-y-2 text-center">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Dandruff</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Hairfall
                      </a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Hair Thining
                      </a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Damaged & Frizzy Hair
                      </a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Bald Patches</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Dull Hair</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Oily Scalp</a>
                    </li>
                  </ul>
                </div>

                <!-- Concerns Related to Skin -->
                <div>
                  <h2 class="font-bold text-lg mb-4 border-b text-center">Select By Ingredients</h2>
                  <ul class="space-y-2 text-center">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Minoxidil</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Redensyl</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Capixyl
                      </a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Feptide</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Carnitine</a>
                    </li>
                  </ul>
                </div>

                <!-- Concerns Related to Pediatric -->
                <div>
                  <h2 class="font-bold text-lg mb-4 border-b text-center">Hair Care</h2>
                  <ul class="space-y-2 text-center">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Shampoo</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Conditioner</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Mask</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Serum</a>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Products Row -->
              <HomeNavSlider  />
              <!-- Deal of the Month -->
              <!-- <div class="mt-8 bg-gray-100 p-4 rounded-lg shadow-lg">
                <h2 class="font-bold text-2xl mb-4 text-gray-800">
                  Deal of the Month
                </h2>
                <p class="text-gray-600 mb-6 text-sm">
                  Yes! Send me exclusive offers, personalized, and unique gift
                  ideas, tips for shopping on Mediu.
                </p>
                <div class="flex items-center space-x-4 text-gray-800">
                  <div class="countdown-item">
                    <span class="countdown-number">{{ days }}</span>
                    <span class="countdown-label">Days</span>
                  </div>
                  <div class="countdown-item">
                    <span class="countdown-number">{{ hours }}</span>
                    <span class="countdown-label">Hours</span>
                  </div>
                  <div class="countdown-item">
                    <span class="countdown-number">{{ minutes }}</span>
                    <span class="countdown-label">Minutes</span>
                  </div>
                  <div class="countdown-item">
                    <span class="countdown-number">{{ seconds }}</span>
                    <span class="countdown-label">Seconds</span>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </li>

        <!-- Skin Concerns Menu -->
        <li class="group relative cursor-pointer py-2">
          <div class="font-semibold hover:opacity-70 text-xl">Skin</div>
          <!-- Mega Menu Dropdown for Hair -->
          <div
            class="invisible absolute p-4 -left-[400px] text-black top-full z-50 w-[90vw] max-w-7xl bg-white opacity-0 transform transition-all duration-500 ease-in-out group-hover:visible group-hover:opacity-100 group-hover:translate-y-5">
            <div class="p-6 flex justify-between w-full">
              <div class="8/12 grid grid-cols-3 gap-6">
                <!-- Concerns Related to Hair -->
                <div>
                  <h2 class="font-bold text-lg mb-4 border-b text-center">Shop By Concern</h2>
                  <ul class="space-y-2 text-center">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Acne & Acne Scar</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Aging
                      </a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Dehydration
                      </a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Damaged & Sensitive Skin
                      </a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Under Eye Darkness</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Under Arm Darkness</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Stretch Marks</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Pigmentation</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Oiliness</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Sip(Cracked/Darkness)</a>
                    </li>
                  </ul>
                </div>

                <!-- Concerns Related to Skin -->
                <div>
                  <h2 class="font-bold text-lg mb-4 border-b text-center">Shop By Ingrdients</h2>
                  <ul class="space-y-2 text-center">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Vitamin C</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">BHA / Salicylic Acid</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Retinoid / Retinol
                      </a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Niacinamide</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">UV Filters</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Ceramide</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Hyaluronic Acid</a>
                    </li>
                  </ul>
                </div>

                <!-- Concerns Related to Pediatric -->
                <div>
                  <h2 class="font-bold text-lg mb-4 border-b text-center">Skin Care</h2>
                  <ul class="space-y-2 text-center ">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Cleanse</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Tone</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Treat</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Moisturize</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">SPF</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Under Eye</a>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Products Row -->
              <HomeNavSlider />

              <!-- Deal of the Month -->
              <!-- <div class="mt-8 bg-gray-100 p-4 rounded-lg shadow-lg">
                <h2 class="font-bold text-2xl mb-4 text-gray-800">
                  Deal of the Month
                </h2>
                <p class="text-gray-600 mb-6 text-sm">
                  Yes! Send me exclusive offers, personalized, and unique gift
                  ideas, tips for shopping on Mediu.
                </p>
                <div class="flex items-center space-x-4 text-gray-800">
                  <div class="countdown-item">
                    <span class="countdown-number">{{ days }}</span>
                    <span class="countdown-label">Days</span>
                  </div>
                  <div class="countdown-item">
                    <span class="countdown-number">{{ hours }}</span>
                    <span class="countdown-label">Hours</span>
                  </div>
                  <div class="countdown-item">
                    <span class="countdown-number">{{ minutes }}</span>
                    <span class="countdown-label">Minutes</span>
                  </div>
                  <div class="countdown-item">
                    <span class="countdown-number">{{ seconds }}</span>
                    <span class="countdown-label">Seconds</span>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </li>
        <li class="group relative cursor-pointer py-2">
          <a href="/comingSoon" class="font-semibold hover:opacity-70 text-xl">Baby Care</a>
        </li>
        <!-- baby care -->
        <li class="group relative cursor-pointer py-2">
          <nuxt-link to="/comingSoon" class="font-semibold hover:opacity-70 text-xl">Brands</nuxt-link>
          <!-- Mega Menu Dropdown for Hair -->
          <!-- <div
            class="invisible absolute p-4 -left-[600px] text-black top-full z-50 w-[90vw] max-w-7xl bg-white opacity-0 transform transition-all duration-500 ease-in-out group-hover:visible group-hover:opacity-100 group-hover:translate-y-5">
            <div class="p-6">
              <div class="grid grid-cols-4 gap-6">
                
                <div>
                  <h2 class="font-bold text-lg mb-4">A</h2>
                  <ul class="space-y-2">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Brand 1</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Brand 2
                      </a>
                    </li>
                  </ul>
                </div>

                
                <div>
                  <h2 class="font-bold text-lg mb-4">B</h2>
                  <ul class="space-y-2">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Brand 1</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Brand 2</a>
                    </li>
                  </ul>
                </div>

                
                <div>
                  <h2 class="font-bold text-lg mb-4">C</h2>
                  <ul class="space-y-2">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Brand 1</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Brand 2</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="font-bold text-lg mb-4">D</h2>
                  <ul class="space-y-2">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Brand 1</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Brand 2</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="font-bold text-lg mb-4">E</h2>
                  <ul class="space-y-2">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Brand 1</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Brand 2</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="font-bold text-lg mb-4">F</h2>
                  <ul class="space-y-2">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Brand 1</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Brand 2</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="font-bold text-lg mb-4">G</h2>
                  <ul class="space-y-2">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Brand 1</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Brand 2</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="font-bold text-lg mb-4">H</h2>
                  <ul class="space-y-2">
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Brand 1</a>
                    </li>
                    <li>
                      <a href="/shop" class="text-gray-800 hover:text-blue-600 hover:underline">Brand 2</a>
                    </li>
                  </ul>
                </div>
              </div>

              
              <div class="grid grid-cols-6 gap-6 mt-6 z-50">
                <div>
                  <img src="https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC_4371.jpg?v=1725637153"
                    alt="Product 1" class="rounded-lg shadow-lg z-50" />
                </div>
                <div>
                  <img src="https://cdn.shopify.com/s/files/1/0624/7265/0825/files/01_1.jpg?v=1725548277"
                    alt="Product 2" class="rounded-lg shadow-lg z-50" />
                </div>
                <div>
                  <img src="https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC_4223.jpg?v=1725635349"
                    alt="Product 3" class="rounded-lg shadow-lg z-50" />
                </div>
                <div>
                  <img src="https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC00156.jpg?v=1725639738"
                    alt="Product 4" class="rounded-lg shadow-lg z-50" />
                </div>
                <div>
                  <img src="https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC00029.jpg?v=1725639090"
                    alt="Product 5" class="rounded-lg shadow-lg z-50" />
                </div>
                <div>
                  <img src="https://cdn.shopify.com/s/files/1/0624/7265/0825/files/DSC00156.jpg?v=1725639738"
                    alt="Product 6" class="rounded-lg shadow-lg z-50" />
                </div>
              </div>

              <!-- Deal of the Month -->
              <!-- <div class="mt-8 bg-gray-100 p-4 rounded-lg shadow-lg">
                <h2 class="font-bold text-2xl mb-4 text-gray-800">
                  Deal of the Month
                </h2>
                <p class="text-gray-600 mb-6 text-sm">
                  Yes! Send me exclusive offers, personalized, and unique gift
                  ideas, tips for shopping on Mediu.
                </p>
                <div class="flex items-center space-x-4 text-gray-800">
                  <div class="countdown-item">
                    <span class="countdown-number">{{ days }}</span>
                    <span class="countdown-label">Days</span>
                  </div>
                  <div class="countdown-item">
                    <span class="countdown-number">{{ hours }}</span>
                    <span class="countdown-label">Hours</span>
                  </div>
                  <div class="countdown-item">
                    <span class="countdown-number">{{ minutes }}</span>
                    <span class="countdown-label">Minutes</span>
                  </div>
                  <div class="countdown-item">
                    <span class="countdown-number">{{ seconds }}</span>
                    <span class="countdown-label">Seconds</span>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
        </li>
        <!-- Supplements Menu -->
        <li class="group relative cursor-pointer py-2">
          <a href="/comingSoon" class="font-semibold hover:opacity-70 text-xl">Supplements</a>
        </li>
        <li class="group relative cursor-pointer py-2">
          <nuxt-link to="/comingSoon" class="font-semibold hover:opacity-70 text-xl">Mediu Kit</nuxt-link>
          
          <!-- <div
            class="invisible absolute p-4 -left-[1000px] text-black top-full z-50 w-[90vw] max-w-7xl bg-white opacity-0 transform transition-all duration-500 ease-in-out group-hover:visible group-hover:opacity-100 group-hover:translate-y-5">
            <div class="p-6 flex justify-between w-full">
              <div class="8/12 grid grid-cols-3 gap-6">
                
                <div>
                  <h2 class="font-bold text-lg mb-4">Hair Growth Kits</h2>
                </div>

                
                <div>
                  <h2 class="font-bold text-lg mb-4">Dandruff Kits</h2>
                </div>

                
                <div>
                  <h2 class="font-bold text-lg mb-4">Itchy Scalp Kits</h2>
                </div>
                <div>
                  <h2 class="font-bold text-lg mb-4">Basic Kits</h2>
                </div>
                <div>
                  <h2 class="font-bold text-lg mb-4">Advanced Kits</h2>
                </div>
              </div>

              
              <HomeNavSlider />

              
            </div>
          </div> -->
        </li>
      </ul>
    </div>
  </div>
</template>

<!-- <script>
export default {
  data() {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
      interval: null,
    };
  },
  methods: {
    startCountdown(targetDate) {
      const endDate = new Date(targetDate).getTime();

      const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = endDate - now;

        if (distance < 0) {
          clearInterval(this.interval);
          this.days = "00";
          this.hours = "00";
          this.minutes = "00";
          this.seconds = "00";
          return;
        }

        this.days = Math.floor(distance / (1000 * 60 * 60 * 24))
          .toString()
          .padStart(2, "0");
        this.hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
          .toString()
          .padStart(2, "0");
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
          .toString()
          .padStart(2, "0");
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000)
          .toString()
          .padStart(2, "0");
      };

      updateCountdown(); // Initial call
      this.interval = setInterval(updateCountdown, 1000);
    },
  },
  mounted() {
    // Set your target date here
    const targetDate = "2024-10-01T00:00:00Z"; // Adjust to your target date and time
    this.startCountdown(targetDate);
  },
  beforeDestroy() {
    // Clear the interval when the component is destroyed
    if (this.interval) {
      clearInterval(this.interval);
    }
  },
};
</script> -->
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  data() {
    return {
      slides: [
        "https://ccdstest.b-cdn.net/Medi%20u/beauty%20skincare/1.png",
        "https://ccdstest.b-cdn.net/Medi%20u/beauty%20skincare/4.png",
        "https://ccdstest.b-cdn.net/Medi%20u/beauty%20skincare/6.png",
      ],
    };
  },
};
</script>
<style scoped>
.countdown-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.countdown-number {
  font-size: 2.5rem;
  font-weight: bold;
  color: #2d3748;
  margin-bottom: 4px;
}

.countdown-label {
  font-size: 0.875rem;
  color: #4a5568;
}

h2 {
  color: #2d3748;
}

p {
  color: #4a5568;
  line-height: 1.5;
}

/* Swiper navigation buttons styling */
/* Increase specificity and use direct resizing if necessary */
.mySwiper .swiper-button-prev,
.mySwiper .swiper-button-next {
  color: rgb(0, 68, 0) !important;
}

/* Default font size for larger screens */
.mySwiper .swiper-button-prev::after,
.mySwiper .swiper-button-next::after {
  font-size: 30px !important;
  /* Default font size for larger screens */
}

/* Media query for tablets and smaller screens */
@media (max-width: 768px) {

  .mySwiper .swiper-button-prev::after,
  .mySwiper .swiper-button-next::after {
    font-size: 18px !important;
    /* Adjusted font size for tablets */
  }
}

/* Media query for mobile screens */
@media (max-width: 480px) {

  .mySwiper .swiper-button-prev::after,
  .mySwiper .swiper-button-next::after {
    font-size: 14px !important;
    /* Further reduced font size for mobile screens */
  }
}

/* Optional: to style the Swiper container itself */
.mySwiper {
  background-color: white;
  border-radius: 8px;
  /* Example for rounded corners */
}

.swiper-pagination-bullet {
  background-color: rgb(0, 68, 0);
}
</style>
