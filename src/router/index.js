// filepath: c:\Users\Bisrat\Desktop\Port-folio\my-vue-project\src\router\index.js
import { createRouter, createWebHistory } from 'vue-router';
import Portfolio from '../components/portfolio.vue';
import AboutMe from '../components/aboutme.vue'; // Change to match the actual file name
import Projects from '../components/projects.vue';
import Certificates from '../components/certificates.vue';
import Contact from '../views/Contact.vue';
import Frontend from "../views/Frontend.vue";
import Backend from "../views/Backend.vue";
import Mobile from "../views/Mobile.vue";
import UIUX from "../views/UIUX.vue";

const routes = [
  { path: '/', component: Portfolio },
  { path: '/aboutme', component: AboutMe },
  { path: '/projects', component: Projects },
  { path: '/certificates', component: Certificates },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: "/frontend", name: "Frontend", component: Frontend },
  { path: "/backend", name: "Backend", component: Backend },
  { path: "/mobile", name: "Mobile", component: Mobile },
  { path: "/uiux", name: "UIUX", component: UIUX },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;