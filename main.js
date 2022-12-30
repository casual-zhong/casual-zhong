import App from './App'
import comJs from './utils/com.js'
import uView from '@/uni_modules/uview-ui'

Vue.use(uView)
Vue.use(comJs);

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif