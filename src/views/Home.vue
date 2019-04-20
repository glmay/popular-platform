<template>
	<el-container class="main-container">
		<el-header>
			<figure class="logo-container">
				<img class="logo" src="/images/logo.png" alt="大众棋牌-logo">
			</figure>
		</el-header>
		<el-container>
			<el-aside width="200px">Aside</el-aside>
			<el-container>
				<el-main>Main</el-main>
				<el-footer>Footer</el-footer>
			</el-container>
		</el-container>
	</el-container>
</template>

<script>
	// @ is an alias to /src
	import HelloWorld from '@/components/HelloWorld.vue'

	export default {
		name: 'home',
		components: {
			HelloWorld
		},
		created(){
			this.$logger.log('log...');
			this.$logger.error('error...');
			this.$logger.debug('debug...');
			this.$logger.info('info...');
			this.$logger.warn('warn...');
			this.$logger.error('error...');
		}
	}

	console.error(process,process.env,process.prod);

</script>

<style>
	html,
	body,
	#app,
	.main-container{
		height: 100%;
	}
	.el-header,
	.el-footer {
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		line-height: 60px;
	}

	.el-aside {
		background-color: #D3DCE6;
		color: #333;
		text-align: center;
		line-height: 200px;
	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		line-height: 160px;
	}

	body>.el-container {
		margin-bottom: 40px;
	}

	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}

	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}

	.logo{
		width: 145px;
		height: 43px;
	}

	figure{
		margin: 0;
		padding: 0;
	}
	.logo-container{
		text-align: left;
	}

</style>
