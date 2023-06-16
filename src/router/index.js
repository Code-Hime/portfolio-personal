import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: () => import(/* webpackChunkName: "about" */ '../views/About.vue') },
    { path: '/resume', name: 'Resume', component: () => import(/* webpackChunkName: "resume" */ '../views/Resume.vue') },
    { path: '/portfolio', name: 'Portfolio', component: () => import(/* webpackChunkName: "portfolio" */ '../views/Portfolio.vue') },
    { path: '/contact', name: 'Contact', component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue') }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router