import Vue from 'vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue'
//引入store
import store from "@/store";
// //  引入reqCategoryList
// import {reqCategoryList} from  '@/api/index'
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  render: h => h(App),
  beforeCreate() {
		Vue.prototype.$bus = this //安装全局事件总线
	},
});
