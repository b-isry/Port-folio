<template>
  <section class="bg-black min-h-screen flex flex-col px-4 py-12">
    <div class="max-w-7xl w-full mx-auto">
      <!-- Backend Projects -->
      <div class="mb-16">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-2 text-white text-center tracking-tight">Backend</h2>
        <p class="text-base md:text-lg text-gray-400 mb-8 text-center">Robust APIs and server-side logic.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            v-for="project in backendProjects"
            :key="project.id"
            :title="project.title"
            :description="project.description"
            :technologies="project.technologies"
            :github="project.github"
          />
        </div>
      </div>
      <!-- AI/ML Projects -->
      <div class="mb-16">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-2 text-white text-center tracking-tight">AI/ML</h2>
        <p class="text-base md:text-lg text-gray-400 mb-8 text-center">Intelligent systems and data-driven solutions.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            v-for="project in aimlProjects"
            :key="project.id"
            :title="project.title"
            :description="project.description"
            :technologies="project.technologies"
            :github="project.github"
          />
        </div>
      </div>
      <!-- Tools -->
      <div class="mb-16">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-2 text-white text-center tracking-tight">Tools</h2>
        <p class="text-base md:text-lg text-gray-400 mb-8 text-center">Tools for developers.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            v-for="project in tools"
            :key="project.id"
            :title="project.title"
            :description="project.description" 
            :technologies="project.technologies"
            :github="project.github"
          />
        </div>
      </div>
      
    </div>
  </section>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";

export default {
  components: { ProjectCard },
  data() {
    return {
      backendProjects: [
        {
          id: 1,
          title: "Afro-Vintage API Service",
          description: "This is the backend service for the Afro Vintage platform — built with Go (Gin), MongoDB, and Clean Architecture. It powers both the mobile (Flutter) and web (Next.js) apps.",
          technologies: ["Golang", "Gin", "MongoDB"],
          github: "https://github.com/A2SV/A2SV-2025-Internship-Afro-Vintage/tree/main/backend/afro-vintage-backend",
          
        },
        {
          id: 2,
          title: "Grocery management system",
          description: "The Grocery Management System API is a RESTful API designed to manage grocery items and interact with product data from the OpenFoodFacts Product Database. It provides CRUD operations for grocery items and allows users to search for products by name, brand, or nutrition grade.",
          technologies: ["Golang", "MongoDB"],
          github: "https://github.com/A2SV/A2SV-2025-Internship-Assessment/tree/feat-Bisrat-backend/backend/grocery-api",

        },
      ],
      tools: [
        {
          id: 1,
          title: "DevPort",
          description: "DevPort is a next-generation dependency engine that virtualizes node_modules. It treats your dependencies as a single, versioned artifact tied directly to your git commits and stored in a shared cloud cache (like S3).",
          technologies: ["Golang"],
          github: "https://github.com/b-isry/DevPort",

        },
        {
          id: 2,
          title: "URL manager",
          description: "A minimal Chrome extension for managing URLs with a popup interface and keyboard shortcut.",
          technologies: ["HTML", "CSS", "Java script"],
          github: "https://github.com/b-isry/Username_Manager",

        },
        {
          id: 3,
          title: "RepoCleaner",
          description: "a Python-based GitHub App that handles webhook events and automates repository management tasks, such as deleting empty repositories.",
          technologies: ["FastAPI", "PyGithub", "ngrok"],
          github: "https://github.com/b-isry/RepoCleaner",

        },
        {
          id: 4,
          title: "GitSafe",
          description: "GitSafe is a tool that helps you manage and backup your Git repositories. It identifies stale repositories and creates backups of them in Google Drive.",
          technologies: ["Golang"],
          github: "https://github.com/b-isry/GitSafe"
        }
      ],
      aimlProjects: [
        {
          id: 1,
          title: "Kara Solutions ELT",
          description: "Kara Solutions ELT is a modular pipeline for extracting, loading, and transforming data from Telegram channels into a PostgreSQL database for analytics and reporting. The project leverages Docker for reproducible environments, dbt for analytics engineering, and Python for data collection and orchestration",
          technologies: ["Python", "Pandas", "Numpy", "TextBlob"],
          github: "https://github.com/b-isry/Ethio-medical",
        },
        {
          id: 2,
          title: "Adey-fraud-detection",
          description: "a fraud detection system for e-commerce and bank credit transactions at Adey Innovations Inc.",
          technologies: ["pandas","numpy", 'scikit-learn', 'imblearn', 'matplotlib', 'seaborn'],
          github: "https://github.com/b-isry/Adey-fraud-detection"
        },
        {
          id: 3,
          title: "CreditRust RAG Chatbot",
          description: "A Retrieval-Augmented Generation (RAG) chatbot for exploring and searching consumer complaint narratives using semantic search and vector databases.",
          technologies: ["pandas","numpy", 'scikit-learn', 'imblearn', 'matplotlib', 'gradio'],
          github: "https://github.com/b-isry/crediTrust"
        },
        {
          id: 4,
          title: "Amharic E-commerce Data Extractor",
          description: "This project is designed to extract, preprocess, and prepare Amharic e-commerce data for manual annotation, particularly for Named Entity Recognition (NER) tasks using the CoNLL format.",
          technologies: ["pandas","numpy", 'scikit-learn', 'imblearn', 'matplotlib', 'gradio'],
          github: "https://github.com/b-isry/amharic_ecommerce_data_extractor"
        },
        {
          id: 5,
          title: "News Sentiment and Stock Moves",
          description: "This project analyzes financial news headlines to understand their impact on stock prices.",
          technologies: ["Python", "Pandas", "Numpy", "TextBlob"],
          github: "https://github.com/b-isry/financial-news-sentiment-analysis",
        },
      ],
    };
  },
};
</script>
