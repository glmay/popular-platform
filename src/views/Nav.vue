<template>
	<el-menu :default-active="menuActive" class="el-menu-demo" mode="horizontal" :router="true">
		
		<template v-for="(menu, i) of menus">
			<el-menu-item v-if="!menu.children" :index="menu.path" :key="i">
				<router-link :to="menu.path" slot="title" class="top-level-menu-item">
					<i class="el-icon-location"></i>
					<span>{{ menu.name }}</span>
				</router-link>
			</el-menu-item>

			<el-submenu v-if="menu.children" :index="menu.name" :key="i" show-timeout="1" hide-timeout="1">
				<template slot="title">
					<i class="el-icon-location"></i>
					{{ menu.name }}
				</template>
				<el-menu-item :index="sub.path" v-for="sub of menu.children" :key="sub.path">
					<router-link :to="sub.path">
						<i class="el-icon-location"></i>
						{{ sub.name }}
					</router-link>
				</el-menu-item>
				
			</el-submenu>
		</template>
	</el-menu>
</template>

<script>
	const menus = (()=>{
		return [{
			name: '首页',
			path: '/index.html',
		},{
			name: '角色',
			path: 'player',
			children: [{
				name: '玩家管理',
				path: 'player',
			},{
				name: '代理管理',
				path: 'agents',
			},{
				name: '层级设置',
				path: 'level',
			},{
				name: '在线玩家',
				path: 'onlineplayer',
			},{
				name: '玩家检测',
				path: 'playercheck',
			},{
				name: '玩家咨询',
				path: 'playeradvisory',
			},{
				name: '模拟账号',
				path: 'mockaccount',
			},]
		},{
			name: '运营',
			path: 'operation',
			children: [{
				name: '公司入款账户',
				path: 'payaccount',
			},{
				name: '线上支付账户',
				path: 'onlinepayaccount',
			},{
				name: '返水设置',
				path: 'rakeback',
			},{
				name: '返佣设置',
				path: 'rebate',
			},{
				name: '域名检测',
				path: 'domaininspect',
			},{
				name: '活动大厅',
				path: 'activitylobby',
			},{
				name: '全民推广',
				path: 'recommendedbonus',
			},]
		}].map(v=>{
			const { path, children } = v;
			if(children){
				for (const sub of children) {
					sub.path = `/${ path }/${ sub.path }/`;
				}
			}

			return v;
		});
	})();
	
    export default {
		data(){
			return {
				menus
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
			.el-submenu__icon-arrow{
				display: none;
			}
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

	.el-menu--horizontal{
		a{
			text-decoration: none;
			background-color: inherit;
			color: inherit;
			display: inline-block;
			width: 100%;
			height: 100%;
		}
		.el-menu-item, .el-submenu__title{
			padding: 0 10px;
		}
		.el-menu-item:not(.is-disabled){
			// color: #333;
			transition: none;
		}
		.el-menu-item:not(.is-disabled):hover{
				background-color: #1c85d7;
				color: #fff;
			// }
		}
		.el-menu-item:not(.is-disabled):focus{
			background-color: #1c85d7;
			color: #fff;
		}
		>.el-menu-item.is-active,
		>.el-submenu.is-active .el-submenu__title{
			background-color: #1c85d7;
			color: #fff;
			border-bottom: none;
		}
		>.el-submenu:hover{
			.el-submenu__title{
				background-color: #1c85d7;
				color: #fff;
			}
		}
		>.el-submenu:focus{
			.el-submenu__title{
				color: #fff;
			}
		}
	}
</style>
