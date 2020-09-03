import { login } from '@/services'
import { ActionContext } from 'vuex'

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
    // 登录
    async login(conrext: ActionContext<any, any>, code: string) {
        let result = await login(code);
        console.log(result, '----result')
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}