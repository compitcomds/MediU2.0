<template>
  <div class="min-h-screen bg-[#edf8f3] lg:p-6">
    <div class="lg:flex lg:gap-6">
      <DashboardSidenav />

      <section class="w-full flex-1 bg-gray-50 py-12">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 class="mb-8 text-center text-3xl font-bold text-[#238878]">
            Help & Support
          </h2>

          <!-- FAQ Section -->
          <div class="space-y-6">
            <details
              v-for="(faq, index) in faqs"
              :key="index"
              class="rounded-lg border bg-white p-4 shadow-sm"
            >
              <summary class="cursor-pointer font-semibold text-[#238878]">
                {{ faq.question }}
              </summary>
              <p class="mt-2 text-gray-600">{{ faq.answer }}</p>
            </details>
          </div>

          <!-- Contact Section -->
          <div class="mt-12 text-center">
            <h3 class="mb-4 text-2xl font-semibold text-[#238878]">
              Contact Us
            </h3>
            <p class="mb-2 text-gray-600">
              If you need further assistance, feel free to reach out to us:
            </p>
            <p class="font-medium text-gray-800">
              Email:
              <a
                href="mailto:radiancecosmeticstudio@gmail.com"
                class="text-[#238878] underline"
                >Radiancecosmeticstudio@gmail.com</a
              >
            </p>
            <p class="font-medium text-gray-800">
              Phone: <span class="text-[#238878]">+91 9828991555</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const faqs = [
  {
    question: "How do I reset my password?",
    answer:
      "You can reset your password by clicking on 'Forgot Password' on the login page and following the instructions.",
  },
  {
    question: "Where can I find my order history?",
    answer:
      "Log in to your account, and go to the 'Orders' section to view your order history.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can contact us via email at support@example.com or by calling +1 (123) 456-7890.",
  },
];
</script>

<style scoped>
summary::-webkit-details-marker {
  display: none; /* Removes default arrow icon */
}
details summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
}
details summary::after {
  content: "+";
  font-size: 1.5rem;
  color: #238878;
  margin-left: auto;
  transition: transform 0.3s ease;
}
details[open] summary::after {
  content: "-";
  transform: rotate(180deg);
}
details[open] summary {
  color: #005d4c; /* Darker shade when opened */
}
</style>
