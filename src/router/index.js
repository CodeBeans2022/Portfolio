import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import PageUnavailable from '../views/PageUnavailableView.vue'
import ConstructionPage from '../views/ConstructionView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainView //Change this back to MainView.vue once maintenance is complete
  },
  {
    path: '/page-unavailable',
    name: 'pageUnavailable',
    component: PageUnavailable
  }
  // {
  //   path: '/',
  //   name: 'maintenance-page',
  //   component: ConstructionPage
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
