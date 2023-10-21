<template>
  <div>
    <!-- Render the NavViewTwo component -->
    <NavViewTwo />
    <!-- Desktop view message -->
    <div class="md:flex hidden md:text-5xl md:justify-center md:h-screen md:text-center">
      This page can only be viewed on mobile. Please switch to a mobile device.
    </div>
    <!-- Mobile view content -->
    <div class="mt-20 mx-5">
      <label for="department" class="block text-sm font-medium text-gray-600">Department</label>
      <select
        id="department"
        v-model="selectedDepartment"
        placeholder="Select"
        class="mt-1 p-2 w-full md:w-60 border rounded-md focus:outline-none focus:border-blue-500"
      >
        <option value="" disabled selected>Select Department</option>
        <option value="school1">Department of</option>
        <option value="school2">Department of</option>
        <option value="school3">Department of</option>
      </select>

      <div class="mx-auto my-8 text-center">
        <router-link to="/PaymentOne">
          <button class="bg-[#001D3D] w-full sm:w-72 py-2 px-8 rounded-xl text-white">Next</button>
        </router-link>
      </div>
    </div>
  </div>

  <!-- Render the footer component -->
  <mainFooter />
</template>

<script setup>
import mainFooter from '../footerTwo.vue'
import NavViewTwo from '../../views/navViewTwo.vue'
</script>

<style scoped>
/* Add your scoped styles here */
</style>
