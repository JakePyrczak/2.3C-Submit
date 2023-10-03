import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Projects',
      name: 'projects',
      component: () => import('../views/Projects.vue')
    },    {
      path: '/crud',
      name: 'CRUD',
      component: () => import('../views/CrudPage.vue')
    },
  ]
})
// <!-- 11 - routers -->
// <!-- We use out router link to route to other pages from the main app -->
// <!-- this links to the main app -->

export default router
