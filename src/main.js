// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'


import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex);
Vue.use(MuseUI);

Vue.use(VueAxios, axios);


import Resourse from 'vue-resource'
// Vue.use(Resourse);

const store = new Vuex.Store({
  state: {
    index: 1
  },
  mutations: {
    ADD_INDEX(state) {
      state.index++;
    },
  },
  actions: {
    addIndex({commit}) {
      commit('ADD_INDEX')
    },
  }
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
