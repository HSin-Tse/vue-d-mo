<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="test">
    <h1>{{index}}</h1>
    <h3>{{index}}</h3>
    <h2>{{index}}</h2>
    <h1>{{title|capitalize}}</h1>
    <h1>{{title|capitalize}}</h1>

    <!--<span v-html="title"></span>-->
    <!--<p>{{user.firstName}}</p>-->
    <!--<p>{{user.lastName}}</p>-->
    <input type="text" v-model="title">
    <p v-if="showNAme" v-text="user.firstName"></p>
    <p v-else> Nobody</p>
    <button v-on:click="greet(title)">Say Greet</button>
    <button v-on:click="addo">addo</button>

    <ul>
      <li v-for="item in items">{{item.title}}</li>

    </ul>
    <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit">

    <br>
    <label> First Name: </label> <input type="text" v-model="user.firstName">
    <br>

    <label> Last Name: </label> <input type="text" v-model="user.lastName">

    <h3>{{fullname|capitalize}}</h3>
    <h3>{{msg|capitalize}}</h3>

  </div>
</template>

<script>
  export default {
    name: 'TestVue',
    props: {
      msg: {
        type: String,
        default: "foorbar"
      }
    },
    data() {
      return {
        title: 'stodo ',
        user: {
          firstName: 'John',
          lastName: 'tse'
        },
        showNAme: false,
        items: [
          {title: 'Iten 1'},
          {title: 'Iten 2'},
          {title: 'Iten 3'},
        ]
//        showNAme: true
      }
    },
    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      },
    },
    methods: {
      greet: function (he) {
        alert(he)
      },
      addo: function () {
        console.log('You hit addo')

        this.$store.dispatch("addIndex");
      },
      pressKey: function (e) {
//        alert('aaa')
        console.log(e.target.value)
      },
      enterHit: function () {
//        alert('aaa')
        console.log('You hit enter')
//        console.log(e.target.value)
      }
    },
    computed: {
      index: function () {
        return this.$store.state.index
      },
      fullname: function () {


        return this.user.firstName + ':' + this.user.lastName
      }
    }
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: bolder;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    font-weight: bolder;

    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
