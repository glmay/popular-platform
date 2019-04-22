import PayAccountView from '@/views/operation/PayAccount.vue';

export default [
	{
		path: '/operation',
		redirect: '/operation/payaccount',
	},
	{
		name: 'payaccount',
		path: '/operation/payaccount',
		component: PayAccountView,
	}
];