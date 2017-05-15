// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import VueAxios from 'vue-axios';
import moment from 'moment';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import VueAuth from '@websanova/vue-auth'
import VeeValidate from 'vee-validate'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//auth
import auth from './auth/auth'

//store
// import store from './store';

Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);
// Vue.use(VueAuth, {
//     auth: AuthBearer,
//     http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
//     router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js')
    
// });
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
