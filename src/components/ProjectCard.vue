<template>
  <div
    class="bg-cover bg-center text-white p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between min-h-[320px]"
    :style="{ backgroundImage: `url(${thumbnail})` }"
  >
    <div class="flex-1 flex flex-col">
      <h3 class="text-xl font-bold bg-black bg-opacity-50 p-2 rounded">{{ title }}</h3>
      <p class="text-sm mt-2 bg-black bg-opacity-50 p-2 rounded flex-1">{{ description }}</p>
      <div class="flex flex-wrap gap-2 mt-4">
        <span
          v-for="tech in technologies"
          :key="tech"
          class="bg-neutral-700 text-xs px-2 py-1 rounded-full"
        >
          {{ tech }}
        </span>
      </div>
    </div>
    <div class="flex items-center mt-4 space-x-2">
       <a
        v-if="github"
        :href="github"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center justify-center bg-neutral-800 hover:bg-neutral-700 text-white rounded-full w-8 h-8"
        aria-label="GitHub"
      >
        <i class="fab fa-github"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    technologies: Array,
    thumbnail: String, // Add a new prop for the thumbnail URL
    github: String, // Add a new prop for the GitHub URL
  },
};
</script>
