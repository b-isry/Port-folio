<template>
  <div
    class="bg-cover bg-center text-white p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
    :style="{ backgroundImage: `url(${thumbnail})` }"
  >
    <h3 class="text-xl font-bold bg-black bg-opacity-50 p-2 rounded">{{ title }}</h3>
    <p class="text-sm mt-2 bg-black bg-opacity-50 p-2 rounded">{{ description }}</p>
    <div class="flex flex-wrap gap-2 mt-4">
      <span
        v-for="tech in technologies"
        :key="tech"
        class="bg-neutral-700 text-xs px-2 py-1 rounded-full"
      >
        {{ tech }}
      </span>
    </div>
    <button
      class="mt-4 bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300"
    >
      View Project
    </button>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    technologies: Array,
    thumbnail: String, // Add a new prop for the thumbnail URL
  },
};
</script>
