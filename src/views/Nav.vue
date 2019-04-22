<template>
	<el-menu :default-active="menuActive" class="el-menu-demo" mode="horizontal" :router="true">
		
		<template v-for="(menu, i) of menus">
			<el-menu-item v-if="!menu.children" :index="menu.path" :key="i">
				<i class="el-icon-location"></i>
				<span slot="title">{{ menu.name }}</span>
			</el-menu-item>

			<el-submenu v-if="menu.children" :index="menu.name" :key="i">
				<template slot="title">
					<i class="el-icon-location"></i>
					{{ menu.name }}
				</template>
				<el-menu-item v-for="sub of menu.children" :index="sub.path" :key="sub.path">
					<i class="el-icon-location"></i>
					{{ sub.name }}
				</el-menu-item>
			</el-submenu>
		</template>
	</el-menu>
</template>

<script>
    export default {
		data(){
			return {
				menus: [{
					name: '首页',
					path: '/index.html',
				},{
					name: '角色',
					path: 'player',
					children: [{
						name: '玩家管理',
						path: '/player.html',
					},{
						name: '代理管理',
						path: '/agents.html',
					},{
						name: '层级设置',
						path: '/level.html',
					},{
						name: '在线玩家',
						path: '/onlineplayer.html',
					},{
						name: '玩家检测',
						path: '/playercheck.html',
					},{
						name: '玩家咨询',
						path: '/playeradvisory.html',
					},{
						name: '模拟账号',
						path: '/mockaccount.html',
					},]
				},{
					name: '运营',
					path: 'operation',
					children: [{
						name: '公司入款账户',
						path: '/operation/payaccount',
					},{
						name: '线上支付账户',
						path: '/onlinepayaccount.html',
					},{
						name: '返水设置',
						path: '/rakeback.html',
					},{
						name: '返佣设置',
						path: '/rebate.html',
					},{
						name: '域名检测',
						path: '/domaininspect.html',
					},{
						name: '活动大厅',
						path: '/activitylobby.html',
					},{
						name: '全民推广',
						path: '/recommendedbonus.html',
					},]
				}]
			};
		},
		computed: {
			menuActive(){
				return this.$route.path;
			}
		}
	}
</script>

<style lang="scss">
	.el-menu{
		background-color: inherit;
	}
	.el-menu--horizontal{
		>.el-menu-item{
			color: #fff;
		}
	
		>.el-submenu{
			.el-submenu__title{
				color: #fff;
			}
		}
		>.el-submenu:hover{
			.el-submenu__title{
				//  color: #fff;
			 }
		}
	}
</style>
