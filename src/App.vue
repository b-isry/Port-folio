<script>
import CustomCursor from "./components/CustomCursor.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: 'App',
  components: {
    CustomCursor,
    Navbar,
  },
};
</script>

<template>
  <div id="app" class="mt-16">
    <Navbar />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <CustomCursor />
  </div>
</template>

<style scoped>
</style>

<style>
/* Smooth fade transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
