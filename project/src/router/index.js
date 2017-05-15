import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login';
import Register from '@/components/Login';

Vue.use(Router)

export var router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/users',
      component: Users,
      meta: {
        requiresAuth: true,
        requiresAdmin: true
      }
    }, {
      path: '/register',
      component: Register,
      meta: {
        checksAuth: true
      }
    }, {
      path: '/login',
      component: Login,
      meta: {
        checksAuth: true
      }
    }

  ]
});

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
		// this route requires auth, check if logged in
		// if not, redirect to login page.
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
		// this route requires auth, check if logged in
		// if not, redirect to login page.
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


