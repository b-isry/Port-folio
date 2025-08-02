<template>
  <nav class="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
      <!-- Logo -->
      <div class="text-2xl font-bold cursor-pointer">b_isry</div>

      <!-- Desktop Links -->
      <div class="hidden md:flex space-x-8">
        <router-link
          to="/"
          class="hover:text-gray-300 transition duration-300"
          @mouseenter="isHovering = true"
          @mouseleave="isHovering = false"
        >
          About
        </router-link>
        <router-link
          to="/projects"
          class="hover:text-gray-300 transition duration-300"
          @mouseenter="isHovering = true"
          @mouseleave="isHovering = false"
        >
          Projects
        </router-link>
        <router-link
          to="/educexp"
          class="hover:text-gray-300 transition duration-300"
          @mouseenter="isHovering = true"
          @mouseleave="isHovering = false"
        >
          Experience
        </router-link>
        <!-- <router-link
          to="/certificates"
          class="hover:text-gray-300 transition duration-300"
          @mouseenter="isHovering = true"
          @mouseleave="isHovering = false"
        >
          Certificates
        </router-link> -->
        <router-link
          to="/contact"
          class="hover:text-gray-300 transition duration-300"
          @mouseenter="isHovering = true"
          @mouseleave="isHovering = false"
        >
          Contact
        </router-link>
      </div>

      <!-- Hamburger Menu -->
      <div class="md:hidden flex items-center">
        <button @click="toggleMenu" class="focus:outline-none">
          <svg
            class="w-6 h-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-show="menuOpen"
      class="md:hidden bg-black text-white space-y-4 px-4 py-6"
    >
      <router-link to="/" class="block hover:text-gray-300">About</router-link>
      <router-link to="/projects" class="block hover:text-gray-300">Projects</router-link>
      <router-link to="/educexp" class="block hover:text-gray-300">Experience</router-link>
      <!-- <router-link to="/certificates" class="block hover:text-gray-300">Certificates</router-link> -->
      <router-link to="/contact" class="block hover:text-gray-300">Contact</router-link>
    </div>
  </nav>
</template>

<script> 
import { ref } from "vue";

export default {
  setup() {
    const menuOpen = ref(false);
    const isHovering = ref(false);

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
    };

    return { menuOpen, toggleMenu, isHovering };
  },
};
</script>

<style scoped>
/* Smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}
</style>



