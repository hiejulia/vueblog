// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//import plugin 

/* eslint-disable no-new */
// Vue.component('story', {
//   template: '#story-template',
//   props: ['story']
// })

// Vue.filter('famous', function (x) {
//   return x.filter(function (item) {
//     return item.upvotes > 20
//   })
// })
//use plugin > Vue.use(tenplugin)

new Vue({
  el: '#container',
  components: {App}
})

