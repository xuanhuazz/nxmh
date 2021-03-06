import axios from "axios";
//引入nprogress
import nprogress from "nprogress";
//引入nprogress样式
import 'nprogress/nprogress.css'

const requests = axios.create({
    baseURL:'/api',
    timeout:5000    //访问大于5s取消
})

 
//设置请求拦截器，并且加上进度条。
requests.interceptors.request.use(function (config) {
    nprogress.start()
    return config;
}, function (error) {
    return Promise.reject(error);
});
 
// 设置响应拦截器
requests.interceptors.response.use(function (response) {
    nprogress.done()
    return response.data;
}, function (error) {
    return Promise.reject(error);
});
export default requests
