// 导入接口核心模块
import { get, post, put, del, patch } from "@/core";


export async function getList(){
	return get('operation.payaccount', {
		page_size: 100,
		page_num: 1,
	});
}