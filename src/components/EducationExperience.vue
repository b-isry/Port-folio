<template>
  <section class="bg-black min-h-screen flex flex-col items-center justify-center px-6 md:px-12 text-white snap-y snap-mandatory pt-24">
    <div class="snap-start min-h-screen flex flex-col items-start justify-center w-full">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full max-w-5xl">
        <!-- Education Section -->
        <div>
          <h3 class="text-xl md:text-2xl font-semibold mb-4">Education</h3>
          <p class="text-base md:text-lg leading-relaxed font-semibold">Bachelor's Degree in Software Engineering, BahirDar University</p>
          <p class="text-base md:text-lg leading-relaxed">Graduation: 2026</p>
          <ul class="list-disc list-inside text-sm text-gray-400 mb-2 ml-2">
            <li><span class="font-semibold text-white">Major:</span> Software Engineering</li>
            <li><span class="font-semibold text-white">GPA:</span> 3.9</li>
          </ul>
          <hr class="my-4 md:my-6 border-gray-500" />
          <p class="text-base md:text-lg leading-relaxed font-semibold">Bachelor's Degree in Management, St. Mary University</p>
          <p class="text-base md:text-lg leading-relaxed">Graduation: 2026</p>
          <ul class="list-disc list-inside text-sm text-gray-400 mb-2 ml-2">
            <li><span class="font-semibold text-white">Major:</span> Management</li>
            <li><span class="font-semibold text-white">GPA:</span> 3.5 </li>
          </ul>
          <hr class="my-4 md:my-6 border-gray-500" />
          <p class="text-base md:text-lg leading-relaxed font-semibold">A2SV Remote Education</p>
          <p class="text-base md:text-lg leading-relaxed">Graduation: 2025</p>
          <ul class="list-disc list-inside text-sm text-gray-400 mb-2 ml-2">
            <li><span class="font-semibold text-white">Major:</span> Data structures and algorithms</li>
            <li><span class="font-semibold text-white">Activities:</span> Solved 250+ leetcode questions</li>
          </ul>
          <hr class="my-4 md:my-6 border-gray-500" />
          <p class="text-base md:text-lg leading-relaxed font-semibold">10 Academy: Kifya AI Mastery program</p>
          <p class="text-base md:text-lg leading-relaxed">Graduation: 2025</p>
          <ul class="list-disc list-inside text-sm text-gray-400 mb-2 ml-2">
            <li><span class="font-semibold text-white">Major:</span> Artificial Intelligence and Machine learning</li>
            <li><span class="font-semibold text-white">Activities:</span> worked on 10+ real life projects</li>
          </ul>
        </div>
        <!-- Experience Section -->
        <div>
          <h3 class="text-xl md:text-2xl font-semibold mb-4">Experience</h3>
          <!-- Rearranged: A2SV (March, 2025 - Present) -->
          <div class="mb-6">
            <div class="flex items-center mb-2">
              <img src="https://a2sv.org/favicon.ico" alt="A2SV Logo" class="w-8 h-8 rounded mr-3" />
              <div>
                <span class="text-lg md:text-xl font-bold text-white">A2SV</span>
                <span class="block text-sm text-gray-400">March, 2025 - Present</span>
              </div>
            </div>
            <div class="ml-11 border-l-2 border-gray-700 pl-6">
              <!-- Role 1 -->
              <div class="mb-6">
                <p class="text-base md:text-lg font-semibold text-white mb-1">Backend Intern – AfroVintage Project</p>
                <p class="text-sm text-gray-400 mb-2">
                  Backend engineer intern for a scalable secondhand clothing marketplace. Contributed to supplier/reseller workflows, REST API development, MongoDB modeling, Dockerization, and deployment on Render.
                </p>
                <ul class="list-disc list-inside text-sm text-gray-400 mb-2">
                  <li><span class="font-semibold text-white">Technologies:</span> Golang, Gin, MongoDB, Docker, Render</li>
                  <li><span class="font-semibold text-white">Impact:</span> Built scalable backend and improved deployment workflow.</li>
                </ul>
              </div>
              <!-- Role 2 -->
              <div>
                <p class="text-base md:text-lg font-semibold text-white mb-1">Junior Backend Developer – AfroChat AI Project</p>
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
          <!-- Techsisters (August, 2024 - Present) -->
          <div class="mb-6">
            <div class="flex items-center mb-2">
              <img src="https://avatars.githubusercontent.com/u/168320865?s=200&v=4" alt="Techsisters Logo" class="w-8 h-8 rounded mr-3" />
              <div>
                <span class="text-lg md:text-xl font-bold text-white">Techsisters</span>
                <span class="block text-sm text-gray-400">August, 2024 - Present</span>
              </div>
            </div>
            <div class="ml-11 border-l-2 border-gray-700 pl-6">
              <div>
                <p class="text-base md:text-lg font-semibold text-white mb-1">Cofounder</p>
                <p class="text-sm text-gray-400 mb-2">
                  Designed and developed <span class="font-semibold text-white">Tenagari Andebet</span>, a secure and user-friendly mobile app for reporting and accessing resources to support victims of sexual harassment in Ethiopia.
                </p>
                <ul class="list-disc list-inside text-sm text-gray-400 mb-2">
                  <li><span class="font-semibold text-white">Technologies:</span> Flutter, Dart</li>
                  <li><span class="font-semibold text-white">Impact:</span> Automated repetitive tasks, improved efficiency, and empowered users to access support resources securely.</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Oasis InfoByte (October, 2024 - November, 2024) -->
          <div class="mb-6">
            <div class="flex items-center mb-2">
              <img src="https://media.licdn.com/dms/image/C560BAQFQwKkQvQwQ1g/company-logo_200_200/0/1630642469432?e=1723680000&v=beta&t=QkQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQw" alt="Oasis InfoByte Logo" class="w-8 h-8 rounded mr-3" />
              <div>
                <span class="text-lg md:text-xl font-bold text-white">Oasis InfoByte</span>
                <span class="block text-sm text-gray-400">October, 2024 - November, 2024</span>
              </div>
            </div>
            <div class="ml-11 border-l-2 border-gray-700 pl-6">
              <div>
                <p class="text-base md:text-lg font-semibold text-white mb-1">Python Programmer</p>
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
