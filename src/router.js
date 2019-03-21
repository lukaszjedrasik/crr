import Vue from 'vue';
import Router from 'vue-router';
import store from './store';
import StartView from '@/views/StartView.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'StartView',
      component: StartView,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('@/components/Dashboard.vue'),
      beforeEnter(to, from, next) {
        if (store.getters['auth/isAuth']) {
          next();
        } else {
          next({ name: 'StartView' });
        }
      },
      children: [
        {
          path: '/shedule',
          name: 'Shedule',
          component: () => import('@/components/Shedule.vue'),
        },
        {
          path: '/profile',
          name: 'Profile',
          component: () => import('@/components/Profile.vue'),
        },
      ],
    },
  ],
});
