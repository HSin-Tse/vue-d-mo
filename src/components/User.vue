<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="user">
    <h1>{{title}}</h1>
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
        {{user.name}}:{{user.email}}:{{user.contacted}}
          </span>
      </li>

    </ul>

  </div>
</template>

<script>
  export default {
    name: 'userss',

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
  }
</script>

<style scoped>

  .contacted{
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
</style>
