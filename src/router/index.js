import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import Register from '../views/Register.vue'
import Index from '../views/index.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'index',
            component: LoginView
        },
        {
            path: '/register',
            name: "register",
            component: Register
        },
        {
            path: '/login',
            name: "login",
            component: LoginView
        },
    ],
})
export default router