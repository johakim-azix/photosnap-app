import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '../pages/HomePage.vue'
const routes = [
    {
        path: '/',
        name: 'homePage',
        component: HomePage
    },
    {
        path: "/stories",
        name: "stories",
        component: ()=> import("../pages/StoriesPage")
    },
    {
        path: "/features",
        name: "features",
        component: ()=> import("../pages/FeaturePage")
    },
    {
        path: "/pricing",
        name: "pricing",
        component: ()=> import("../pages/PricingPage")
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
