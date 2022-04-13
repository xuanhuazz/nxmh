/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * @param {Boolean} json [true：json格式请求头；false：FormData格式请求头]
 */
 import axios from "axios";
 import qs from 'qs'
 export function post(url, params = {}, json = false) {
    // json格式请求头
    const headerJSON = {
      "Content-Type": "application/json"
    };
    // FormData格式请求头
    const headerFormData = {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    };
    return new Promise((resolve, reject) => {
      axios
        .post(url, json ? JSON.stringify(params) : qs.stringify(params), {
          headers: json ? headerJSON : headerFormData
        })
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err.data);
        });
    });
  }
