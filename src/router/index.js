import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test.vue'
import User from '@/components/User.vue'
import Play from '@/components/Play.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import Watch from '@/components/Watch.vue'
import DigitalClock from '@/components/DigitalClock.vue'


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
      path: '/hello',
      name: 'hello',
      component: HelloWorld
    },
    {
      path: '/play',
      name: 'play',
      component: Play
    },
    {
      path: '/Watch',
      name: 'Watch',
      component: Watch
    },
    {
      path: '/clock',
      name: 'Clock',
      component: DigitalClock
    }
  ]
})
