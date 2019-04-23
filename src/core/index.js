import Vue from 'vue'
import axios from 'axios'
import apis from '@/api'
import { Loading, Notification } from 'element-ui'
import logger from '@/logger'


let _loadingInstance;

const api = {
	install(Vue){
		Vue.axios = Vue.prototype.$axios = axios;
		const { request, response } = axios.interceptors;

        //请求拦截
		request.use(function(request){
			const { token } = sessionStorage;
			if(!token){
				location.href = '/index.html';
				return;
			}

            //加载遮罩
			_loadingInstance = Loading.service({fullscreen: true});
			request.headers.Authorization = `JWT ${ token }`;
            return request;
		});
		
        // 响应拦截
        response.use(function(response){
            _loadingInstance.close();
            // Do something with response data
            // 获取session过期状态，并校验登出
			if(response.status == 401){
				Notification.error({
					title: '调用服务端接口异常',
					message: '会话超时，请重新登录'
				});
                window.location.href = '/login.html';
            }

            // 接口调用错误提示
            // if(response && response.data && !response.data.success){
            //     Notification.error({
            //         title: '服务端接口调用异常',
            //         message: response.data.message
            //     });
            // }

            return response;
        }, function(error){
			console.log(error);
            // 接口调用异常
            Notification.error({
                title: '调用服务端接口异常',
                message: error.response.status + '\n' + error.response.statusText
            });

            _loadingInstance.close();
            logger.error('请求失败：',error);
            // Do something with response error
            // 获取session过期状态，并校验登出
            // 访问未授权，跳转至登录页
            if(error.response.headers.sessionExpire == 'true' || error.response.status == 401){
                sessionStorage.removeItem('userInfo');
                window.location.href = '/login.html';
            }
		});
		
		
        Vue.api = Vue.prototype.$api = function(requestKey, requestData, urlData){
			// rest地址参数
			let rest = '';
			if(typeof(requestKey) == 'object'){
				({ key: requestKey, rest } = requestKey);
				rest = rest === undefined ? '' : `${rest}/`;
			}

            requestKey = requestKey.split('.');

            // 获取资源配置
            let apiMap = apis[requestKey[0]];
            let api = apiMap && apiMap[requestKey[1]];

            if(!api){
                logger.error('请求资源读取错误：', requestKey.join('.'));
            }

            // 适配请求参数
            var data = null;
            if (api.method == 'post') {
                data = requestData;
            } else {
                data = {
                    params: requestData
                };
            }
            
            //url地址上增加参数
            let apiUrl = api.url;
            if (urlData) {
                for (const k in urlData) {
                    apiUrl += (apiUrl.indexOf('?') < 0 ? '?' : '&') + k +'='+urlData[k];
                }
            }

            // 如果各个配置文件中没有配置host，读取默认host设置
            // let url = CONFIG.HOSTS[CONFIG.ENVIRONMENT] + apiUrl;
			let url = `/v1/${ apiUrl }/${ rest }`;

            return axios[api.method](url, data).then(res=>Object.assign(Object.create({ __raw__: res }), res.data));
        };
	}
};

Vue.use(api);