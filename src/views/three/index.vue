<template>
  <div class="main">
    <header class="top">
      <ul>
        
        <li>         
            <router-link to="duanzi">爆笑段子</router-link>
        </li>    
        <li>
            <router-link to="funnypic">搞笑图片</router-link>
        </li>
        <li>
            <router-link to="near">搞笑动图</router-link>
        </li>
          <li>
            <router-link to="funnyvedio">搞笑视频</router-link>          
          </li>
        
      </ul>
    </header>
    <van-icon class="add" @click="addContent" name="plus" color="#046cd4" size="8vw"/>
    <van-icon class="replay" @click="replayHandle" name="replay" color="#046cd4" size="8vw" />

    <div class="router-view">
      <router-view></router-view>
    </div>
    <div class="lala">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from '@/components/footer/index.vue'
import Header from '@/components/header/index.vue'
export default {
  name: 'Three',

  components: {
    Footer,
    Header
  },
  methods:{
    addContent(){
      this.$router.push('/addContent')
    },
    replayHandle() {
      window.location.reload();
    }
  }
}
</script>

<style scoped>
.lala {
  min-height: 3rem;
}
.router-view {
  flex: 1;
  overflow-y: auto;
}

.main .top {
  height: 3rem;
  width: 100%;
  border-bottom: 1px solid #ccc;
  background-color: #0b5fa5;
}

.main .top > ul > li > img {
  display: inline;
}

.main .top > ul > li:nth-child(1) > a > img {
  width: 31px;
  height: 31px;
  color: rgba(153, 153, 153, 1);
}

.main .top > ul > li:nth-child(3) > a > img {
  width: 31px;
  height: 31px;
  color: rgba(153, 153, 153, 1);
}
.router-link-exact-active{
  border-bottom: 2px solid wheat;
}
.main .top > ul {
  width: 90%;
    margin: 0 auto;
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
}
.main .top > ul>li>a{
  text-align: center;
  color: #fffae9;
}
.replay {
  background: rgba(240, 240, 240, 0.8);
  box-shadow: 0px 0px 2.5vw #888888;
  border-radius: 2vw;
  position: fixed;
  bottom: 20vw;
  right: 8vw;
  z-index: 1000;
}
.add {
  background: rgba(240, 240, 240, 0.8);
  box-shadow: 0px 0px 2.5vw #888888;
  border-radius: 2vw;
  position: fixed;
  bottom: 35vw;
  right: 8vw;
  z-index: 1000;
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
