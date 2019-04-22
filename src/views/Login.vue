<template>
	<section>
		<el-card class="login-card">
			<el-form ref="form" :model="login">
				<el-form-item label="登录" class="login-title"></el-form-item>
				<el-form-item>
					<el-input v-model="login.username" placeholder="登录" prefix-icon="el-icon-date2"></el-input>
				</el-form-item>
				<el-form-item>
					<el-input v-model="login.password" type="password" placeholder="密码" prefix-icon="el-icon-date2"></el-input>
				</el-form-item>
				<el-form-item>
					<el-input v-model="login.code" placeholder="请输入身份验证码" prefix-icon="el-icon-date2"></el-input>
				</el-form-item>
				<el-form-item class="login-button-group">
					<el-button type="primary" @click="toLogin">立即登录</el-button>
				</el-form-item>
			</el-form>
		</el-card>
	</section>
</template>


<script>
	import { toLogin } from '@/utils/login'

	export default {
		data(){
			return {
				login: {
					username: 'disanfang4',
					password: '123456xyz',
					code: '123456'
				}
			}
		},
		methods: {
			async toLogin(){
				// const { token, __raw__ } = await this.$api('login.login', this.login);
				// const { token } = await this.$api('login.login', this.login);
				const { token } = await toLogin(this.login);
				sessionStorage.token = token;

				// 跳转到首页
				this.$router.push('/');
			}
		}
	}
</script>

<style lang="scss" scoped>
	section{
		height: 100%;
		background-image: url(/images/login-bg.jpg);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		position: relative;
	}
	.login-card{
		width: 480px;
		// height: 200px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.login-title{
		label{
			font-size: 24px;
		}
		margin-bottom: 0;
	}
	.login-button-group{
		text-align: center;

		.el-button{
			width: 278px;
			height: 46px;
			font-size: 18px;
		}
	}
</style>
