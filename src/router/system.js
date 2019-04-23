import MainView from '@/views/Main.vue';


export default [
	{
		path: '/system',
		component: MainView,
		children: [
			{
				path: '',
				redirect: '',
			}
		]
	}
];