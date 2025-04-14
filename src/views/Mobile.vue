<template>
    <div class="min-h-screen bg-black text-white px-4 py-12">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold">Frontend Projects</h1>
        <p class="text-gray-400 mt-4">Showcasing modern frontend development.</p>
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
            title: "Portfolio Website",
            description: "A modern portfolio built with Vue.js and Tailwind CSS.",
            technologies: ["Vue.js", "Tailwind CSS", "JavaScript"],
          },
          {
            id: 2,
            title: "E-commerce Store",
            description: "A responsive e-commerce website with dynamic features.",
            technologies: ["React", "CSS", "Firebase"],
          },
          // Add more projects here...
        ],
      };
    },
  };
  </script>
  