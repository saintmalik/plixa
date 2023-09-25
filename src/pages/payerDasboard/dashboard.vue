<template>
  <div class="md:flex hidden md:text-5xl md:justify-center md:h-screen md:text-center">
    This page cannot be view on desktop. it supports mobile view only...
  </div>
  <div class="md:hidden justify-center flex items-center text-center mx-auto">
    <div class="mt-10">
      <h1 class="text-gray-500">Welcome to the dues payment portal</h1>
      <div class="mx-auto flex justify-center ">
        <img src="../../assets/image/Digital-pictures.png" alt="" />
      </div>
      <div class="mx-auto my-5 ">
        <button class="bg-[#001D3D] py-2 px-10 rounded-xl text-white">Proceed to make payment</button>
      </div>
      <mainFooter />
    </div>
  </div>
</template>

<script setup>
import mainFooter from '../../components/footer.vue'
</script>

<style scoped></style>
ase
