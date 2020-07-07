<template>
  <div class="main">
    <div class="header_fu">
      <div class="header">
        <span class="header_span" @click="btns">〈</span>
        <span class="header_span1">动态</span>
        <img src="../../../img/two 1.jpg" />
      </div>
    </div>

    <div class="middle">
      <img class="middle_img" :src="img" alt />
      <p class="middle_p">{{cookies}}</p>
      <p class="middle_color">{{Number(this.add)|dateFormat}}</p>
      <p class="middle_p1">{{this.wz}}</p>
      <img class="dynamic_img" :src="this.paa" alt />
      <ul class="middle_ul">
        <router-link :to="{name:'soncomment',query:{id:this.pdd}}">
          <li>评论</li>
        </router-link>
        <router-link :to="{name:'sontransmit'}">
          <li>转发</li>
        </router-link>
        <router-link :to="{name:'sonpraise'}">
          <li>赞</li>
        </router-link>
      </ul>
      <router-view></router-view>
    </div>
    <div class="footer_fot">
      <input ref="ppp" type="text" placeholder="发表评论" />
      <img src="../../../images/DZ.png" alt />
      <img @click="bttn" src="../../../images/ZW.png" alt />
    </div>
  </div>
</template>

<script>
import Footer from '@/components/footer/index.vue'
import child from '../module/soncomment'
export default {
  name: 'Four',
  components: {},
  data() {
    return {
      list: [],
      img: this.$cookies.get('avatarUrl'),
      cookies: '',
      add: '',
      paa: '',
      wz: '',
      pdd: ''
    }
  },
  methods: {
    btns() {
      // history.go(-1);
      // location.href='dynamichou.vue'
      window.history.go(-1)
    },
    bttn() {}
  },
  activated() {
    this.cookies = this.$cookies.get('nickname')
    //  this.$cookies.get('nickname')
    // let that = this;

    this.pdd = this.$route.query.id
    this.add = this.$route.query.time
    this.paa = this.$route.query.img
    this.wz = this.$route.query.wz
    // console.log(this.add)
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.main {
  height: 100%;
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

.footer_fot {
  width: 100%;
  height: 3rem;
  /* background: #d33a31; */
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #cccccc;
}
.footer_fot input {
  width: 15rem;
  height: 2rem;
  border-radius: 50px 50px;
  margin-top: 6px;
  border: none;
  border: 1px solid #cccccc;
}
.footer_fot img {
  width: 25px;
  height: 25px;
  margin-top: 13px;
}
.middle {
  width: 100%;
  height: 70%;
}
.middle_img {
  width: 10%;
  border-radius: 50%;
  margin: 5%;
  float: left;
}
.middle_p {
  width: 70%;
  margin-top: 6%;
  color: royalblue;
  font-weight: 700;
  font-size: 14px;
}
.dynamic_img {
  width: 10rem;
  height: 15rem;
  margin-top: 2%;
  margin-left: 20%;
  /* position:absolute;
  left:6%;
  margin-top:30px */
}
.middle_color {
  font-size: 14px;
  color: #ccc;
  line-height: 2;
}
.middle_ul {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
}
</style>
