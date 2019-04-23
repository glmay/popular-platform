import MainView from '@/views/Main.vue';
import PayAccountView from '@/views/operation/PayAccount.vue';


export default [
	{
		path: '/operation',
		component: MainView,
		children: [
			{
				path: '',
				redirect: 'payaccount/',
			},
			{
				name: 'payaccount',
				path: 'payaccount/',
				component: PayAccountView,
			}
		]
	}
];