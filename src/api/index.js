import requests from './request'
import requests1 from './request1'

export const reqGetUserName = () => requests1({ url: 'middle/getUserName', method: 'get' })
reqGetUserName().then(function (response) {
    console.log(response.msg);
    localStorage.setItem('USERNAME',response.msg)
  })
  .catch(function (error) {
    console.log(error);
  }) 
let name = localStorage.getItem('USERNAME')
export const reqDataList = (params) => requests({ url: `gateway/v1/organization/queryUrls/gateway/${name}/${params}`, method: 'get' })
export const reqNewsList = (num) => requests1({ url: `middle/getNewsInform/${num}`, method: 'get' })
export const reqHandleList = (params) => requests({ url: `gateway/v1/organization/queryDealt/${params}/${name}`, method: 'get' })
export const reqFuncList = (params) => requests1({ url: 'middle/getRoute', data: params, method: 'post' })
export const reqAddSchList = (date, s, e, title, content) => requests1({ url: `middle/schedule/insert?date=${date}&startTime=${s}&endTime=${e}&title=${title}&content=${content}`, method: 'post' })
export const reqSchList = (params) => requests1({ url: `middle/schedule/getListByDate/${params}`, method: 'get' })
export const reqCommonlyList = () => requests1({ url: 'middle/getMyCommonlyList', method: 'get' })

export const reqGetUserInfor = () => requests1({ url: '/middle/register/', method: 'get' })
//用户管理
export const reqGetAllUser = () => requests1({ url: 'middle/getAllUser', method: 'get' })
//获取验证码
export const reqGetMobile = (mobile) => requests1({ url: `/middle/smscode/${mobile}`, method: 'get' })
//获取邮箱验证码
export const reqGetMail = (mail) => requests1({ url: `middle/register/${mail}`, method: 'get' })

