import requests from './request'
//三级联动axios发请求
export const reqCategoryList = () => requests({ url: 'product/getBaseCategoryList', method: 'get' })