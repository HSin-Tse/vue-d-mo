<template>
  <div class="hello">


    <h1>{{ msg }}</h1>
    <div id="rj">
      <ul id="container">

        <li v-for="im in list">
          <img v-lazy=im>
          <!--<img src=im >-->
        </li>
      </ul>
    </div>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        list: [


          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510122041493&di=31470a56c06bb974c69eeba5af812bdb&imgtype=0&src=http%3A%2F%2Fimg1.pconline.com.cn%2Fpiclib%2F200812%2F22%2Fbatch%2F1%2F19891%2F1229912689801exkclwbfwp.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510122041493&di=31470a56c06bb974c69eeba5af812bdb&imgtype=0&src=http%3A%2F%2Fimg1.pconline.com.cn%2Fpiclib%2F200812%2F22%2Fbatch%2F1%2F19891%2F1229912689801exkclwbfwp.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510122041493&di=31470a56c06bb974c69eeba5af812bdb&imgtype=0&src=http%3A%2F%2Fimg1.pconline.com.cn%2Fpiclib%2F200812%2F22%2Fbatch%2F1%2F19891%2F1229912689801exkclwbfwp.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510122041493&di=31470a56c06bb974c69eeba5af812bdb&imgtype=0&src=http%3A%2F%2Fimg1.pconline.com.cn%2Fpiclib%2F200812%2F22%2Fbatch%2F1%2F19891%2F1229912689801exkclwbfwp.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510122041493&di=31470a56c06bb974c69eeba5af812bdb&imgtype=0&src=http%3A%2F%2Fimg1.pconline.com.cn%2Fpiclib%2F200812%2F22%2Fbatch%2F1%2F19891%2F1229912689801exkclwbfwp.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510122041493&di=31470a56c06bb974c69eeba5af812bdb&imgtype=0&src=http%3A%2F%2Fimg1.pconline.com.cn%2Fpiclib%2F200812%2F22%2Fbatch%2F1%2F19891%2F1229912689801exkclwbfwp.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510122041493&di=31470a56c06bb974c69eeba5af812bdb&imgtype=0&src=http%3A%2F%2Fimg1.pconline.com.cn%2Fpiclib%2F200812%2F22%2Fbatch%2F1%2F19891%2F1229912689801exkclwbfwp.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510122041493&di=31470a56c06bb974c69eeba5af812bdb&imgtype=0&src=http%3A%2F%2Fimg1.pconline.com.cn%2Fpiclib%2F200812%2F22%2Fbatch%2F1%2F19891%2F1229912689801exkclwbfwp.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510122041493&di=31470a56c06bb974c69eeba5af812bdb&imgtype=0&src=http%3A%2F%2Fimg1.pconline.com.cn%2Fpiclib%2F200812%2F22%2Fbatch%2F1%2F19891%2F1229912689801exkclwbfwp.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510122041493&di=31470a56c06bb974c69eeba5af812bdb&imgtype=0&src=http%3A%2F%2Fimg1.pconline.com.cn%2Fpiclib%2F200812%2F22%2Fbatch%2F1%2F19891%2F1229912689801exkclwbfwp.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510122041493&di=31470a56c06bb974c69eeba5af812bdb&imgtype=0&src=http%3A%2F%2Fimg1.pconline.com.cn%2Fpiclib%2F200812%2F22%2Fbatch%2F1%2F19891%2F1229912689801exkclwbfwp.jpg',
          'http://www.ajmide.com/home/images/v2/weixin.png',
          'http://www.ajmide.com/home/images/v2/weixin.png',
          'http://www.ajmide.com/home/images/v2/weixin.png',
          'http://www.ajmide.com/home/images/v2/weixin.png',
          'http://www.ajmide.com/home/images/v2/weixin.png',
          'http://www.ajmide.com/home/images/v2/weixin.png',
          'http://www.ajmide.com/home/images/v2/weixin.png',
          'http://www.ajmide.com/home/images/v2/weixin.png',
        ],
        msg: 'Welcome to Your Vue.js App'
      }
    },
    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
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
