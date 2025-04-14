<template>
  <section class="p-6 bg-black">
    <h1 class="text-2xl font-bold text-white mb-8">Certificates</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="(certificate, index) in certificates" :key="index" class="relative group border border-gray-700 rounded-lg overflow-hidden shadow-lg">
        <img
          :src="certificate.image"
          :alt="certificate.title"
          class="w-full h-48 object-cover"
        />
        <div
          class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <p class="text-white text-lg font-semibold">{{ certificate.title }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Certificates',
  data() {
    return {
      certificates: [
        { image: 'path/to/certificate1.jpg', title: 'Certificate 1' },
        { image: 'path/to/certificate2.jpg', title: 'Certificate 2' },
        { image: 'path/to/certificate3.jpg', title: 'Certificate 3' },
        { image: 'path/to/certificate1.jpg', title: 'Certificate 1' },
        { image: 'path/to/certificate2.jpg', title: 'Certificate 2' },
        { image: 'path/to/certificate3.jpg', title: 'Certificate 3' },
        { image: 'path/to/certificate1.jpg', title: 'Certificate 1' },
        { image: 'path/to/certificate2.jpg', title: 'Certificate 2' },
        { image: 'path/to/certificate3.jpg', title: 'Certificate 3' },
        // Add more certificates as needed
      ],
    };
  },
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>

