<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>

			<h2>{{ name }}</h2>
		</div>
		<router-view />
	</div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
import { METHODS } from 'http';

export default {
	data(){
		return {
			name: 123
		}
	},
	created(){
		window.axios = axios;
		window.$ = $;

		this.init();
	},
	methods: {
		init(){
			axios.get('/api/data.json');

			// $.get('/api/data.json');
		}
	}
}
</script>


<style lang="scss">
	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		padding: 30px;

		a {
			font-weight: bold;
			color: #2c3e50;

			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}

</style>
