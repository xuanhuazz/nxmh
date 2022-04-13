//引入请求数据的函数，分别暴露一定要记得加{}
import {reqHandleList} from  '@/api'
//创建action,mutation,state,getter对象
const state = {
    handleList:[],
    handleList1:[]
}
const actions = {

    async handleList({commit},params){
       let result =  await reqHandleList(params)    
       if(result.code == 200){    //如果请求成功，result.code就是200
           commit('HANDLELIST',result.data.dealGroup)    
       }
    },
    async handleList1({commit},params){
        let result =  await reqHandleList(params)    
        if(result.code == 200){    //如果请求成功，result.code就是200
            commit('HANDLELIST1',result.data.dealGroup)    
        }
     }
}
const mutations = {
    HANDLELIST(state,handleList){
        state.handleList = handleList    //将数据交给state
    },
    HANDLELIST1(state,handleList1){
        state.handleList1 = handleList1    //将数据交给state
    }
}
const getters = {
    
}
 
export default {
    actions,
    mutations,
    state,
    getters
}