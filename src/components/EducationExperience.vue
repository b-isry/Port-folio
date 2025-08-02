<template>
  <section class="bg-black min-h-screen flex flex-col items-center justify-center px-6 md:px-12 text-white snap-y snap-mandatory pt-24">
    <div class="snap-start min-h-screen flex flex-col items-start justify-center w-full">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 w-full max-w-5xl">
        <!-- Education Section -->
        <div>
          <h2 class="text-3xl md:text-4xl font-extrabold mb-8 text-white tracking-tight">Education</h2>
          <div class="mb-10">
            <h3 class="text-xl md:text-2xl font-bold mb-2">Bachelor's Degree in Software Engineering</h3>
            <div class="flex items-center mb-2">
              <span class="text-sm text-gray-400 mr-4">BahirDar University</span>
              <span class="text-sm text-gray-400">Graduation: 2026</span>
            </div>
            <ul class="list-disc list-inside text-sm text-gray-400 mb-2 ml-2">
              <li><span class="font-semibold text-white">Major:</span> Software Engineering</li>
              <li><span class="font-semibold text-white">GPA:</span> 3.9</li>
            </ul>
          </div>
          <div class="mb-10">
            <h3 class="text-xl md:text-2xl font-bold mb-2">Bachelor's Degree in Management</h3>
            <div class="flex items-center mb-2">
              <span class="text-sm text-gray-400 mr-4">St. Mary University</span>
              <span class="text-sm text-gray-400">Graduation: 2026</span>
            </div>
            <ul class="list-disc list-inside text-sm text-gray-400 mb-2 ml-2">
              <li><span class="font-semibold text-white">Major:</span> Management</li>
              <li><span class="font-semibold text-white">GPA:</span> 3.5</li>
            </ul>
          </div>
          <div class="mb-10">
            <h3 class="text-xl md:text-2xl font-bold mb-2">A2SV Remote Education</h3>
            <div class="flex items-center mb-2">
              <span class="text-sm text-gray-400 mr-4">Graduation: 2025</span>
            </div>
            <ul class="list-disc list-inside text-sm text-gray-400 mb-2 ml-2">
              <li><span class="font-semibold text-white">Major:</span> Data structures and algorithms</li>
              <li><span class="font-semibold text-white">Activities:</span> Solved 250+ leetcode questions</li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl md:text-2xl font-bold mb-2">10 Academy: Kifya AI Mastery program</h3>
            <div class="flex items-center mb-2">
              <span class="text-sm text-gray-400 mr-4">Graduation: 2025</span>
            </div>
            <ul class="list-disc list-inside text-sm text-gray-400 mb-2 ml-2">
              <li><span class="font-semibold text-white">Major:</span> Artificial Intelligence and Machine learning</li>
              <li><span class="font-semibold text-white">Activities:</span> Worked on 10+ real life projects</li>
            </ul>
          </div>
        </div>
        <!-- Experience Section -->
        <div>
          <h2 class="text-3xl md:text-4xl font-extrabold mb-8 text-white tracking-tight">Experience</h2>
          <!-- A2SV -->
          <div class="mb-10">
            <div class="flex items-center mb-2">
              <img src="https://a2sv.org/favicon.ico" alt="A2SV Logo" class="w-8 h-8 rounded mr-3" />
              <span class="text-lg md:text-xl font-bold text-white">A2SV</span>
              <span class="ml-4 text-sm text-gray-400">March, 2025 - Present</span>
            </div>
            <div class="ml-11 border-l-2 border-gray-700 pl-6">
              <div class="mb-8">
                <h3 class="text-lg md:text-xl font-semibold text-white mb-1">Backend Intern – AfroVintage Project</h3>
                <p class="text-sm text-gray-400 mb-2">
                  Backend engineer intern for a scalable secondhand clothing marketplace. Contributed to supplier/reseller workflows, REST API development, MongoDB modeling, Dockerization, and deployment on Render.
                </p>
                <ul class="list-disc list-inside text-sm text-gray-400 mb-2">
                  <li><span class="font-semibold text-white">Technologies:</span> Golang, Gin, MongoDB, Docker, Render</li>
                  <li><span class="font-semibold text-white">Impact:</span> Built scalable backend and improved deployment workflow.</li>
                </ul>
              </div>
              <div>
                <h3 class="text-lg md:text-xl font-semibold text-white mb-1">Junior Backend Developer – AfroChat AI Project</h3>
                <p class="text-sm text-gray-400 mb-2">
                  Backend team member for an AI-powered chat application, focusing on backend architecture, data flow, and system scalability.
                </p>
                <ul class="list-disc list-inside text-sm text-gray-400 mb-2">
                  <li><span class="font-semibold text-white">Technologies:</span> Python, Litstar, PostgreSQL</li>
                  <li><span class="font-semibold text-white">Impact:</span> Contributed to scalable, AI-driven chat backend.</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Techsisters -->
          <div class="mb-10">
            <div class="flex items-center mb-2">
              <img src="https://avatars.githubusercontent.com/u/168320865?s=200&v=4" alt="Techsisters Logo" class="w-8 h-8 rounded mr-3" />
              <span class="text-lg md:text-xl font-bold text-white">Techsisters</span>
              <span class="ml-4 text-sm text-gray-400">August, 2024 - Present</span>
            </div>
            <div class="ml-11 border-l-2 border-gray-700 pl-6">
              <h3 class="text-lg md:text-xl font-semibold text-white mb-1">Cofounder</h3>
              <p class="text-sm text-gray-400 mb-2">
                Designed and developed <span class="font-semibold text-white">Tenagari Andebet</span>, a secure and user-friendly mobile app for reporting and accessing resources to support victims of sexual harassment in Ethiopia.
              </p>
              <ul class="list-disc list-inside text-sm text-gray-400 mb-2">
                <li><span class="font-semibold text-white">Technologies:</span> Flutter, Dart</li>
                <li><span class="font-semibold text-white">Impact:</span> Automated repetitive tasks, improved efficiency, and empowered users to access support resources securely.</li>
              </ul>
            </div>
          </div>
          <!-- Oasis InfoByte -->
          <div>
            <div class="flex items-center mb-2">
              <img src="https://media.licdn.com/dms/image/C560BAQFQwKkQvQwQ1g/company-logo_200_200/0/1630642469432?e=1723680000&v=beta&t=QkQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQw" alt="Oasis InfoByte Logo" class="w-8 h-8 rounded mr-3" />
              <span class="text-lg md:text-xl font-bold text-white">Oasis InfoByte</span>
              <span class="ml-4 text-sm text-gray-400">October, 2024 - November, 2024</span>
            </div>
            <div class="ml-11 border-l-2 border-gray-700 pl-6">
              <h3 class="text-lg md:text-xl font-semibold text-white mb-1">Python Programmer</h3>
              <p class="text-sm text-gray-400 mb-2">
                Built three mini-projects to demonstrate core Python skills:
              </p>
              <ul class="list-disc list-inside text-sm text-gray-400 mb-2">
                <li>
                  <span class="font-semibold text-white">Password Generator:</span>
                  Created a secure password generator with customizable complexity and length.
                </li>
                <li>
                  <span class="font-semibold text-white">BMI Calculator:</span>
                  Developed a user-interactive app to calculate and interpret Body Mass Index.
                </li>
                <li>
                  <span class="font-semibold text-white">Voice Assistant:</span>
                  Implemented a simple voice-controlled assistant using Python libraries like <span class="font-mono">speech_recognition</span> and <span class="font-mono">pyttsx3</span>.
                </li>
              </ul>
              <p class="text-sm text-gray-400 mb-2">
                Strengthened understanding of control structures, functions, file handling, and basic automation in Python.
                Gained experience in writing clean, functional code and working independently on project-based learning.
              </p>
              <ul class="list-disc list-inside text-sm text-gray-400 mb-2">
                <li><span class="font-semibold text-white">Technologies:</span> Python, speech_recognition, pyttsx3</li>
                <li><span class="font-semibold text-white">Impact:</span> Demonstrated practical Python skills and independent project work.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EducationExperience',
};
</script>

<style scoped>
/* Add your styles here */
</style>
