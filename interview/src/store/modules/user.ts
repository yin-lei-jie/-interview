import { login } from '@/services'
import { ActionContext } from 'vuex'

const state = {
    isLogin: false,
    openid: ''
}

const getters = {

}

const mutations = {
    updateLogin(state: any, payload: any) {
        state.islogin = payload.isLogin;
        state.openid = payload.openid;
    }
}

const actions = {
    // 登录
    async login({ commit }: ActionContext<any, any>, code: string) {
        let result = await login(code);
        // console.log(result, '----result')
        if(result.data) {
            commit('updateLogin', {isLogin: true, openid: result.data.openid})
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}