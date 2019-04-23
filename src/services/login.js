// 导入接口核心模块
import { get, post, put, del, patch } from "@/core";

/**
 * 登录接口
 * @param Object params 登录需要提交的数据
 * @return 返回登录校验后的结果
 */
export async function toLogin(params){
	return post('login.login', params);
}