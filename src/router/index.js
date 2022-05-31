import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/page1',
    name: 'page1',
    component: () => import('../views/page1')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
