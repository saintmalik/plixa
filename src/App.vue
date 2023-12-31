<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
// import nav1 from './views/navView.vue'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <div>
    <header>
    <!-- <h1 class="bg-red-600">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit quae soluta nam doloribus
      obcaecati similique at aliquam possimus vero dolorem.
    </h1> -->
    <!-- <nav1 />
    <div class="wrapper">
     
    </div> -->
  </header>

  <RouterView/>
  </div>
 
</template>

<style scoped></style>
