//引入请求数据的函数，分别暴露一定要记得加{}
import {reqNewsList} from  '@/api'
//创建action,mutation,state,getter对象
const state = {
    newsList:[]
}
const actions = {
//reqCategoryList()请求回来是一个Promise函数，所以用async和await
    async newsList({commit},num){
       let result =  await reqNewsList(num)    
       if(result.code == 200){    //如果请求成功，result.code就是200
           commit('NEWSLIST',result.data)    
       }
    }
}
const mutations = {
    NEWSLIST(state,newsList){
        state.newsList = newsList    //将数据交给state
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