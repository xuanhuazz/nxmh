//引入请求数据的函数，分别暴露一定要记得加{}
import {reqDataList,reqFuncList,reqCommonlyList} from  '@/api'
//创建action,mutation,state,getter对象
const state = {
    dataList:[],
    commonlyList:[]
}
const actions = {
    //获取全部功能
    async dataList({commit},params){
       let result =  await reqDataList(params)    
       if(result.code == 200){    //如果请求成功，result.code就是200
           commit('DATALIST',result.list)    
       }
    },
    //将常用功能添加到后端库中
    async funcList({commit},params){
        let result =  await reqFuncList(params)    
        if(result.code == 200){
            return 'success'
        } else {
            return Promise.reject(new Error('faile'))
        }
     },
     //获取最新的常用功能
     async commonlyList({commit},){
        let result =  await reqCommonlyList()    
        if(result.code == 200){    //如果请求成功，result.code就是200
            commit('COMMONLYLIST',result.data)    
        }
     },
}
const mutations = {
    DATALIST(state,dataList){
        state.dataList = dataList    //将数据交给state
    },
    COMMONLYLIST(state,commonlyList){
        state.commonlyList = commonlyList    //将数据交给state
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