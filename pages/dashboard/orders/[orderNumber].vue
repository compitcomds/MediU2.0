<template>
  <DashboardAttachSidenav>
    <main class="mb-32 min-h-screen p-4 md:p-8 lg:mb-16 lg:p-10">
      <h2
        class="mb-6 border-b-4 border-[#238878] pb-2 text-xl font-bold text-[#238878] md:text-4xl"
      >
        Order Details #{{ orderNumber }}
      </h2>
      <div class="flex flex-col-reverse gap-8 lg:flex-row lg:justify-between">
        <div>
          <h3 class="mb-4 text-2xl font-semibold text-[#238878]">
            Items Ordered:
          </h3>
          <DashboardOrderLineItems :lineItems="orderData.lineItems" />

          <h3 class="mt-8 text-2xl font-semibold text-[#238878]">
            Shipping Address
          </h3>
          <div class="mt-2 text-gray-700">
            <p>
              {{ orderData.shippingAddress.firstName }}
              {{ orderData.shippingAddress.lastName }}
            </p>
            <p>{{ orderData.shippingAddress.address1 }}</p>
            <p v-if="orderData.shippingAddress.address2">
              {{ orderData.shippingAddress.address2 }}
            </p>
            <p>
              {{ orderData.shippingAddress.city }},
              {{ orderData.shippingAddress.province }},
              {{ orderData.shippingAddress.country }}
            </p>
          </div>
        </div>

        <div
          class="max-w-sm rounded-lg border border-gray-200 bg-white p-8 shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg"
        >
          <div class="mt-4 space-y-4">
            <p class="flex items-center md:text-lg">
              <strong class="mr-2 inline-flex items-center text-[#238878]">
                <i class="icon-processed-at"></i> Processed At:
              </strong>
              {{ new Date(orderData.processedAt).toLocaleString() }}
            </p>
            <div>
              <p
                v-if="orderData.fulfillmentStatus === 'UNFULFILLED'"
                class="flex items-center text-lg"
              >
                <strong class="text-[#238878]">Status: </strong>Pending
                (confirmed within 12 hours)
              </p>
              <DashboardOrderStatus v-else :orderNumber="orderNumber" />
            </div>
            <p class="flex items-center md:text-lg">
              <strong class="mr-2 inline-flex items-center text-[#238878]">
                <i class="icon-price"></i> Total Price:
              </strong>
              {{ orderData.totalPrice.amount }}
              {{ orderData.totalPrice.currencyCode }}
            </p>
            <DashboardOrderInvoiceDownloader :payload="payload" />
          </div>
        </div>
      </div>
    </main>
  </DashboardAttachSidenav>
</template>

<script setup>
import getUserOrder from "~/shopify/user/orders/particular-order";

const route = useRoute();
const orderNumber = route.params.orderNumber;

const orderData = await getUserOrder(orderNumber);

const payload = {
  company: {
    name: "Mediu",
    subTitle: "Radiance Aesthetic and Cosmetic Studio",
    address1: "F-97, M.S.S Colony, Shastri",
    address2: "Jaipur-302016",
    phone: "Phone: +91 9828991555",
    email: "mediuindiapharma@gmail.com",
    website: "https://www.mediu.in",
    taxId: "",
  },
  customer: {
    name: `${orderData.shippingAddress.firstName} ${orderData.shippingAddress.lastName}`,
    address1: `${orderData.shippingAddress.address1}`,
    address2: `${orderData.shippingAddress.city}, ${orderData.shippingAddress.province}, ${orderData.shippingAddress.country}`,
    phone: `Phone: ${orderData.shippingAddress.phone || ""}`,
    email: `Mail: ${orderData.shippingAddress.email || orderData.email || ""}`,
  },
  invoice: {
    number: orderNumber,
    date: orderData.processedAt.split("T")[0],
    dueDate: orderData.processedAt.split("T")[0],
    status: "PAID",
    currency: orderData.totalPrice.currencyCode,
    total: orderData.totalPrice.amount,
    discount: orderData.discountApplications.reduce(
      (prev, next) => prev + next.amount,
      0,
    ),
  },
  items: orderData.lineItems.map((item) => ({
    name: item.title,
    quantity: item.quantity,
    sku: item.variant?.sku || "",
    price: item.variant.price.amount,
    total: item.originalTotalPrice.amount,
    tax: parseFloat(item.variant?.product?.gstApplied?.value || "0"),
  })),
  note: {
    text: "Thank you for ordering from us.",
  },
};
</script>
