import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';
import StartView from '@/views/StartView.vue';

store.dispatch('auth/autologin');

const authGuard = (to, from, next) => {
  const st = store.getters['auth/isAuth'];
  if (st) {
    next();
  } else {
    next('/');
  }
};

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
      beforeEnter: authGuard,
      children: [
        {
          path: '/schedule',
          name: 'Schedule',
          component: () => import('@/components/Schedule.vue'),
        },
        {
          path: '/profile',
          name: 'Profile',
          component: () => import('@/components/Profile.vue'),
        },
        {
          path: '/pass',
          name: 'Pass',
          component: () => import('@/components/Pass.vue'),
        },
        {
          path: '/chat',
          name: 'Chat',
          component: () => import('@/components/Chat.vue'),
        },
      ],
    },
  ],
});
