// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MuseUI from 'muse-ui'
// import 'muse-components/styles/base.less' // 加载基础的样式
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI);

import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */




new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
