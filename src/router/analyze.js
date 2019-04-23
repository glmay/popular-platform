import MainView from '@/views/Main.vue';


export default [
	{
		path: '/analyze',
		component: MainView,
		children: [
			{
				path: '',
				redirect: '',
			}
		]
	}
];