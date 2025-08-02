import { createRouter, createWebHistory } from 'vue-router';
// import Portfolio from '../components/portfolio.vue';
import AboutMe from '../components/aboutme.vue'; 
import Projects from '../components/projects.vue';
// import Certificates from '../components/certificates.vue';
import EducationExperience from '../components/EducationExperience.vue';
import Contact from '../views/Contact.vue';

const routes = [
  // { path: '/', component: Portfolio },
  { path: '/', component: AboutMe },
  { path: '/projects', component: Projects },
  // { path: '/certificates', component: Certificates },
  { path: '/educexp', component: EducationExperience },
  { path: '/contact', name: 'Contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;