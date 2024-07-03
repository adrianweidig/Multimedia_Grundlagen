import { createRouter, createWebHistory } from 'vue-router';
import Aufgabe1e from '../views/aufgabe1e.vue';
import Aufgabe1f from '../views/aufgabe1f.vue';
import Aufgabe2 from '../views/aufgabe2.vue';
import Aufgabe3 from '../views/aufgabe3.vue';

const routes = [
    {
        path: '/',
        redirect: '/aufgabe1e'
    },
    {
        path: '/aufgabe1e',
        name: 'Aufgabe1e',
        component: Aufgabe1e
    },
    {
        path: '/aufgabe1f',
        name: 'Aufgabe1f',
        component: Aufgabe1f
    },
    {
        path: '/aufgabe2',
        name: 'Aufgabe2',
        component: Aufgabe2
    },
    {
        path: '/aufgabe3',
        name: 'Aufgabe3',
        component: Aufgabe3
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
