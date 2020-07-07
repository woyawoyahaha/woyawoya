<template>
   <footer class="bot">
      <router-link tag="a" class="nav" :to='{name:"one"}'>
        <span class="iconfont icon-gedan"></span>
        <em>每日一Yue</em>
      </router-link>
      <router-link tag="a" class="nav" :to='{name:"three"}'>
        <span class="iconfont icon-wode"></span>
        <em>每日一Le</em>
      </router-link>
      <router-link tag="a" class="nav" :to='{name:"mine"}'>
        <span class="iconfont icon-wode"></span>
        <em>我的</em>
      </router-link>
    </footer>
</template>

<script>
export default {
  name: 'Footer',

  methods: {
    // songSheet: function() {
    //   console.log(111)
    //   this.axios
    //     .get(
    //       '/info/user/playlist?uid=' + this.$cookies.get('id')
    //     )
    //     .then(res => {
    //       console.log(res)
    //     })
    // }
  }
}
</script>

<style scoped>
/* footer */
.footer_bot {
  height: 3rem;
  width: 100%;
}
.bot {
  border-top: 1px #ccc solid;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 3rem;
  width: 100%;
  position: fixed;
  bottom: 0px;
  background-color: #ff9400;
}
.bot>a {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33.3%;
  color:#dcdcb9;

  /* display: flex;
    flex-direction: column;
    text-align: center; */
}
 .bot a.router-link-active{
   color:white;
}
 .bot a span {
  font-size: 1.25rem;
}
.bot a em {
  font-size: 0.84rem;
}
</style>
