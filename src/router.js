import Vue from 'vue'
import Router from 'vue-router'
import About from '@/views/About'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('./views/Todos.vue')
        },
        {
            path: '/about',
            component: About
        }
    ]


})