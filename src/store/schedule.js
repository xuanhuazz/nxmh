//引入请求数据的函数，分别暴露一定要记得加{}
import {reqAddSchList,reqSchList} from  '@/api'
//创建action,mutation,state,getter对象
const state = {
    schList:[]
}
const actions = {
//reqCategoryList()请求回来是一个Promise函数，所以用async和await
    async addSchedule({commit},{date,s,e,title,content}){
       let result =  await reqAddSchList(date,s,e,title,content)    
       if(result.code == 200){
        return 'success'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    async schList({commit},params){
        let result =  await reqSchList(params)    
        if(result.code == 200){    //如果请求成功，result.code就是200
            commit('SCHLIST',result.data)    
        }
     }
}
const mutations = {
    SCHLIST(state,schList){
        state.schList = schList    //将数据交给state
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