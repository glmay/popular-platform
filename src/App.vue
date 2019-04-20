<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	import axios from 'axios'
	import qs from 'querystring'
	import $ from 'jquery'
	export default {
		created() {
			this.$api('login.login', qs.stringify({
				username: 'disanfang4',
				password: '123456xyz',
				code: '123'
			}));
			// axios.defaults.headers.Authorization =
			// 	'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyMjAxMzAyNiwidXNlcm5hbWUiOiJkaXNhbmZhbmc0IiwiZXhwIjoxNTU1NzU2MTI3LCJvcmlnX2lhdCI6MTU1NTcyNzMyN30.xEKNANCY2rf5XDZr7zaZcOqSC30e3E0x9bxPeKvejmo'
			// axios.get('/v1/level/'
			// 	/* , {
			// 				headers: {
			// 					Authorization: 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyMjAxMzAyNiwidXNlcm5hbWUiOiJkaXNhbmZhbmc0IiwiZXhwIjoxNTU1NzU0NTk5LCJvcmlnX2lhdCI6MTU1NTcyNTc5OX0.MCx1R5W_HNxN7yOH82aCDOh-zefT1WnhIsWe07unaQ0'
			// 				}
			// 			} */
			// );

			// axios.post('/v1/login/', qs.stringify({
			// 	username: 'disanfang4',
			// 	password: '123456xyz',
			// 	code: '11',
			// }));

			/* $.ajax({
				url: '/api/login/',
				data: {
					username: 'disanfang4',
					password: '123456xyz',
					code: '11',
				},
				type: 'post',
				dataType: 'json',
			}); */
		}
	}
</script>


<style lang="scss">/* 
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
	} */
</style>