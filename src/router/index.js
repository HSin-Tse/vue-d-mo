import Vue from 'vue'
import Router from 'vue-router'
import Resourse from 'vue-resource'
import Test from '@/components/Test.vue'
import User from '@/components/User.vue'
import Play from '@/components/Play.vue'

import {videoPlayer} from 'vue-video-player'

Vue.use(Router);
Vue.use(Resourse);
// Vue.use(Resourse);
var VideoPlayer = require('vue-video-player');
// VideoPlayer.config({
//   youtube: false, // default false
//   switcher: false, // default true
//   hls: false // default true
// })
// use
Vue.use(VideoPlayer);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: User
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/play',
      name: 'play',
      component: Play
    }]
})
