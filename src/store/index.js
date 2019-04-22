import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		userInfo: {},
		authorization: '',
	},
	getters: {
		userInfo({ userInfo }, getters){
			return userInfo;
		},
		auth({ authorization }){
			return authorization;
		}
	},
	mutations: {
		auth(state, auth){
			state.authorization = auth;
		}
	},
	actions: {

	}
})