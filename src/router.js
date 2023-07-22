import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue'
import AppProjects from './pages/AppProjects.vue'
import NotFound from './pages/NotFound.vue'
import ShowProject from './pages/ShowProject.vue'
import ContactUs from './pages/ContactUs.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/projects',
            name: 'projects',
            component: AppProjects
        },
        {
            path: '/projects/:id',
            name: 'show-project',
            component: ShowProject
        },
        {
            path: '/contact-us',
            name: 'contact-us',
            component: ContactUs
        },
        {
            path: '/not-found',
            name: 'not-found',
            component: NotFound
        },
    ]
});


export { router }