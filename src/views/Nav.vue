<template>
	<nav class="main-menu-bar">
		<el-menu :default-active="menuActive" mode="horizontal" :router="true" class="aabbcc">
			
			<template v-for="(menu, i) of menus">
				<el-menu-item v-if="!menu.children" :index="menu.path" :key="i">
					<router-link :to="menu.path" slot="title" class="top-level-menu-item">
						<i class="el-icon-location"></i>
						<span>{{ menu.name }}</span>
					</router-link>
				</el-menu-item>

				<el-submenu v-if="menu.children" :index="menu.name" :key="i" :show-timeout="0" :hide-timeout="300" class="main-menu-bar-menu-item">
					<template slot="title">
						<i class="el-icon-location"></i>
						{{ menu.name }}
					</template>
					<el-menu-item :index="sub.path" v-for="sub of menu.children" :key="sub.path" class="main-menu-bar-submenu-item">
						<router-link :to="sub.path">
							<i class="el-icon-location"></i>
							{{ sub.name }}
						</router-link>
					</el-menu-item>
					
				</el-submenu>
			</template>
		</el-menu>
	</nav>
</template>

<script>
	import menus from '@/config/menus.js';

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
	.main-menu-bar{
		.el-menu{
			background-color: inherit;
		}
		.el-submenu .el-submenu__title{
			padding: 0;
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
	}
	.el-menu--horizontal{
		.el-menu{
			margin: 0;
			padding: 0;

			.main-menu-bar-submenu-item{
				a{
					text-decoration: none;
					background-color: inherit;
					color: #333;
					display: float;
					width: 100%;
					height: 100%;
				}
			}
			.main-menu-bar-submenu-item.is-active{
				background-color: #1c85d7;
				border-bottom: none;

				a{
					color: #fff;
				}
			}
			
			.el-menu-item:not(.is-disabled){
				transition: none;
			}
			.el-menu-item:not(.is-disabled):hover{
				background-color: #1c85d7;
				a{
					color: #fff;
				}
			}
			
		}
		/* .el-menu{
			margin: 0;
			padding: 0;
		} */
		/* .el-menu-item, 
		.el-submenu__title{
			padding: 0 10px;
		}
		.el-menu-item:not(.is-disabled){
			transition: none;
		}
		.el-menu-item:not(.is-disabled):hover{
			background-color: #1c85d7;
			color: #fff;
		}
		.el-menu-item:not(.is-disabled):focus{
			background-color: #1c85d7;
			color: #fff;
		}
		.el-menu .el-menu-item.is-active,
		.el-submenu.is-active .el-submenu__title{
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
		} */
	}
</style>
