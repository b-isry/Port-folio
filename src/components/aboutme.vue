<template>
  <section class="bg-black min-h-screen flex flex-col items-center justify-center px-6 md:px-12 text-white snap-y snap-mandatory">
    <!-- About Me Title -->
    <div class="snap-start min-h-screen flex flex-col items-start justify-center w-full">
      <h1 class="text-3xl md:text-4xl font-bold mb-8 md:mb-12">About Me</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
        <!-- Paragraph -->
        <div class="order-2 md:order-none">
          <p class="text-base md:text-lg mb-4 text-gray-400 leading-relaxed">
            Hello! I'm Bisrat Teshome, a software engineer operating from Dessie, Ethiopia. 
            My passion lies in the backend – architecting and developing reliable, scalable solutions. 
            I'm constantly learning and refining my skills, grounding my practical abilities in solid academic understanding and direct project experience.
            This curiosity extends into the realm of Artificial Intelligence, an area I keenly follow and explore. 
            Beyond tech, I sketch, take photos, and read — creative outlets that help me see problems (and solutions) from new angles.
          </p>
          <div class="flex space-x-4 mt-8 items-center">
            <a href="https://github.com/b-isry" target="_blank" class="text-white hover:text-gray-400">
              <i class="fab fa-github text-2xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/bisrat-teshome-6182632b4/" target="_blank" class="text-white hover:text-gray-400">
              <i class="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="https://instagram.com/b_isry" target="_blank" class="text-white hover:text-gray-400">
              <i class="fab fa-instagram text-2xl"></i>
            </a>
            <a href="https://t.me/b_isry" target="_blank" class="text-white hover:text-gray-400">
              <i class="fab fa-telegram text-2xl"></i>
            </a>
            <a href="https://leetcode.com/u/BisratT/" target="_blank" class="text-white hover:text-yellow-400">
              <i class="fa fa-code text-2xl"></i>
            </a>
            <a
              href="https://drive.google.com/file/d/12_EWqMnoi3TuXAw-AC3Oh1wMS_l5-Fej/view?usp=sharing"
              target="_blank"
              rel="noopener"
              class="border border-white text-xs px-2 py-1 rounded hover:bg-white hover:text-black transition duration-300"
              style="font-weight: 500;"
            >
              CV
            </a>
          </div>
        </div>
         <!-- Picture Frame -->
        <div class="relative flex items-center justify-center md:order-none order-1">
          <div class="w-36 h-48 md:w-48 md:h-60 border-4 border-white overflow-hidden mx-4 md:mx-6">
            <img src="../assets/images/me.jpg" alt="Your Picture" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </section></template>


<script>
export default {name: 'AboutMe',
};
</script>


