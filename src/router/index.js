import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test.vue'
import User from '@/components/User.vue'
import Play from '@/components/Play.vue'


Vue.use(Router);




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
