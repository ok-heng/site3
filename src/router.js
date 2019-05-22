import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import Home from './views/Home.vue';

const Category = () => import('./views/category');
const Detail = () => import('./views/detail');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          redirect: '/home',
        },
        {
          path: '/home',
          component: Home,
        },
        {
          path: '/category',
          //name: 'Category',
          component: Category,
        },
        {
          path: '/detail',
          //name: 'Detail',
          component: Detail
        }
      ]
    }
  ]
});
