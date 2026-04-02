import { createRouter, createWebHistory } from 'vue-router'
import Donation from '@/pages/Donation.vue'
import Home from '@/pages/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', component: Home},
    {path: '/donate', component: Donation}
  ]
})

export default router
