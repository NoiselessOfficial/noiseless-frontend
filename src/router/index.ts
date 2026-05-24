import { createRouter, createWebHistory } from 'vue-router'
import Donation from '@/pages/Donation.vue'
import Home from '@/pages/Home.vue'
import Authentication from '@/pages/Authentication.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: Home },
        { path: '/donate', component: Donation },
        { path: '/auth', component: Authentication }
    ]
})

export default router
