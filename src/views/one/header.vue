<template>
  <header class="header">
    <div class="head-t">
      <i class="iconfont icon-huatong"></i>

      <router-link :to="{name:'Search'}">
        <input
        type="text"
        placeholder="搜索音乐、歌词、电台"
      />
      </router-link>
      <router-link tag="em" to="/play">
      <em class="iconfont icon-paihangbang"></em>
      </router-link>
    </div>

    <div class="nav">
      <router-link
        v-for="(v, i) in classB"
        :to="{ name: classA[i] }"
        :key="classA[i]"
        :class="{active: currentIndex === i }"

        ><p  @click='changeIndex(i)'>{{ classB[i] }}</p></router-link>
      <!-- <router-link :to="{name:'one'}" :class="{active: currentIndex == 0 }" ><p @click="changeIndex()">个性推荐</p></router-link>
      <router-link :to="{name:'Gedan'}" :class="{active: currentIndex == 1 }">歌单</router-link>
      <router-link :to="{name:'Zhubo'}" :class="{active: currentIndex == 2 }">主播电台</router-link>
      <router-link :to="{name:'Paihang'}" :class="{active: currentIndex == 3 }">排行榜</router-link> -->
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
        classA: ["Gexing", "Gedan", "Zhubo", "Paihang"],
        classB: ["个性推荐", "歌单", "主播电台", "排行榜"],
      currentIndex:0
    };
  },

  methods: {

  changeIndex(i) {
        this.currentIndex = i;
      }
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 6.39rem;
  background: #0b5fa5;
}
.header .head-t {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 3.56rem;
  position: relative;
}
.header .head-t i {
  font-size: 1.93rem;
  margin-left: 0.49rem;
  margin-top: 0.81rem;
  color: #fffae9;
}

.header .head-t a {
  border: 0;
  width: 70%;
}
.header .head-t input {
  border: 0;
  width: 100%;
  height: 2.43rem;
  color: #e2b3ab;
  background-color: #66a1d2;
  border-radius: 1.21rem;
  font-size: 0.97rem;
  line-height: 150%;
  text-align: center;
  margin-top: 0.56rem;
}
.header .head-t em {
  font-size: 1.93rem;
  margin-right: 0.49rem;
  margin-top: 0.81rem;
  color: #fffae9;
}

.header .nav {
  display: flex;
  border-bottom: 1px solid #ccc;
  width: 100%;
  height: 2.83rem;
}
.header .nav a {
  flex: 1;
  line-height: 2.83rem;
  text-align: center;
  font-size: 1rem;
  color: #fffae9;
  /* transition: all .9s; */
}
.header .nav .active {
  color: #fffae9;
  font-weight: 600;
  border-bottom: 1px solid #fffae9;
}

.header .head-t .musicList {
  position: absolute;
  top: 3.125rem;
  left: 3.125rem;
  background: orange;
  width: 76%;
  min-height: 3rem;
}
</style>
