<template>
	<el-container class="wrapper-container">
		<el-header height="60px" class="top-header">
            <el-container style="height: 100%;">
                <el-aside class="logo-container" :width="leftWidth">
                    <img class="logo" src="/images/logo.png" alt="大众棋牌-logo">
                </el-aside>
                <el-main>
                    <Nav></Nav>
                </el-main>
            </el-container>
		</el-header>
		<el-container>
			<el-aside :width="leftWidth">
                <LeftNav></LeftNav>
            </el-aside>
			<el-container class="main-container">
                <el-header height="46px">
                    <el-button type="text" class="toggle-side-panel el-icon-menu"></el-button>
                    <el-breadcrumb class="breadcrumb-bar" separator="/">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                    </el-breadcrumb>
                </el-header>
				<el-main>
                    <router-view></router-view>
                </el-main>
				<el-footer>Footer</el-footer>
			</el-container>
		</el-container>
	</el-container>
</template>

<script>
	// @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import LeftNav from '@/views/LeftNav.vue'
    import Nav from '@/views/Nav.vue'

	export default {
        name: 'home',
        data(){
            return {
                leftWidth: '166px',
            };
        },
		components: {
            HelloWorld,
            LeftNav,
            Nav,
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

<style lang="scss">
    html,body{
        margin: 0;
    }
	html,
	body,
	#app,
	.wrapper-container{
		height: 100%;
	}
    .wrapper-container{
        .el-header, .el-footer {
            background-color: #B3C0D1;
            color: #333;
            padding: 0;
        }
        .el-main {
            color: #333;
            padding: 0;
        }

        .el-menu.el-menu--horizontal{
            border: none;
        }

		// 页面顶部header
		.top-header{
			background-color: #2095f2;
		}
    }

	.el-aside {
		color: #333;
	}

	.logo-container{
        position: relative;
        
        .logo{
            width: 145px;
            height: 43px;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
        }

	}

    .main-container{
        padding: 0 15px;
        .el-footer{
            margin: 0 -15px;
        }
    }
    .toggle-side-panel{

    }
    .breadcrumb-bar{
        display: inline-block;
    }

</style>
