<template>
  <div class="bg-black">
    <div class="justify-center items-center max-w-xl mx-auto place-items-center flex h-screen">
      <div class="block shadow-2xl bg-white p-10 rounded-2xl text-center">
        <h1 class="font-extrabold text-4xl text-[#306BAC]">Get Started</h1>
        <p class="font-medium">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat iure veniam aut rem? Quae
          quis eligendi rem quidem sapiente tempore!
        </p>
        <div class="flex gap-5 mt-5 justify-center mx-auto">
          <router-link to="/organizationDashboard">
            <button class="bg-[#306BAC] capitalize font-bold px-5 py-3 text-white rounded-2xl">
              join as a marchant
            </button>
          </router-link>
          <router-link to="/payerDashboard">
            <button class="bg-[#306BAC] capitalize font-bold px-5 py-3 text-white rounded-2xl">
              make a payment
            </button>
          </router-link>
        </div>
        <div class="flex gap-5 mt-5 justify-center mx-auto">
          <router-link to="/">
            <button class="capitalize font-bold text-[#306BAC]">Back to home</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
