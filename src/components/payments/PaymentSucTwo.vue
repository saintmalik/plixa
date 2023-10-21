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
        <router-link to="/PaymentSucOne" class="absolute top-4 left-4 sm:hidden">
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
  
        <div class="mt-20 md:mt-10">
          <div class="mx-auto flex justify-center mt-5">
            <img
              src="../../assets/image/receipt.png"
              alt="Digital Pictures"
              class="w-56 h-56 sm:w-72 sm:h-72"
            />
          </div>
          <div class="mx-auto my-5 justify-between flex flex-col items-center sm:flex-row">
            <router-link to="/">
              <button class="bg-[#001D3D] w-72 md:w-auto mb-4 sm:mb-0 md:mb-0 sm:mr-6 py-2 px-8 rounded-xl text-white">
                Save
              </button>
            </router-link>
            <router-link to="/">
              <button class="bg-[#ffffff] w-72 md:w-auto  border border-md border-[#001D3D] text-[#001D3D] sm:w-72 py-2 px-8 rounded-xl ">
                Close
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
  