<script setup>
import { RouterView } from "vue-router";
import NavigationBar from "./components/NavigationBar.vue";
</script>

<template>
  <NavigationBar />
  <div class="main">
    <RouterView />
  </div>
</template>

<style scoped></style>
