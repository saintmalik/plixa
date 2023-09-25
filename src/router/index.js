import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/homeView.vue'
import getStarted from '../components/getStarted.vue'
import payerDashboard from '../pages/payerDasboard/dashboard.vue'
import organizationDashboard from '../pages/orgainsationDashboard/dashboard.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/getStarted',
      name: 'getStarted',
      component: getStarted
    },
    {
      path: '/payerDashboard',
      name: 'payerDashboard',
      component: payerDashboard
    },
    {
      path: '/organizationDashboard',
      name: 'organizationDashboard',
      component: organizationDashboard
    },
   
    // {
    // path: '/about',
    // name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
