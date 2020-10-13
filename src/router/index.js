import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Order List',
    component: () => import('../views/OrderListPage.vue'),
    meta: { layout: 'EmptyLayuot' },
  },
  {
    path: '/order',
    name: 'Order Page',
    component: () => import('../views/OrderPage.vue'),
    meta: { layout: 'EmptyLayuot' },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
