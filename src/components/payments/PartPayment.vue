<template>
    <div>
      <navViewTwo />
      <!-- Desktop view message -->
      <div class="md:flex hidden md:text-5xl md:justify-center md:h-screen md:text-center">
        This page can only be viewed on mobile. Please switch to a mobile device.
      </div>
      <div class="mb-16 sm:hidden relative">
        <router-link to="/PaymentOne" class="absolute top-4 left-4">
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
      <div class="mx-5 mt-5">
        <!-- FullName Input -->
        <div class="mb-6">
          <label for="fullName" class="block text-sm font-medium text-gray-600">Full Name</label>
          <input
            type="text"
            id="fullName"
            v-model="fullName"
            class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
  
        <!-- PhoneNumber Input -->
        <div class="mb-6">
          <label for="phoneNumber" class="block text-sm font-medium text-gray-600"
            >Phone Number</label
          >
          <input
            type="tel"
            id="phoneNumber"
            v-model="phoneNumber"
            class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
  
        <!-- Matriculation Number Input -->
        <div class="mb-6">
          <label for="matriculationNumber" class="block text-sm font-medium text-gray-600"
            >Matriculation Number</label
          >
          <input
            type="text"
            id="matriculationNumber"
            v-model="matriculationNumber"
            class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
  
        <!-- Level Input -->
        <div class="mb-6">
          <label for="level" class="block text-sm font-medium text-gray-600">Level</label>
          <input
            type="text"
            id="level"
            v-model="level"
            class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
  
        <!-- Department Input -->
        <div class="mb-6">
          <label for="department" class="block text-sm font-medium text-gray-600">Department</label>
          <input
            type="text"
            id="department"
            v-model="department"
            class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div class="mx-auto my-8 text-center">
          <router-link to="/FullPaymentTrans">
            <button class="bg-[#001D3D] w-full sm:w-72 py-2 px-8 rounded-xl text-white">
              Make Payment
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
  
  let fullName = ''
  let phoneNumber = ''
  let matriculationNumber = ''
  let level = ''
  let department = ''
  </script>
  
  <style scoped></style>
  