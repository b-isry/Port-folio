<template>
  <transition name="fade" mode="out-in">
    <div class="min-h-screen bg-black text-white px-4 py-12">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold">UI/UX Projects</h1>
        <p class="text-gray-400 mt-4">Showcasing creative UI/UX designs.</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :title="project.title"
          :description="project.description"
          :technologies="project.technologies"
        />
      </div>
    </div>
  </transition>
</template>

<script>
import ProjectCard from "../components/ProjectCard.vue";

export default {
  components: { ProjectCard },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Landing Page Design",
          description: "A clean and modern landing page for a SaaS product.",
          technologies: ["Figma", "Adobe XD", "CSS"],
        },
        {
          id: 2,
          title: "Mobile App UI",
          description: "A user-friendly mobile app interface for e-commerce.",
          technologies: ["Sketch", "InVision", "React Native"],
        },
        // ...existing projects...
      ],
    };
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from {
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
}
</style>
