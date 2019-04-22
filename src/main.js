// import 'normalize.css';
import '@/styles/common.scss';
import 'element-ui/lib/theme-chalk/index.css';

import Vue from 'vue'
import {
	Header,
	Container,
	Footer,
	Aside,
	Main,
    Button,
    Menu,
    Submenu,
    MenuItemGroup,
    MenuItem,
    Breadcrumb,
    BreadcrumbItem,
    Row,
    Col,
    Card,
    Form,
    FormItem,
    Input,
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
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.use(MenuItem);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);


Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')