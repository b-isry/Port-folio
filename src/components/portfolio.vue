<template>
    <section class="bg-black bg-texture min-h-screen flex px-6 py-12">
      <div class="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">
        <!-- Left Side: Title and Social Links -->
        <div class="flex flex-col space-y-6 items-center justify-center">
          <h1 class="text-4xl md:text-6xl  text-white" style="font-family: 'Space Grotesk', sans-serif;">PORTFOLIO</h1>
          <div class="flex space-x-6 mt-4 items-center">
            <a href="https://instagram.com/b_isry" target="_blank" class="text-white hover:text-gray-400">
              <i class="fab fa-instagram text-2xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/bisrat-teshome-6182632b4/" target="_blank" class="text-white hover:text-gray-400">
              <i class="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="https://github.com/b-isry" target="_blank" class="text-white hover:text-gray-400">
              <i class="fab fa-github text-2xl"></i>
            </a>
            <a href="https://t.me/b_isry" target="_blank" class="text-white hover:text-gray-400">
              <i class="fab fa-telegram text-2xl"></i>
            </a>
            <!-- CV Button next to socials -->
            <router-link
              to="/contact"
              class="border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition duration-300 ml-4"
            >
              CV
            </router-link>
          </div>
        </div>
  
        <!-- Right Side: Cards -->
        <div class="flex flex-col space-y-6 text-white">
          <!-- Card 01 - ABOUT ME -->
          <div @click="navigateToAboutMe" class="flex items-center justify-between bg-neutral-900 p-8 max-w-md rounded-tr-2xl rounded-bl-2xl shadow-lg border border-white-700 transition-transform hover:scale-105 cursor-pointer">
            <div class="flex items-center" style="font-family: 'Space Grotesk', sans-serif;">
              <span class="text-xl md:text-2xl font-semibold">01 </span>
              <span class="text-lg md:text-xl ml-4">ABOUT ME</span>
            </div>
            <div class="w-6 h-6 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
  
          <!-- Card 02 - PROJECTS -->
          <div @click="navigateToProjects" class="flex items-center justify-between bg-neutral-900 p-8 max-w-md rounded-tr-2xl rounded-bl-2xl shadow-lg border border-white-700 transition-transform hover:scale-105 cursor-pointer">
            <div class="flex items-center" style="font-family: 'Space Grotesk', sans-serif;">
              <span class="text-xl md:text-2xl font-semibold">02 </span>
              <span class="text-lg md:text-xl ml-4">PROJECTS</span>
            </div>
            <div class="w-6 h-6 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
  
          <!-- Card 03 - CERTIFICATES -->
          <div @click="navigateToCertificates" class="flex items-center justify-between bg-neutral-900 p-8 max-w-md rounded-tr-2xl rounded-bl-2xl shadow-lg border border-white-700 transition-transform hover:scale-105 cursor-pointer">
            <div class="flex items-center" style="font-family: 'Space Grotesk', sans-serif;">
              <span class="text-xl md:text-2xl font-semibold">03 </span>
              <span class="text-lg md:text-xl ml-4">CERTIFICATES</span>
            </div>
            <div class="w-6 h-6 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    methods: {
      navigateToAboutMe() {
        this.$router.push('/aboutme');
      },
      navigateToProjects() {
        this.$router.push('/projects');
      },
      navigateToCertificates() {
        this.$router.push('/certificates');
      },
    },
  };
  </script>
  
  <style scoped>
  /* .bg-texture {
    background-image: url('/path/to/your/texture.png'); Replace with your texture image path
    background-size: cover;
    background-repeat: no-repeat;
  } */
  </style>
