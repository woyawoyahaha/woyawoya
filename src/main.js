import Vue from 'vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCookies from 'vue-cookies'
import '../public/css/reset.css'
import "@/utils/rem"

Vue.use(Vant)
Vue.use(VueCookies)
Vue.prototype.axios = axios
Vue.config.productionTip = false

window.addEventListener('popstate', function (e) {
  router.isBack = true
},false)

// Vue.prototype.$axios = axios;
// axios.defaults.withCredentials = true;

//时间格式化过滤器
Vue.filter('dateFormat', function(originVal) {
  const dt = new Date(originVal)

  // const y = dt.getFullYear()//年
  const m = (dt.getMonth() + 1 + '').padStart(2,)//月
  const d = (dt.getDate() + '').padStart(2, '0')//日

  const hh = (dt.getHours() + '').padStart(2, '0') //时
  const mm = (dt.getMinutes() + '').padStart(2, '0') //分
  const ss = (dt.getSeconds() + '').padStart(2, '0') //秒

  return `${m}月${d}日 ${hh}:${mm}`
})



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
