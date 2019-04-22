<template>
	<section>
		<el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="false">
			<el-menu-item index="1">
				<i class="el-icon-location"></i>
				<span slot="title">导航一</span>
			</el-menu-item>
			<el-menu-item index="2">
				<i class="el-icon-menu"></i>
				<span slot="title">导航二</span>
			</el-menu-item>
			<el-menu-item index="3">
				<i class="el-icon-setting"></i>
				<span slot="title">导航三</span>
			</el-menu-item>
		</el-menu>
	</section>
</template>


<script>
	export default {

	}

</script>

<style lang="scss">
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        // width: 200px;
        // min-height: 400px;
    }
</style>
