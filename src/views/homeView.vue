<template>
  <div>
    <div>
    <navBar />
  </div>
  <div>
    <hero />
    <sponsor />
    <feature />
    <social />
    <foot />
  </div>
  </div>
 
</template>

<script setup>
import navBar from '../views/navView.vue'
import hero from '../components/hero.vue'
import sponsor from '../components/sponsor.vue'
import feature from '../components/feature.vue'
import social from '../components/social.vue'
import foot from '../components/footer.vue'
</script>

<style scoped></style>
