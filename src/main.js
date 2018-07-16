import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueSocketio from 'vue-socket.io'
import router from './routers'
import { MessageBox } from 'element-ui';

Vue.use(VueSocketio, 'http://192.168.100.154:7777');
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$msgbox = MessageBox

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
