import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Garage from '../views/Garage.vue'
import Tracks from '../views/Tracks.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/garage',
      name: 'garage',
      component: Garage
    },
    {
      path: '/tracks',
      name: 'tracks',
      component: Tracks
    }
  ]
})

export default router