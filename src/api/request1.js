import axios from "axios";
//引入nprogress
import nprogress from "nprogress";
//引入nprogress样式
import 'nprogress/nprogress.css'

const requests1 = axios.create({
    baseURL:'/gateway',
    timeout:10000    //访问大于5s取消
})

 
//设置请求拦截器，并且加上进度条。
requests1.interceptors.request.use(function (config) {
    nprogress.start()
    return config;
}, function (error) {
    return Promise.reject(error);
});
 
// 设置响应拦截器
requests1.interceptors.response.use(function (response) {
    nprogress.done()
    return response.data;
}, function (error) {
    return Promise.reject(error);
});
export default requests1
