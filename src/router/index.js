import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Hello from '@/components/Hello';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});
