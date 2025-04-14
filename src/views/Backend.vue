<template>
  <div class="min-h-screen bg-black text-white px-4 py-12">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold">Backend Projects</h1>
      <p class="text-gray-400 mt-4">Showcasing robust backend development.</p>
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
          title: "API Service",
          description: "A RESTful API built with Node.js and Express.",
          technologies: ["Node.js", "Express", "MongoDB"],
        },
        {
          id: 2,
          title: "Authentication System",
          description: "A secure authentication system with JWT.",
          technologies: ["Node.js", "JWT", "PostgreSQL"],
        },
        // Add more projects here...
      ],
    };
  },
};
</script>
