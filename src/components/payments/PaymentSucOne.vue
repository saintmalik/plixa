<template>
  <div>
    <navViewTwo />
    <!-- Desktop view message -->
    <div class="hidden md:flex md:text-5xl md:justify-center md:h-screen md:text-center">
      This page can only be viewed on mobile. Please switch to a mobile device.
    </div>

    <!-- Mobile view content -->
    <div
      class="md:hidden flex flex-col justify-center items-center mx-auto h-screen py-10 mb-24 relative"
    >
      <router-link to="/FullPaymentTrans" class="absolute top-4 left-4 sm:hidden">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          ></path>
        </svg>
      </router-link>

      <h1 class="text-gray-500 text-sm sm:text-lg font-semibold text-center mx-4 my-3 sm:mt-16">
        Payment Success
      </h1>
      <div class="mt-20 md:mt-10">
        <div class="mx-auto flex justify-center mt-5">
          <img
            src="../../assets/image/success.png"
            alt="Digital Pictures"
            class="w-56 h-56 sm:w-72 sm:h-72"
          />
        </div>
        <div class="mx-auto my-8 text-center">
          <router-link to="/PaymentSucTwo">
            <button class="bg-[#001D3D] w-full sm:w-72 py-2 px-8 rounded-xl text-white">
              Download Receipt
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <footerTwo />
  </div>
</template>

<script setup>
import navViewTwo from '../../views/navViewTwo.vue'
import footerTwo from '../footerTwo.vue'
</script>

<style scoped></style>
