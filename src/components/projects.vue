<template>
    <section class="bg-black bg-texture min-h-screen flex px-6 py-12 mt-16">
      <div class="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">
        <!-- Left Side: Title and Social Links -->
        <div class="flex flex-col space-y-6 items-center justify-center">
          <h1 class="text-4xl md:text-6xl  text-white" style="font-family: 'Space Grotesk', sans-serif;">PROJECTS</h1>
        </div>
  
        <!-- Right Side: Cards -->
        <div class="flex flex-col space-y-6 text-white">
          <!-- Card 01 - Frontend -->
          <div @click="$router.push('/frontend')" class="flex items-center justify-between bg-neutral-900 p-8 max-w-md rounded-tr-2xl rounded-bl-2xl shadow-lg border border-white-700 transition-transform hover:scale-105 cursor-pointer">
            <div class="flex items-center" style="font-family: 'Space Grotesk', sans-serif;">
              <span class="text-xl md:text-2xl font-semibold">01 </span>
              <span class="text-lg md:text-xl ml-4">Frontend</span>
            </div>
            <div class="w-6 h-6 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
  
          <!-- Card 02 - Backend -->
          <div @click="$router.push('/backend')" class="flex items-center justify-between bg-neutral-900 p-8 max-w-md rounded-tr-2xl rounded-bl-2xl shadow-lg border border-white-700 transition-transform hover:scale-105 cursor-pointer">
            <div class="flex items-center" style="font-family: 'Space Grotesk', sans-serif;">
              <span class="text-xl md:text-2xl font-semibold">02 </span>
              <span class="text-lg md:text-xl ml-4">Backend</span>
            </div>
            <div class="w-6 h-6 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
  
          <!-- Card 03 - Mobile Apps -->
          <div @click="$router.push('/mobile')" class="flex items-center justify-between bg-neutral-900 p-8 max-w-md rounded-tr-2xl rounded-bl-2xl shadow-lg border border-white-700 transition-transform hover:scale-105 cursor-pointer">
            <div class="flex items-center" style="font-family: 'Space Grotesk', sans-serif;">
              <span class="text-xl md:text-2xl font-semibold">03 </span>
              <span class="text-lg md:text-xl ml-4">Mobile Apps</span>
            </div>
            <div class="w-6 h-6 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          <!-- Card 04 - UI/UX Design -->
          <div @click="$router.push('/uiux')" class="flex items-center justify-between bg-neutral-900 p-8 max-w-md rounded-tr-2xl rounded-bl-2xl shadow-lg border border-white-700 transition-transform hover:scale-105 cursor-pointer">
            <div class="flex items-center" style="font-family: 'Space Grotesk', sans-serif;">
              <span class="text-xl md:text-2xl font-semibold">04 </span>
              <span class="text-lg md:text-xl ml-4">UI/UX Design</span>
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

  </script>
  
  <style scoped>

  </style>
