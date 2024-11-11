<template>
    <div class="w-full lg:w-3/4 lg:pl-8 my-10 lg:my-0 pb-20 lg:pb-0">
        <div class="border p-4 space-y-6">
            <div class="flex justify-between items-center mb-4">
                <div class="flex items-center">
                    <img :src="order.productImage" alt="Product Image" class="w-28 h-28 rounded" />
                    <div class="ml-4">
                        <h2 class="text-xl font-semibold text-[#28574e]">Order #{{ order.orderNumber }}</h2>
                        <span :class="order.statusClass">{{ order.status }}</span>
                    </div>
                </div>
            </div>
            <div class="border-t border-[#28574e] border-dashed my-4"></div>
            <div class="text-[#28574e] grid grid-cols-2 gap-y-5">
                <span class="flex flex-col justify-between"><strong>Item:</strong>
                    <p>{{ order.itemName }}</p>
                </span>
                <span class="flex flex-col justify-between"><strong>Courier:</strong>
                    <p>{{ order.courier }}</p>
                </span>
                <span class="flex flex-col justify-between"><strong>Start Time:</strong>
                    <p>{{ order.startTime }}</p>
                </span>
                <span class="flex flex-col justify-between"><strong>Address:</strong>
                    <p>{{ order.address }}</p>
                </span>
            </div>

            <!-- Buttons -->
            <div class="flex space-x-4 mb-4">
                <button class="bg-black text-white py-2 px-4 rounded-md" @click="exportDetails">
                    Export Details
                </button>
                <button class="bg-gray-100 text-black py-2 px-4 border border-gray-300 rounded-md" @click="requestConfirmation">
                    Request Confirmation
                </button>
                <nuxt-link to="/dashboard/cancel-order" class="bg-red-500 text-white py-2 px-4 rounded-md" @click="cancelOrder">
                    Cancel Order
                </nuxt-link>
            </div>

            <!-- Tabs Navigation -->
            <div>
                <nav class="flex space-x-6 border-b border-gray-200 mb-4">
                    <button @click="activeTab = 'history'" class="pb-2"
                        :class="{ 'border-b-2 border-green-500': activeTab === 'history' }">
                        Order History
                    </button>
                    <button @click="activeTab = 'details'" class="pb-2"
                        :class="{ 'border-b-2 border-green-500': activeTab === 'details' }">
                        Item Details
                    </button>
                    <button @click="activeTab = 'courier'" class="pb-2"
                        :class="{ 'border-b-2 border-green-500': activeTab === 'courier' }">
                        Courier
                    </button>
                    <button @click="activeTab = 'receiver'" class="pb-2"
                        :class="{ 'border-b-2 border-green-500': activeTab === 'receiver' }">
                        Receiver
                    </button>
                </nav>

                <!-- Tab Content -->
                <div v-if="activeTab === 'history'" class="space-y-4">
                    <DashboardOrderHistory />
                </div>
                <div v-if="activeTab === 'details'" class="space-y-4">
                    <DashboardItemDetails />
                </div>
                <div v-if="activeTab === 'courier'" class="space-y-4">
                    <DashboardCourierInfo />
                </div>
                <div v-if="activeTab === 'receiver'" class="space-y-4">
                    <DashboardReceiverInfo />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeTab: "history", // Default tab is Order History
            order: {
                orderNumber: 17493,
                productImage: "https://via.placeholder.com/150",
                status: "In Progress",
                statusClass: "text-green-500 font-bold",
                itemName: "Blowshine",
                courier: "UPS",
                startTime: "05 April 2024, 15:43:23",
                address: "451 Wall Street UK, London",
            },
        };
    },
    methods: {
        exportDetails() {
            console.log("Exporting details for Order #", this.order.orderNumber);
        },
        requestConfirmation() {
            console.log("Requesting confirmation for Order #", this.order.orderNumber);
        },
        cancelOrder() {
            console.log("Cancelling Order #", this.order.orderNumber);
        },
    },
};
</script>

<style lang="scss" scoped></style>
