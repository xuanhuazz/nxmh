import requests from './request'
import requests1 from './request1'

export const reqDataList = (params) => requests({ url: `gateway/v1/organization/queryUrls/gateway/wangxu/${params}`, method: 'get' })
export const reqNewsList = () => requests1({ url: 'middle/getNewsInform', method: 'get' })
export const reqHandleList = (params) => requests({ url: `gateway/v1/organization/queryDealt/${params}/wangxu`, method: 'get' })
export const reqFuncList = (params) => requests1({ url: 'middle/getRoute', data:params,method: 'post' })
export const reqAddSchList = (date,s,e,title,content) => requests1({ url: `middle/schedule/insert?date=${date}&startTime=${s}&endTime=${e}&title=${title}&content=${content}`,method: 'post' })
export const reqSchList = (params) => requests1({ url: `middle/schedule/getListByDate/${params}`, method: 'get' })
export const reqCommonlyList = () => requests1({ url: 'middle/getMyCommonlyList', method: 'get' })
export const reqGetUserName = () => requests1({ url: 'middle/getUserName', method: 'get' })
