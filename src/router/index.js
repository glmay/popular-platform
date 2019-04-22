import Vue from 'vue'
import Router from 'vue-router'
import MainView from '@/views/Main.vue'
import HomeView from '@/views/Home.vue'
import operation from '@/router/operation.js'

console.log(operation);

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: MainView,
			redirect: '/index.html',
		},
		{
			path: '/login.html',
			name: 'login',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ '@/views/Login.vue')
		},
		{
			path: '/index.html',
			component: MainView,
			children: [
				{
					path: '/',
					component: HomeView,
				}
			]
		},
		{
			path: '/:module/',
			component: MainView,
			children: [
				...operation,
			]
		},
	]
})