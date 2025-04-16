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
  <div id="app" class="bg-black text-white">
    <Navbar />
    <div class="min-h-screen bg-black">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
    <CustomCursor />
  </div>
</template>

<style scoped>
/* Smooth fade transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
