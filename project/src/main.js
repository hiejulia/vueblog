import Vue from 'vue'
import App from './App'
// import router from './router'
import Router from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import moment from 'moment';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import VueAuth from '@websanova/vue-auth'
import VeeValidate from 'vee-validate'
// import Resource from 'vue-resource';

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
// Vue.use(Resource);
Vue.use(Router);

// Routes
export var router = new Router({
	mode: 'history',
	routes: [
		{ path: '/', component: Hello },
		// { path: '/users', component: Users, meta: { requiresAuth: true, requiresAdmin: true } },
		{ path: '/register', component: Register, meta: { checksAuth: true } },
		{ path: '/login', component: Login, meta: { checksAuth: true } }
	]
});

Vue.http.options.root = 'http://localhost:3000/api';
// console.log(auth.getAuthHeader());
Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');
Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';

//Protect authenticated routes with Route Meta tags.
router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {

		if (!auth.user.authenticated) {
			next({
				path: '/login',
				query: { redirect: to.fullPath }
			})
		} else {
			next()
		}
	}
	if (to.matched.some(record => record.meta.requiresAdmin)) {
		console.log(auth.user);
		
		if (auth.user.role == 'admin') {
			next()
		} else {
			next({
				path: '/',
				query: { redirect: to.fullPath }
			})
		}
	}
	if (to.matched.some(record => record.meta.checksAuth)) {
	
		if (auth.user.authenticated) {
			next({
				path: '/',
				query: { redirect: to.fullPath }
			})
		} else {
			next()
		}
	} else {
		next() // make sure to always call next()!
	}
})



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
