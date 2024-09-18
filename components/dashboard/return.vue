<template>
    <div class="w-3/4 pl-8">
        <h1 class="text-2xl font-bold mb-4 text-[#28574E]">
            Request for Product Return ({{ returnRequests.length }})
        </h1>
        <div class="grid grid-cols-2 gap-8">
            <div v-for="(item, index) in returnRequests" :key="index" :to="`/return/${item.requestNumber}`"
                class="p-4 bg-white rounded-lg shadow-md block hover:bg-green-50">
                <div class="flex justify-between items-center">
                    <p>
                        <strong class="text-[#28574E]">Request No: #{{ item.requestNumber }}</strong>
                    </p>
                    <div :class="item.status === 'submitted' ? 'text-green-600' : 'text-gray-500'
                        ">
                        {{
                            item.status === "submitted" ? "Request Submitted" : "Return Made"
                        }}
                    </div>
                </div>

                <!-- Dashed Separator Line -->
                <!-- <div class="my-2 border-t border-dashed border-gray-300"></div> -->
                <nuxt-link to="/dashboard/returnDetails">
                    <div class="border-dashed border border-[#28574E] p-3 m-2">
                        <p class="text-sm text-gray-500">{{ item.date }}</p>
                        <div class="flex items-center my-2">
                            <img :src="item.image" alt="Product" class="w-24 h-24 mr-4" />
                            <div>
                                <p class="font-semibold text-[#28574E]">{{ item.name }}</p>
                                <p class="text-slate-400">Quantity: {{ item.quantity }}</p>
                                <p class="text-gray-500">INR {{ item.price }}</p>
                            </div>
                        </div>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            returnRequests: [
                {
                    requestNumber: 1374837,
                    date: "March 21, 2024",
                    name: "Vitamin C Serum",
                    quantity: 1,
                    price: 105,
                    image: "https://via.placeholder.com/100x80",
                    status: "submitted",
                },
                {
                    requestNumber: 1374838,
                    date: "March 21, 2024",
                    name: "Moisturizing Body Lotion",
                    quantity: 1,
                    price: 304,
                    image: "https://via.placeholder.com/100x80",
                    status: "submitted",
                },
                {
                    requestNumber: 1374839,
                    date: "March 21, 2024",
                    name: "Lavender Body Oil",
                    quantity: 1,
                    price: 657,
                    image: "https://via.placeholder.com/100x80",
                    status: "submitted",
                },
                {
                    requestNumber: 1374840,
                    date: "March 21, 2024",
                    name: "Firming Body Gel",
                    quantity: 1,
                    price: 245,
                    image: "https://via.placeholder.com/100x80",
                    status: "made",
                },
            ],
        };
    },
};
</script>

<style scoped>
.block:hover {
    background-color: #f0fdf4;
}

/* Add a dashed border for the separator */
.border-dashed {
    border-style: dashed;
}
</style>
