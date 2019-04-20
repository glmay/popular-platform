import 'normalize.css';
import '@/styles/common.scss';
import 'element-ui/lib/theme-chalk/index.css';

import Vue from 'vue'
import {
	Header,
	Container,
	Footer,
	Aside,
	Main,
	Button
} from 'element-ui';

import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@/core'
import '@/logger'

Vue.use(Header);
Vue.use(Container);
Vue.use(Footer);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Button);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')