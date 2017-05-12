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
})

//first custom filter 
Vue.filter('addspace', (value) => {
  return value + ' ';
})

//fiter to uppercase
Vue.filter('uppercase', (value) => {
  return value.toUpperCase();
})

//css transition fade name
Vue.transition('fade', {
  css: false,
  enter: function (el, done) {
    // element is already inserted into the DOM
    // call done when animation finishes.
    $(el)
      .css('opacity', 0)
      .animate({ opacity: 1 }, 1000, done)
  },
  enterCancelled: function (el) {
    $(el).stop()
  },
  leave: function (el, done) {
    // same as enter
    $(el).animate({ opacity: 0 }, 1000, done)
  },
  leaveCancelled: function (el) {
    $(el).stop()
  }
})
