// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Router from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import moment from 'moment';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import VueAuth from '@websanova/vue-auth'
import VeeValidate from 'vee-validate'
import Resource from 'vue-resource';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//auth
import auth from './auth/auth'
auth.checkAuth();
//store
// import store from './store';

Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);

Vue.use(VeeValidate);
Vue.use(Resource);
Vue.use(Router);




//filter for date
Vue.filter('date', date => moment(date).format('MMMM DD, YYYY'));

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
  // store
})
