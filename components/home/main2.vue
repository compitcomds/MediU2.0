<template>
    <section class="relative text-white bg-white w-full lg:-mt-3 overflow-hidden">
        <div class="relative w-full text-center z-10 bg-white">
            <div class="w-full bg-white">
                <div class="relative w-full">
                    <transition name="fade" mode="out-in">
                        <!-- Dynamically set image source based on screen size -->
                        <img :key="slides[currentSlide].doctorImage" class="w-full h-full object-cover"
                            :src="currentSlideImage" alt="Doctor" />
                    </transition>
                </div>
                <!-- Pagination Dots -->
                <div class="hidden lg:block">
                    <div class="absolute -bottom-10 xl:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        <span v-for="(slide, index) in slides" :key="index" @click="currentSlide = index" :class="[
                            'rounded-full cursor-pointer',
                            currentSlide === index
                                ? 'bg-teal-800 h-3 w-6'
                                : 'bg-slate-400 h-3 w-3',
                        ]"></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            currentSlide: 0,
            slides: [
                {
                    smImage: "https://ccdstest.b-cdn.net/Medi%20u/home%20bg/mediu%20bg3%402x.jpg",
                    mdImage: "https://ccdstest.b-cdn.net/Medi%20u/home%20bg/mediu%20bg3%402x.jpg",
                    lgImage: "https://ccdstest.b-cdn.net/Medi%20u/home%20bg/mediu%20bg4%402x%402x%20(1).jpg",
                },
                {
                    smImage: "https://ccdstest.b-cdn.net/Medi%20u/home%20bg/mediu%20bg3%402x.jpg",
                    mdImage: "https://ccdstest.b-cdn.net/Medi%20u/home%20bg/mediu%20bg3%402x.jpg",
                    lgImage: "https://ccdstest.b-cdn.net/Medi%20u/home%20bg/mediu%20bg4%402x%402x%20(1).jpg",
                },
                // Add more slides as needed
            ],
            isBrowser: typeof window !== 'undefined', // Check if window is available (client-side)
        };
    },
    computed: {
        // Dynamically set image source based on screen size
        currentSlideImage() {
            if (!this.isBrowser) return ''; // If we're not in the browser, return empty string
            const current = this.slides[this.currentSlide];
            const width = window.innerWidth;

            if (width >= 1024) { // lg or xl screen size
                return current.lgImage;
            } else if (width >= 768) { // md screen size
                return current.mdImage;
            } else if (width >= 300) { // sm screen size
                return current.smImage;
            }
            else {
                return current.smImage;
            }
        }
    },
    mounted() {
        if (this.isBrowser) {
            this.startSlideShow();
            window.addEventListener("resize", this.handleResize);
        }
    },
    beforeDestroy() {
        if (this.isBrowser) {
            window.removeEventListener("resize", this.handleResize);
        }
    },
    methods: {
        startSlideShow() {
            setInterval(() => {
                this.currentSlide = (this.currentSlide + 1) % this.slides.length;
            }, 5000); // Change slide every 5 seconds
        },
        handleResize() {
            if (this.isBrowser) {
                this.$forceUpdate(); // Force re-evaluation of computed properties on window resize
            }
        }
    },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.bg-cover {
    background-size: cover;
}

.bg-center {
    background-position: center;
}
</style>
