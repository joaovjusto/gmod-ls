import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/generate-json',
    name: 'FormPage',
    // @ts-ignore
    component: () => import(/* webpackChunkName: "json_generator" */ '@/views/json_generator.vue'),
  },
  {
    path: '*',
    name: 'RedirectAll',
    beforeEnter: (to, from, next) => {
      if (!from?.name) {
        next('/');
      }
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
