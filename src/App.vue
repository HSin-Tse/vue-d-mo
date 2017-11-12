<template>
  <div id="app">
    <SideBar></SideBar>
    <ul>

      <li><router-link to="/"> USers</router-link></li>
      <li><router-link to="/test"> test</router-link></li>
      <li><router-link to="/hello"> hello</router-link></li>
      <li><router-link to="/watch"> watch</router-link></li>
      <li><router-link to="/clock"> clock</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>


<!--import BNavSide from './components/SideBar.Vue'-->
<script>
  import SideBar from './components/SideBar.vue';

  export default {
    name: 'app',
    components: {
      SideBar,
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
