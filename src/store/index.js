import Vue from 'vue'
import Vuex from 'vuex'
//引入小仓库
import func from './func'
import news from './news'
import handle from './handle'
import schedule from './schedule'
Vue.use(Vuex)
//创建action,mutation,state,getter对象

const actions = {}
const mutations = {}
const getters = {}
 
export default new Vuex.Store({
    actions,
    mutations,
    modules: {
        func,
        news,
        handle,
        schedule
    },
    getters
})