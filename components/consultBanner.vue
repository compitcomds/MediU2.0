<template>
    <div class="bg-gray-50 p-6 w-full rounded-lg flex flex-col md:flex-row items-center justify-between lg:mt-8 space-y-4 lg:space-y-0 md:space-x-4">

        <!-- The purple "Appointment" tag -->
        <div class="inline-block   bg-purple-100 text-purple-600 text-xl font-semibold p-2 lg:px-4 lg:py-4 rounded-full">
            Appointment
        </div>

        <!-- Main Heading -->
        <h2 class="text-xl md:text-3xl text-center font-bold text-[#238878] leading-tight">
            Schedule Your Next Appointment at Mediu for Expert Healthcare
        </h2>


        <!-- The image of stethoscope and hearts -->
        <div class="mt-6 md:mt-0 hidden lg:block  flex-shrink-0">
            <img src="https://ccdstest.b-cdn.net/Medi%20u/consult.png" alt="Stethoscope with heart icons"
                class="h-28 w-auto" />
        </div>
    </div>
    <div class="lg:mx-20 mt-5 mx-4 rounded-3xl flex items-center justify-center">
        <img src="https://ccdstest.b-cdn.net/Medi%20u/consultBanner.jpg" alt="" class=" rounded-[200px]">
    </div>
</template>

<script>
export default {
    name: "AppointmentBanner",
};
</script>

<style scoped></style>