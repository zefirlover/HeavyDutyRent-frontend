<script setup>
import HeaderComponent from './components/Header.vue'
import FooterComponent from './components/Footer.vue'
</script>

<template>
  <HeaderComponent/>  

  <main>
    <router-view></router-view>
  </main>

  <FooterComponent/>
</template>

<script>
</script>

<style scoped>
</style>
