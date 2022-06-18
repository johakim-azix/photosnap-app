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
        component: ()=> require("../pages/StoriesPage")
    },
    {
        path: "/features",
        name: "features",
        component: ()=> require("../pages/FeaturePage")
    },
    {
        path: "/pricing",
        name: "pricing",
        component: ()=> require("../pages/PricingPage")
    }
]

const router = createRouter({
    history: createWebHistory('/photosnap-app/'),
    routes,
})

export default router
