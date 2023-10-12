import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import PageUnavailable from '../views/PageUnavailableView.vue'
import ConstructionPage from '../views/ConstructionView.vue'
// import AboutView from '../views/AboutView.vue'
// import ResumeView from '../views/ResumeView.vue'
// import ProjectsView from '../views/ProjectsView.vue'
// import TestimonialView from '../views/TestimonialsView.vue' 
// import ContactMeView from '../views/ContactMeView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: ConstructionPage //Change this back to MainView.vue once maintenance is complete
  },
  // {
  //   path: '/page-unavailable',
  //   name: 'pageUnavailable',
  //   component: PageUnavailable
  // },
  {
    path: '/',
    name: 'maintenance-page',
    component: ConstructionPage
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: AboutView
  // },
  // {
  //   path: '/resume',
  //   name: 'resume',
  //   component: ResumeView
  // },
  // {
  //   path: '/projects',
  //   name: 'projects',
  //   component: ProjectsView
  // },
  // {
  //   path: '/testimonials',
  //   name: 'testimonials',
  //   component: TestimonialView
  // },
  // {
  //   path: '/contactMe',
  //   name: 'contactMe',
  //   component: ContactMeView
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
