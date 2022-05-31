import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/page1',
    name: 'page1',
    component: () => import('../views/page1')
  },
  {
    path: '/page2',
    name: 'page2',
    component: () => import('../views/page2/index.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
