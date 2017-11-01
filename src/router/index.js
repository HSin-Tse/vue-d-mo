import Vue from 'vue'
import Router from 'vue-router'
import Resourse from 'vue-resource'
// import HelloWorld from '@/components/HelloWorld'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test.vue'
import User from '@/components/User.vue'
Vue.use(Router)
Vue.use(Resourse)

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
    }
  ]
})
