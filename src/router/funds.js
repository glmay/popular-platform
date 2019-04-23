import MainView from '@/views/Main.vue';


export default [
	{
		path: '/funds',
		component: MainView,
		children: [
			{
				path: '',
				redirect: '',
			}
		]
	}
];