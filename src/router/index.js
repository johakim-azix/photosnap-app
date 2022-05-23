import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '../pages/HomePage.vue'
// import homeFragment from "@/components/fragments/homeFragment";

const routes = [
    {
        path: '/',
        name: 'homePage',
        component: HomePage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
