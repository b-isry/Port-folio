<template>
  <section class="bg-black min-h-screen flex flex-col items-center justify-center px-12 text-white snap-y snap-mandatory overflow-y-scroll">
    <!-- About Me Title -->
    <div class="snap-start min-h-screen flex flex-col items-start justify-center w-full">
      <h1 class="text-4xl font-bold mb-12">About Me</h1>
      <div class="grid grid-cols-2 gap-16 items-start">
        <!-- Paragraph -->
        <div>
          <p class="text-lg mb-4 leading-relaxed">
            Hello! I'm Bisrat Teshome, a software engineer operating from Dessie, Ethiopia. 
            My passion lies in the backend – architecting and developing reliable, scalable solutions. 
            I'm constantly learning and refining my skills, grounding my practical abilities in solid academic understanding and direct project experience.
            This curiosity extends into the realm of Artificial Intelligence, an area I keenly follow and explore. 
            This blend allows me to approach development thoughtfully and effectively.
          </p>
        </div>
        <!-- Picture Frame -->
        <div class="relative flex items-center">
          <div class="w-48 h-60 border-4 border-white overflow-hidden mx-6">
            <img src="../assets/images/me.jpg" alt="Your Picture" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>

    <!-- Education and Experience Section -->
    <div class="snap-start min-h-screen flex flex-col items-start justify-center w-full">
      <h2 class="text-4xl font-bold mb-8">Education & Experience</h2>
      <div class="grid grid-cols-2 gap-16 w-full max-w-5xl">
        <!-- Education Section -->
        <div>
          <h3 class="text-2xl font-semibold mb-4">Education</h3>
          <p class="text-lg leading-relaxed">Bachelor's Degree in Software Engineering, BahirDar University</p>
          <p class="text-lg leading-relaxed">Graduation: 2026</p>
          <hr class="my-6 border-gray-500" />
          <p class="text-lg leading-relaxed">Bachelor's Degree in Management, St. Mary University</p>
          <p class="text-lg leading-relaxed">Graduation: 2026</p>
          <hr class="my-6 border-gray-500" />
          <p class="text-lg leading-relaxed">A2SV Remote Education</p>
          <p class="text-lg leading-relaxed">Graduation: 2025</p>
        </div>

        <!-- Experience Section -->
        <div>
          <h3 class="text-2xl font-semibold mb-4">Experience</h3>
          <p class="text-lg leading-relaxed">Python Programmer at Oasis InfoByte</p>
          <p class="text-lg leading-relaxed">October, 2024 - November, 2024</p>
          <hr class="my-6 border-gray-500" />
          <p class="text-lg leading-relaxed">Backend Developer at A2SV</p>
          <p class="text-lg leading-relaxed">March, 2024 - Present</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutMe',
};
</script>

<style scoped>
/* Add your styles here */
</style>
