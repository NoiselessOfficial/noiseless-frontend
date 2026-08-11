import { createRouter, createWebHistory } from 'vue-router'
import { Donation, Home, Documentation } from '@/app/pages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/donate', component: Donation },
    { path: '/docs', component: Documentation }
  ]
})

export default router
