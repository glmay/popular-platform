import Vue from 'vue';

const { api } = Vue;

/**
 * 登录接口
 * @param params 登录需要提交的数据
 * @return 返回登录校验后的结果
 */
export async function toLogin(params){
	return api('login.login', params);
}