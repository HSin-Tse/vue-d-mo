<template>
  <div id="app">
    <img src="./assets/logo.png">

    <ul>

      <li><router-link to="/"> USers</router-link></li>
      <li><router-link to="/test"> test</router-link></li>
      <li><router-link to="/hello"> hello</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app'
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
