import Vue from 'vue'
import Router from 'vue-router'
import MainView from '@/views/Main.vue'
import HomeView from '@/views/Home.vue'
import player from '@/router/player.js'
import funds from '@/router/funds.js'
import operation from '@/router/operation.js'
import analyze from '@/router/analyze.js'
import statistics from '@/router/statistics.js'
import content from '@/router/content.js'
import system from '@/router/system.js'

import NotFoundView from '@/views/common/404.vue'


Vue.use(Router);

const routes = [
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
		path: '*',
		component: NotFoundView,
	},
];

routes.push(
	...player,
	...funds,
	...operation,
	...analyze,
	...statistics,
	...content,
	...system,
);

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

router.beforeEach((to, from, next)=>{
	if(!sessionStorage.token){
		if(to.path != '/login.html'){
			next('/login.html');
			return;
		}
	}

	next();
});

export default router;