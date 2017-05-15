import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  
    { path: '/editor/:id', name: 'edit-article', component: Editor },
    { path: '/article/:id', name: 'article', component: Article },
    { path: '/profile/:username', name: 'user', component: Profile },
    { path: '/article/:username/favorites', name: 'favorites', component: Favorites },
    { path: '*', redirect: { name: 'home' } },

  ]
})
