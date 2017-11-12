<template>
  <div class="hello">


    <h1>{{ now }}</h1>
    <h1>{{ timec }}</h1>
    <h1>{{ msg }}</h1>
    <h1> {{reversedMessage }}</h1>
    <h1> {{revv() }}</h1>


    <div id="myDiv">
      <input type="text" v-model="firstName">
      <input type="text" v-model="lastName">
      <input type="text" v-model="fullName">
    </div>
  </div>

</template>

<script>
  import {formatDate} from '../common/date.js';

  export default {

    components: {
//      SideBar,
    },

    name: 'HelloWorld',
    data() {
      return {

        msg: '012345',
        time: '',
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar'
      }
    },
    methods: {
      revv: function () {


        return this.now.split('').reverse().join('')
      },
      timef: function () {
        return this.now.split('').reverse().join('')
      }
//      greet: function (str) {
//        return str+':'
//      },
    },
    computed: {
      now: function () {
        var date = new Date();
        return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
      },
      timec: function () {
        var date = new Date();
        return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
      },
      reversedMessage: function () {
        // `this` 指向 vm 实例
        return this.now.split('').reverse().join('')
      }
    },
    watch: {


      firstName: function (val) {
        this.fullName = val + ' ' + this.lastName +' :'
      },
      lastName: function (val) {
        this.fullName = this.firstName + ' ' + val+' :'
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
