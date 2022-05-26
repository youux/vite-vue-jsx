import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'page',
    component: () => import('../views/page1')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
