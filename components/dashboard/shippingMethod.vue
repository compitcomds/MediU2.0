<template>
    <section class="w-full lg:w-3/4 rounded-lg lg:p-6 lg:ml-6 border">
      <h2 class="text-2xl font-semibold mb-4 text-[#238878]">Shipping Methods</h2>
  
      <!-- Shipping Method Options -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Shipping Option 1 -->
        <label class="flex items-center justify-between border border-black p-4 rounded shadow-sm hover:border-green-600 transition-colors">
          <div class="flex items-center space-x-4">
            <img src="https://glower.indiankoder.com/xhtml/images/shop/payment/fedex.svg" alt="FedEx" class="w-24" />
            <div>
              <h3 class="font-semibold text-[#238878]">FedEx</h3>
              <p class="text-black">Delivery, Tomorrow</p>
            </div>
          </div>
          <div class="flex items-center space-x-2">
            <p class="text-black">$0.99</p>
            <input type="radio" name="shipping" value="FedEx" class="custom-radio" />
          </div>
        </label>
  
        <!-- Shipping Option 2 -->
        <label class="flex items-center justify-between border border-black p-4 rounded shadow-sm hover:border-green-600 transition-colors">
          <div class="flex items-center space-x-4">
            <img src="https://glower.indiankoder.com/xhtml/images/shop/payment/american.svg" alt="American" class="w-24" />
            <div>
              <h3 class="font-semibold text-[#238878]">American</h3>
              <p class="text-black">Delivery, Today</p>
            </div>
          </div>
          <div class="flex items-center space-x-2">
            <p class="text-black">$0.99</p>
            <input type="radio" name="shipping" value="American" class="custom-radio" />
          </div>
        </label>
        <label class="flex items-center justify-between border border-black p-4 rounded shadow-sm hover:border-green-600 transition-colors">
            <div class="flex items-center space-x-4">
              <img src="https://glower.indiankoder.com/xhtml/images/shop/payment/dhl.svg" alt="DHL Express" class="w-24" />
              <div>
                <h3 class="font-semibold text-[#238878]">DHL Express</h3>
                <p class="text-black">Delivery, Today</p>
              </div>
            </div>
            <div class="flex items-center space-x-2">
              <p class="text-black">$0.99</p>
              <input type="radio" name="shipping" value="DHL Express" class="custom-radio" />
            </div>
          </label>
          <label class="flex items-center justify-between border border-black p-4 rounded shadow-sm hover:border-green-600 transition-colors">
            <div class="flex items-center space-x-4">
              <img src="https://glower.indiankoder.com/xhtml/images/shop/payment/retrieve.svg" alt="DHL Express" class="w-12" />
              <div>
                <h3 class="font-semibold text-[#238878]">DHL Express</h3>
                <p class="text-black">Delivery, Today</p>
              </div>
            </div>
            <div class="flex items-center space-x-2">
              <p class="text-black">$0.99</p>
              <input type="radio" name="shipping" value="DHL Express" class="custom-radio" />
            </div>
          </label>
      
  
        <!-- Shipping Option 3 -->
        <!-- <label class="flex items-center justify-between border border-green-600 p-4 rounded shadow-sm">
          <div class="flex items-center space-x-4">
            <img src="https://via.placeholder.com/100x80" alt="American" class="w-24" />
            <div>
              <h3 class="font-semibold">American</h3>
              <p class="text-black">Delivery, Today</p>
            </div>
          </div>
          <div class="flex items-center space-x-2">
            <p class="text-black">$0.99</p>
            <input type="radio" name="shipping" value="American" class="custom-radio" checked />
          </div>
        </label> -->
      </div>
  
      <!-- Continue to Payment Button -->
      <button onclick="/dashboard/paymentMethod" class="w-full bg-[#238878] text-white text-lg font-semibold py-3 rounded-lg mt-4 hover:bg-[#437e73]">
        Continue To Payment
      </button>
    </section>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  /* Custom radio button styling */
  .custom-radio {
    appearance: none;
    border: 2px solid #d1d5db; /* Default Tailwind gray-300 border color */
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transition: border-color 0.2s ease;
    position: relative;
  }
  
  .custom-radio:checked {
    border-color: #238878; /* Custom green border when checked */
  }
  
  .custom-radio:checked::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    background-color: #238878;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
  </style>
  