<template>
  <div>
    <navViewTwo />
    <!-- Desktop view message -->
    <div class="md:flex hidden md:text-5xl md:justify-center md:h-screen md:text-center">
      This page can only be viewed on mobile. Please switch to a mobile device.
    </div>
    <div class="mb-16 sm:hidden relative">
      <router-link to="/FullPayment" class="absolute top-4 left-4">
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
    </div>
    <!-- Select Payment Method Title -->
    <h1 class="text-xl text-gray-600 font-semibold mb-4 mt-3 ml-5">Select Payment Method</h1>

    <div class="mx-5">
      <!-- Credit/Debit Card Input -->
      <div class="mb-6">
        <label for="creditCard" class="block text-sm font-medium text-gray-600"
          >Credit/Debit Card</label
        >
        <input
          type="text"
          id="creditCard"
          v-model="creditCard"
          class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <!-- Transfer Input -->
      <div class="mb-6">
        <label for="transfer" class="block text-sm font-medium text-gray-600">Transfer</label>
        <input
          type="text"
          id="transfer"
          v-model="transfer"
          class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <!-- Bank Input -->
      <div class="mb-6">
        <label for="bank" class="block text-sm font-medium text-gray-600">Bank</label>
        <input
          type="text"
          id="bank"
          v-model="bank"
          class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div class="mx-auto my-8 text-center">
        <router-link to="/PaymentSucOne">
          <button class="bg-[#001D3D] w-full sm:w-72 py-2 px-8 rounded-xl text-white">
            Proceed
          </button>
        </router-link>
      </div>
    </div>

    <footerTwoVue />
  </div>
</template>

<script setup>
import navViewTwo from '../../views/navViewTwo.vue'
import footerTwoVue from '../footerTwo.vue'
</script>

<style scoped></style>
