<template>
  <div>
    <!-- Render the NavViewTwo component -->
    <navViewTwo />
    <!-- Desktop view message -->
    <div class="md:flex hidden md:text-5xl md:justify-center md:h-screen md:text-center">
      This page can only be viewed on mobile. Please switch to a mobile device.
    </div>

    <!-- Mobile view content -->
    <div class="md:hidden flex flex-col justify-center items-center text-center mx-auto h-screen py-10 mb-24 relative">
    <router-link to="/payerDashboard" class="absolute top-4 left-4 sm:hidden">
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
      <div class="mt-20">
        <div class="mx-auto flex justify-center mt-5">
          <img
            src="../../assets/image/Digital-pictures02.png"
            alt="Digital Pictures"
            class="h-96 w-96"
          />
        </div>
        <h1 class="text-gray-500 text-sm sm:text-sm font-semibold text-center sm:text-center mx-4 mb-5">
          Would you like to make full payment or part payment?
        </h1>
          <div class="mx-auto my-5 justify-between flex flex-col items-center sm:flex-row">
            <router-link to="/FullPayment">
              <button
                class="bg-[#001D3D] w-72 md:w-auto mb-4 sm:mb-0 md:mb-0 sm:mr-6 py-2 px-8 rounded-xl text-white"
              >
                Full Payment
              </button>
            </router-link>
            <router-link to="/PartPayment">
              <button class="bg-[#001D3D] w-72 md:w-auto py-2 px-8 rounded-xl text-white">
                Part Payment
              </button>
            </router-link>
          </div>
        
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
