// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

var data = {
  items: [{ text: 'Bananas', checked: true }, { text: 'Apples', checked: false }],
  title: 'My Shopping List'
};
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


//add item component
Vue.component('add-item-component', {
  template: '#add-item-template',
  data: function () {
    return {
      newItem: ''
    }
  }
});
//item component
Vue.component('item-component', {
  template: '#item-template',
  props: ['item']
});
//items component
Vue.component('items-component', {
  template: '#items-template',
  props: ['items']
});
//change title component
Vue.component('change-title-component', {
  template: '#change-title-template',
  props: ['value'],
  methods: {
    onInput: function (event) {
      this.$emit('input', event.target.value)
    }
  }
});

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
        this.newItem = "";
      }
    }
  }
});