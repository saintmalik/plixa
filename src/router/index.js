import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/homeView.vue'
import getStarted from '../components/getStarted.vue'
import payerDashboard from '../pages/payerDasboard/dashboard.vue'
import organizationDashboard from '../pages/orgainsationDashboard/dashboard.vue'
import PaymentOne from '../components/payments/PaymentOne.vue'
import FullPayment from '../components/payments/FullPayment.vue'
import PartPayment from '../components/payments/PartPayment.vue'
import FullPaymentTrans from '../components/payments/FullPaymentTrans.vue'
import PartPaymentTrans from '../components/payments/PartPaymentTrans.vue'
import PaymentSucOne from '../components/payments/PaymentSucOne.vue'
import PaymentSucTwo from '../components/payments/PaymentSucTwo.vue'


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
    {
      path: '/PaymentOne',
      name: 'PaymentOne',
      component: PaymentOne
    },
    {
      path: '/FullPayment',
      name: 'FullPayment',
      component: FullPayment
    },
    {
      path: '/PartPayment',
      name: 'PartPayment',
      component: PartPayment
    },
    {
      path: '/FullPaymentTrans',
      name: 'FullPaymentTrans',
      component: FullPaymentTrans
    },
    {
      path: '/PartPaymentTrans',
      name: 'PartPaymentTrans',
      component: PartPaymentTrans
    },
    {
      path: '/PaymentSucOne',
      name: 'PaymentSucOne',
      component: PaymentSucOne
    },
    {
      path: '/PaymentSucTwo',
      name: 'PaymentSucTwo',
      component: PaymentSucTwo
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
