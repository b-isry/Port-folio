<template>
  <div class="min-h-screen bg-black text-white flex items-center justify-center px-4">
    <div class="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      <!-- Left: Contact Info & Socials -->
      <div class="flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
        <p class="text-base text-gray-400 mb-6">
          Let's work together! Reach out for collaborations, questions, or feedback.
        </p>
        <div class="flex gap-4 mb-4">
          <a
            href="https://www.linkedin.com/in/bisrat-teshome-6182632b4/"
            target="_blank"
            aria-label="LinkedIn"
            class="text-white hover:text-gray-400"
          >
            <i class="fab fa-linkedin text-2xl"></i>
          </a>
          <a
            href="https://t.me/b_isry"
            target="_blank"
            aria-label="Telegram"
            class="text-white hover:text-gray-400"
          >
            <i class="fab fa-telegram text-2xl"></i>
          </a>
          <a
            href="mailto:bisratt1995@gmail.com"
            aria-label="Email"
            class="text-white hover:text-red-400"
          >
            <i class="fas fa-envelope text-2xl"></i>
          </a>
        </div>
      </div>

      <!-- Right: Contact Form -->
      <form
        @submit.prevent="handleSubmit"
        class="space-y-6 bg-black border p-8 rounded-lg shadow-lg backdrop-blur-md"
      >
        <div>
          <label for="name" class="block text-sm font-medium">Name</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            class="mt-1 block w-full bg-black text-white border border-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white"
            @mouseenter="isWriting = true"
            @mouseleave="isWriting = false"
          />
          <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium">Email</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            class="mt-1 block w-full bg-black text-white border border-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white"
            @mouseenter="isWriting = true"
            @mouseleave="isWriting = false"
          />
          <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
        </div>
        <div>
          <label for="message" class="block text-sm font-medium">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="4"
            class="mt-1 block w-full bg-black text-white border border-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white"
            @mouseenter="isWriting = true"
            @mouseleave="isWriting = false"
          ></textarea>
          <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
        </div>
        <button
          type="submit"
          class="w-full bg-black text-white py-2 border rounded-md hover:bg-black-200 transition duration-300"
          @mouseenter="isHovering = true"
          @mouseleave="isHovering = false"
        >
          Send
        </button>
        <p v-if="successMessage" class="text-green-500 text-sm mt-4">{{ successMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const form = ref({ name: "", email: "", message: "" });
    const errors = ref({});
    const successMessage = ref("");
    const isHovering = ref(false);
    const isWriting = ref(false);

    const validateForm = () => {
      errors.value = {};
      if (!form.value.name) errors.value.name = "Name is required.";
      if (!form.value.email) {
        errors.value.email = "Email is required.";
      } else if (!/\S+@\S+\.\S+/.test(form.value.email)) {
        errors.value.email = "Email is invalid.";
      }
      if (!form.value.message) errors.value.message = "Message is required.";
      return Object.keys(errors.value).length === 0;
    };

    const handleSubmit = () => {
      if (validateForm()) {
        successMessage.value = "Thank you for reaching out! I’ll get back to you soon.";
        form.value = { name: "", email: "", message: "" };
        setTimeout(() => (successMessage.value = ""), 5000); // Clear message after 5 seconds
      }
    };

    return { form, errors, successMessage, isHovering, isWriting, handleSubmit };
  },
};
</script>

<style scoped>
/* Responsive adjustments */
@media (max-width: 1024px) {
  .grid {
    grid-template-columns: 1fr !important;
    gap: 2rem !important;
  }
}
</style>


