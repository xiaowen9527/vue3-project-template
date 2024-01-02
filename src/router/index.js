import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
    },
    // 在这里添加更多的路由
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
