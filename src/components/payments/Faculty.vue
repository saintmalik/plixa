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
        <label for="faculty" class="block text-sm font-medium text-gray-600">Faculty</label>
        <select
          id="faculty"
          v-model="selectedFaculty"
          placeholder="Select"
          class="mt-1 p-2 w-full md:w-60 border rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="" disabled selected>Select Faculty</option>
          <option value="school1">Faculty of Education</option>
          <option value="school2">Faculty of Science</option>
          <option value="school3">Faculty of Law</option>
          
        </select>
  
        <div class="mx-auto my-8 text-center">
            <router-link to="/Department">
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
  import mainFooter from '../footerTwo.vue'
  import NavViewTwo from '../../views/navViewTwo.vue'
  </script>
  
  <style scoped>
  /* Add your scoped styles here */
  </style>
  