// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
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
var data = {
  items: [{ text: 'Bananas', checked: true }, { text: 'Apples', checked: false }],
  title: 'Shopping App',
  newItem: ''
};

new Vue({
  el: '#app',
  data: data,
  methods: {
    addItem: function () {
      var text;

      text = this.newItem.trim();
      if (text) {
        this.items.push({
          text: text,
          checked: false
        });
        this.newItem = '';
      }
    }
  }
});

var ItemsComponent = Vue.extend({
  data: function() {
    return data;

  },
  template : {
    template: '<ul>' +
  '           <li v-for="item in items" :class="{ \'removed\': item.checked }">' +
  '             <div class="checkbox">' +
  '               <label>' +
  '                 <input type="checkbox" v-model="item.checked"> {{ item.text }}' +
  '               </label>' +
  '             </div>' +
  '           </li>' +
  '         </ul>'
  }
});

Vue.component('items-component',ItemsComponent);
Vue.component('change-title-component', ChangeTitleComponent);
Vue.component('add-item-component', AddItemComponent); 