import Vue from 'vue'
import Vuex from 'vuex'

import { pagination } from '@/config/global.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		userInfo: {},
		authorization: '',
		pagination,
	},
	getters: {
		userInfo({ userInfo }, getters){
			return userInfo;
		},
		auth({ authorization }){
			return authorization;
		},
		pagination({ pagination }){
			return pagination;
		},
	},
	mutations: {
		auth(state, auth){
			state.authorization = auth;
		}
	},
	actions: {

	}
})