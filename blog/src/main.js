// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import App1 from './App1'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.component('story', {
  template: '#story-template',
  props: ['story'],
  methods: {},
  computed: {

  }
})

new Vue({
  el: '#app',
  router,
  data: {
    niceStyle:
    {
      color: 'red',
      fontSize: '50px'
    }
  },
  template: '<App/>',
  components: { App }
})

new Vue({
  el: '#container',
  router,
  template: '<App1/>',
  components: { App1 }
})
