<template>
  <div id="app">
    <!--<HelloWorld/>-->
    <!--<Test/>-->

    <User msg=" Hellow">

    </User>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test.vue'
import User from './components/User.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,Test,User
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
