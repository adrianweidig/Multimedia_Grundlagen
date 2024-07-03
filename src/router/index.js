import { createRouter, createWebHistory } from 'vue-router';
import Aufgabe1 from '../views/aufgabe1.vue';
import Aufgabe2 from '../views/aufgabe2.vue';
import Aufgabe3 from '../views/aufgabe3.vue';

const routes = [
    {
        path: '/',
        redirect: '/aufgabe1'
    },
    {
        path: '/aufgabe1',
        name: 'Aufgabe1',
        component: Aufgabe1
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
