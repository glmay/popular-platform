import MainView from '@/views/Main.vue';


export default [
	{
		path: '/statistics',
		component: MainView,
		children: [
			{
				path: '',
				redirect: '',
			}
		]
	}
];