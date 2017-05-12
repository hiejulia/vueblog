import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hien from '@/components/Hien'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/hien',
      name: 'Hien',
      component: Hien
    }

  ]
})
