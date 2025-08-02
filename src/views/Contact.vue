<template>
  <div class="min-h-screen bg-black text-white flex items-center justify-center px-4">
    <div class="max-w-xl w-full">
      <!-- Left: Contact Form -->
      <form
        @submit.prevent="handleSubmit"
        class="space-y-6 bg-black border p-8 mt-12 rounded-lg shadow-lg backdrop-blur-md"
      >
        <h2 class="text-2xl font-bold">Contact Me</h2>
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
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

/* Change cursor to text when hovering over writing fields */
/* input, textarea {
  cursor: text !important;
}

/* Ensure input text color is black */
/* input, textarea {
  color: black;
}  */
</style>

