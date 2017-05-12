// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/* eslint-disable no-new */
Vue.component('story', {
  template: '#story-template',
  props: ['story']
})

Vue.filter('famous', function (x) {
  return x.filter(function (item) {
    return item.upvotes > 20
  })
})

new Vue({
  el: '#app',
  router,
  data: {
    message: 'Greetings your Majesty!',
    show: false
  },
  template: '<App/>',
  components: { App }
})
