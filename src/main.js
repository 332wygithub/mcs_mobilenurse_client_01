import Vue from 'vue'
//import App from './App.vue'
import zhuDiv from '@/components/zhuDiv.vue'

// 导入elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//导入路由
import router from './router'
import store from './store'
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(router);

new Vue({
  router,
  store,
  render: h => h(zhuDiv),
}).$mount('#app')
