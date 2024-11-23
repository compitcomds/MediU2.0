<template>
  <div class="min-h-screen md:p-10">
    <div class="flex gap-6">
      <DashboardSidenav :UserData="UserData || ''" />
      <main class="mb-32 min-h-screen p-2 md:w-3/4 md:p-8 lg:mb-16 lg:p-10">
        <h2>Order Details</h2>
        <div class="flex flex-col-reverse gap-8 lg:flex-row lg:justify-between">
          <!-- Order Items List -->
          <div>
            <h3>Items Ordered:</h3>
            <ul class="space-y-6">
              <li
                v-for="item in orderData.lineItems"
                :key="item.title"
                class="flex items-center"
              >
                <img
                  :src="
                    item.variant?.image?.url ||
                    `https://placehold.co/400x400/png?text=${item.title}`
                  "
                  :alt="item.variant?.image?.altText"
                  class="rounded"
                />
                <div class="flex-1">
                  <p class="text-bold">{{ item.title }}</p>
                  <p class="text-muted">Quantity: {{ item.quantity }}</p>
                </div>
                <div class="flex flex-col items-end">
                  <p
                    v-if="
                      item.discountedTotalPrice.amount <
                      item.originalTotalPrice.amount
                    "
                    class="text-muted line-through"
                  >
                    Original: {{ item.originalTotalPrice.amount }}
                    {{ item.originalTotalPrice.currencyCode }}
                  </p>
                  <p class="price">
                    Price:
                    {{
                      item.discountedTotalPrice.amount <
                      item.originalTotalPrice.amount
                        ? item.discountedTotalPrice.amount
                        : item.originalTotalPrice.amount
                    }}
                    {{ item.discountedTotalPrice.currencyCode }}
                  </p>
                </div>
              </li>
            </ul>

            <!-- Shipping Address -->
            <h3 class="mt-8">Shipping Address</h3>
            <div class="text-muted">
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

          <!-- Order Summary Section -->
          <div class="order-summary">
            <DashboardOrderInvoiceDownloader :payload="payload" />
            <div class="order-details mt-4">
              <p class="order-detail">
                <strong><i class="icon-order-number"></i> Order Number:</strong>
                {{ orderData.orderNumber }}
              </p>
              <p class="order-detail">
                <strong><i class="icon-processed-at"></i> Processed At:</strong>
                {{ new Date(orderData.processedAt).toLocaleString() }}
              </p>
              <p class="order-detail">
                <strong><i class="icon-status"></i> Status:</strong>
                <span v-if="orderData.fulfillmentStatus === 'UNFULFILLED'"
                  >Pending (confirmed within 12 hours)</span
                >
                <span v-else>
                  <DashboardOrderStatus :orderNumber="orderNumber" />
                </span>
              </p>
              <p class="order-detail">
                <strong><i class="icon-price"></i> Total Price:</strong>
                {{ orderData.totalPrice.amount }}
                {{ orderData.totalPrice.currencyCode }}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import createOrderInvoice from "~/utils/createOrderInvoice";
import getUserOrder from "~/shopify/user/orders/particular-order";

const route = useRoute();
const orderNumber = route.params.orderNumber;

const orderData = await getUserOrder(orderNumber);

const payload = {
  company: {
    name: "Mediu",
    address1: "1711 W. El Segundo Blvd,",
    address2: "Hawthorne, Canada - 90250",
    phone: "Tel: (+11) 245 543 903",
    email: "mediu@gmail.com",
    website: "https://www.mediu.in",
    taxId: "Tax ID: 1234567890", // Optional
  },
  customer: {
    name: `${orderData.shippingAddress.firstName} ${orderData.shippingAddress.lastName}`,
    address1: `${orderData.shippingAddress.address1}`,
    address2: `${orderData.shippingAddress.city}, ${orderData.shippingAddress.province}, ${orderData.shippingAddress.country}`,
    phone: "Tel: (555) 555-5555", // Placeholder or replace with actual customer phone
    email: "Mail: joe@example.com", // Placeholder or replace with actual customer email
    taxId: "Tax ID: 1234567890", // Optional
  },
  invoice: {
    number: orderNumber,
    date: orderData.processedAt.split("T")[0], // Extract date from processedAt
    dueDate: orderData.processedAt.split("T")[0], // Extract date from processedAt
    status: "PAID",
    currency: orderData.totalPrice.currencyCode,
    total: 1200,
  },
  items: orderData.lineItems.map((item) => ({
    name: item.title,
    quantity: item.quantity,
    price: parseFloat(item.originalTotalPrice.amount), // Use original total price for individual item price
    tax:
      item.discountedTotalPrice.amount < item.originalTotalPrice.amount
        ? 10
        : 0, // Example tax calculation
  })),
  note: {
    text: "Thank you for orderring from us.",
  },
};

const downloadInvoice = async () => {
  const url = await createOrderInvoice(payload);
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.download = `Invoice-${orderNumber}.pdf`; // Specify the download filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url); // Clean up the URL object
};
</script>
<style lang="scss" scoped>
.min-h-screen {
  background: linear-gradient(135deg, #edf8f3 0%, #d7f0e9 100%);

  align-items: flex-start;
  font-family: "Roboto", sans-serif;
}

h2 {
  color: #238878;
  font-weight: 700;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 3px solid #238878;
  padding-bottom: 0.5rem;
}

h3 {
  color: #238878;
  font-weight: 600;
  font-size: 1.75rem;
  margin-bottom: 1rem;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  display: flex;
  align-items: center;
  padding: 1.25rem;
  background-color: #ffffff;
  border: 1px solid #e0e7ea;
  border-radius: 0.75rem;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
}

li:hover {
  transform: translateY(-4px);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
}

img {
  border-radius: 0.5rem;
  height: 5rem;
  width: 5rem;
  margin-right: 1rem;
  transition: opacity 0.3s ease;
}

img:hover {
  opacity: 0.9;
}

button {
  color: #238878;
  font-weight: 600;
  background-color: #f3faf6;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  text-decoration: underline;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

button:hover {
  background-color: #e0f5e9;
  // color: #1c4532;
  text-decoration: none;
}

.text-muted {
  color: #6b7280;
}

.text-bold {
  color: #238878;
  font-weight: bold;
}

.order-summary {
  padding: 2rem;
  border-radius: 1rem;
  background-color: #ffffff;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15);
  border: 1px solid #e2e8f0;
  transition:
    box-shadow 0.3s ease,
    transform 0.3s ease;
}

.order-summary:hover {
  box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.2);
  transform: translateY(-4px);
}

.order-summary p {
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
}

.order-summary strong {
  font-weight: 700;
  color: #238878;
}

.price {
  font-size: 1.25rem;
  color: #238878;
  font-weight: 700;
}
.order-summary {
  padding: 2rem;
  border-radius: 1rem;
  background-color: #ffffff;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15);
  border: 1px solid #e2e8f0;
  transition:
    box-shadow 0.3s ease,
    transform 0.3s ease;
  max-width: 400px;
}

.order-summary:hover {
  box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.2);
  transform: translateY(-4px);
}

.order-details {
  font-size: 1.1rem;
}

.order-detail {
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}

strong {
  color: #238878;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
}

.icon-order-number,
.icon-processed-at,
.icon-status,
.icon-price {
  margin-right: 0.5rem;
  font-size: 1.2rem;
  color: #238878;
}
</style>
