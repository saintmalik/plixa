<template>
  <div>
    <!-- Render the NavViewTwo component -->
    <NavViewTwo />
    <!-- Desktop view message -->
    <div class="md:flex hidden md:text-5xl md:justify-center md:h-screen md:text-center">
      This page can only be viewed on mobile. Please switch to a mobile device.
    </div>

    <!-- Mobile view content -->
    <div class="md:hidden flex flex-col justify-center items-center text-center mx-auto h-screen py-10 mb-24">
      <div class="mt-20">
        <h1 class="text-gray-500 text-sm sm:text-2xl  font-semibold text-left sm:text-left ml-4">
          Welcome to the Dues Payment Portal
        </h1>
        <div class="mx-auto flex justify-center mt-5">
          <img src="../../assets/image/Digital-pictures.png" alt="Digital Pictures" />
        </div>
        <div class="mx-auto my-5">
          <router-link to="/PaymentOne">
          <button  class="bg-[#001D3D] w-72 py-2 px-8 rounded-xl text-white">Proceed to make payment</button>
        </router-link>
        </div>
      </div>
    </div>

    

    <!-- Render the footer component -->
    <mainFooter />
  </div>
</template>

<script setup>
import mainFooter from '../../components/footerTwo.vue'
import NavViewTwo from '../../views/navViewTwo.vue';

</script>

<style scoped>
/* Add your scoped styles here */
</style>
