import MainView from '@/views/Main.vue';


export default [
	{
		path: '/player',
		component: MainView,
		children: [
			{
				path: '',
				redirect: '',
			}
		]
	}
];