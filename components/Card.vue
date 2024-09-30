<template>
    <div class="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg w-96 h-96 shadow-lg group" @click="$emit('click')">
        <svg class="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
            viewBox="0 0 375 283" fill="none" style="opacity: 0.1;">
            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)"
                fill="white" />
            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
        </svg>
        <div class="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;">
            </div>
            <img class="relative" :src="imageSrc" alt="Concern Image">
        </div>
        <div class="relative flex justify-between text-white px-6 pb-6 mt-6">
            <div class="flex flex-col justify-between">
                <span class="block opacity-75 -mb-1">Concern About</span>
                <span class="block font-semibold text-xl">{{ title }}</span>
            </div>
            <span class="block bg-white rounded-full text-teal-500 text-xs font-bold px-8 leading-none flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-move-right">
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
                </svg>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        imageSrc: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped></style>
