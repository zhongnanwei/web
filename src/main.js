import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 1. 导入组件库
import Vant from 'vant'
import { Tab, Tabs } from 'vant'
import axios from 'axios'
// 2. 引入组件 css 文件
import 'vant/lib/index.css'
// 3. 注册 vant ui 组件库的标签
Vue.use(Vant)

Vue.use(Tab);
Vue.use(Tabs);
Vue.config.productionTip = false;
//绑定到原型，调用只需要this.$axios获取
Vue.prototype.$axios = axios
//设置基准路径
axios.defaults.baseURL = "http://localhost:3000/"

axios.interceptors.request.use(config => {
  config.withCredentials = true;
  return config;
});

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
