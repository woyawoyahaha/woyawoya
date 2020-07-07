<template>
  <div class="main">
    <div class="header_fu">
      <div class="header">
        <span class="header_span" @click="btns">〈</span>
        <span class="header_span1">粉丝</span>
        <img src="../../../img/two 1.jpg" />
      </div>
    </div>
    <div>
      <ul class="ul_big">
        <p v-if="list.length?'':'你还没有粉丝'" class="pp">你还没有粉丝</p>
        <li class="li_big" v-for="item in list" :key="item.id">
          <img :src="item.avatarUrl" />
          <p class="li_span">{{item.nickname}}</p>
          <p class="li_span1">{{item.signature}}</p>
          <button class="btns_btn" @click="addbtn">+ 关注</button>
        </li>
      </ul>
    </div>
    <div class="footer_fot">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from '@/components/footer/index.vue'
export default {
  name: 'Four',

  components: {
    Footer
  },
  data() {
    return {
      list: [],
      t: 1
    }
  },
  methods: {
    btns() {
      history.go(-1)
    },
    // 关注api
    addbtn() {
      this.axios
        .get(
          '/info/follow?id=' +
            this.$cookies.get('id') +
            '&t=' +
            1
        )
        .then(res => {
          console.log(res)
        })
    }
  },
  //   粉丝用户api
  mounted() {
    this.axios
      .get(
        '/info/user/followeds?uid=' + this.$cookies.get('id')
      )
      .then(res => {
        console.log(res.data.followeds)
        this.list = res.data.followeds
      })
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
/* .ul_big{
  margin-top:50px
} */
.main {
  height: 61.1rem;
}
.header_fu {
  width: 100%;
  min-height: 3rem;
}
.header {
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-around;
  background-color: #d33a31;
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: space-around;
}
.header_span1 {
  line-height: 2.5;
  color: white;
  font-size: 17px;
}
.header img {
  width: 2rem;
  height: 2rem;
  margin-top: 0.4rem;
}
.header_span {
  line-height: 2.3;
  color: white;
  font-size: 20px;
  cursor: pointer;
}

.li_big {
  width: 100%;
  height: 6rem;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid #ccc;
}
.li_big img {
  width: 70px;
  height: 70px;
  float: left;
  border-radius: 50%;
  margin-top: 14px;
  margin-left: 16px;
}
.li_span {
  font-size: 18px;
  position: absolute;
  left: 110px;
  top: 26px;
}
.li_span1 {
  margin-left: 200px;
  color: #ccc;
  position: absolute;
  left: -90px;
  top: 50px;
  width: 305px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.footer_fot {
  min-height: 48px;
}
.pp {
  text-align: center;
  margin-top: 10%;
  color: #ccc;
}
.btns_btn {
  border-radius: 50px;
  border: 1px solid red;
  width: 70px;
  height: 26px;
  background: white;
  color: red;
  font-size: 16px;
  position: absolute;
  left: 76%;
  top: 33px;
}
</style>
