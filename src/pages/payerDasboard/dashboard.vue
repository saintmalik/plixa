<template>
  <div>
    <!-- Render the NavViewTwo component -->
    <NavViewTwo />
    <!-- Desktop view message -->
    <div class="md:flex hidden md:text-5xl md:justify-center md:h-screen md:text-center">
      This page can only be viewed on mobile. Please switch to a mobile device.
    </div>

    <!-- Mobile view content -->
    <div class="md:hidden flex flex-col text-left mx-auto py-6 mb-2">
      <h1 class="text-gray-500 text-sm sm:text-2xl font-semibold text-left sm:text-left ml-4">
        Welcome to the Dues Payment Portal
      </h1>
    </div>
    <div class="mb-6 mx-5">
      <label for="school" class="block text-sm font-medium text-gray-600">Find School</label>
      <select
        id="school"
        v-model="selectedSchool"
        placeholder="Select"
        class="mt-1 p-2 w-full md:w-60 border rounded-md focus:outline-none focus:border-blue-500"
      >
        <option value="" disabled selected>Select a school</option>
        <option value="school1">Ekiti State University, Ado</option>
        <option value="school2">Federal University, Oye</option>
        <option value="school3">Federal Polytechnic, Ado</option>
        
      </select>

      <div class="mx-auto my-8 text-center">
          <router-link to="/Faculty">
            <button class="bg-[#001D3D] w-full sm:w-72 py-2 px-8 rounded-xl text-white">
              Next
            </button>
          </router-link>
        </div>
    </div>
  </div>

  <!-- Render the footer component -->
  <mainFooter />
</template>

<script setup>
import mainFooter from '../../components/footerTwo.vue'
import NavViewTwo from '../../views/navViewTwo.vue'
</script>

<style scoped>
/* Add your scoped styles here */
</style>
