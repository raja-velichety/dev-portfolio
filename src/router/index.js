import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue';
import HomeView from '../views/HomeView.vue';
import ExperienceView from '../views/ExperienceView.vue';
import ProjectsView from '../views/ProjectsView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/experience',
    name: 'experience',
    component: ExperienceView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
