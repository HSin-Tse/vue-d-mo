<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="user">
    <h1>{{title}}</h1>
    <h1>{{this.$store.state.index}}</h1>
    <div class="container">
      <mu-flat-button label="Default" class="demo-flat-button"/>
      <mu-flat-button label="Primary" class="demo-flat-button" primary/>
      <mu-flat-button label="Secondary" class="demo-flat-button" secondary/>
      <mu-flat-button label="Disabled" class="demo-flat-button" disabled/>
    </div>
    <form v-on:submit="addUser">
      <input type="text" v-model="newUser.name" placeholder="name">
      <br>
      <input type="text" v-model="newUser.email" placeholder="email">
      <br>
      <input type="submit" value="Submit">
      <br>
    </form>
    <ul>
      <li v-for="user in users">
        <input type="checkbox" class="toggle" v-model="user.contacted">
        <span :class="{contacted:user.contacted}">
        {{user.name}}:{{user.email}}:{{user.contacted}}      <mu-flat-button v-on:click="deleteUser(user)" label="X"
                                                                             class="demo-flat-button"/>

          </span>
      </li>

    </ul>

  </div>
</template>

<script>
  export default {
    name: 'users',

    data() {
      return {
        newUser: {},
        title: 'users',
        users: [
          {name: 'Iten 1', email: 'A@ajmide.com', contacted: false},
          {name: 'Iten 2', email: 'B@ajmide.com', contacted: false},
          {name: 'Iten 3', email: 'C@ajmide.com', contacted: true},
        ]
//        showNAme: true
      }
    },

    methods: {
      addUser: function (e) {
        console.log('addUser');
        this.users.push({
          name: this.newUser.name,
          email: this.newUser.email,
          contacted: false,
        });
        e.preventDefault();

      },
      deleteUser: function (user) {
//        alert('aaa')
//        console.log(e.target.value);
        this.users.splice(this.users.indexOf(user), 1);

      },
      enterHit: function () {
//        alert('aaa')
        console.log('You hit enter')
//        console.log(e.target.value)
      },
      zhihu() {
        this.axios.get('http://jsonplaceholder.typicode.com/users').then((rst) => {
          console.log(rst)
        }).catch((error) => {

        })
      }

    },

    created: function () {

      console.log('created :');
//      this.$http.get('http://jsonplaceholder.typicode.com/users')
//        .then(function (responce) {
//          console.log(responce.status);
//          console.log(responce.statusText);
//          console.log(responce.data);
//          this.users = responce.data;
//
//        });
      var self = this;
      this.axios.get('http://jsonplaceholder.typicode.com/users').then((response) => {
        console.log("before: " +response.data);
//        console.log(response.data)
        self.users = response.data;
        console.log("after: " +response.data);

      }).catch(function (response) {
        console.log(response.data);
      });


    },

  }
</script>

<style scoped>

  .contacted {
    text-decoration-line: line-through;
  }

  h1, h2 {
    font-weight: bolder;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    font-weight: bolder;

    /*display: inline-block;*/
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .demo-flat-button {
    margin: 12px;
  }
</style>
