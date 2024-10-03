<template>
    <div class="bg-gray-50 p-6 rounded-lg flex flex-col md:flex-row items-center justify-between lg:mt-8">

        <!-- The purple "Appointment" tag -->
        <div class="inline-block hidden lg:block bg-purple-100 text-purple-600 text-xl font-semibold px-4 py-4 rounded-full">
            Appointment
        </div>

        <!-- Main Heading -->
        <h2 class="text-xl md:text-3xl font-bold text-[#28574e] leading-tight">
            Schedule Your Next Appointment at Mediu for Expert Healthcare
        </h2>


        <!-- The image of stethoscope and hearts -->
        <div class="mt-6 md:mt-0 hidden lg:block flex-shrink-0">
            <img src="https://ccdstest.b-cdn.net/Medi%20u/consult.png" alt="Stethoscope with heart icons"
                class="h-28 w-auto" />
        </div>
    </div>
    <div class="mx-20 mt-10 hidden lg:block rounded-3xl flex items-center justify-center">
        <img src="https://ccdstest.b-cdn.net/Medi%20u/consultBanner.jpg" alt="" class=" rounded-[200px]">
    </div>
</template>

<script>
export default {
    name: "AppointmentBanner",
};
</script>

<style scoped></style>