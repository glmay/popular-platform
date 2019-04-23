import MainView from '@/views/Main.vue';


export default [
	{
		path: '/content',
		component: MainView,
		children: [
			{
				path: '',
				redirect: '',
			}
		]
	}
];