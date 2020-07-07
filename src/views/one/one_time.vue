<template>
  <div>
    <div class="header_fu">
      <div class="header">
        <span class="header_span">〈</span>
        <span class="header_span1">24小时榜</span>
        <img src="../../img/two 1.jpg" />
      </div>
    </div>
    <div class="hot">
      <ul class="hto_ul">
        <li v-for="item in lists" :key="item.id">
          <p class="hto_ul_p1">{{item.rank}}</p>
          <img :src="item.program.dj.avatarUrl" />
          <p class="hto_ul_p2">{{item.program.dj.nickname}}</p>
          <div class="hto_ul_img">
            <img class="hto_ul_img" src="../../images/huo.png" alt />
            <p class="hto_ul_p3">{{((item.score/10000).toFixed(1))}}万</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: []
    }
  },
  mounted() {
    // 24小时榜
    this.axios
      .get('/info/dj/program/toplist/hours?limit=100')
      .then(res => {
        console.log(res.data.data.list)
        this.lists = res.data.data.list
      })
  }
}
</script>

<style scoped>
.header_fu {
  width: 100%;
  min-height: 3rem;
}
.header {
  width: 100%;
  min-height: 3rem;
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

.hot {
  position: relative;
}

.hto_ul li {
  display: flex;
  /* justify-content:space-around */
  border-bottom: 1px solid #ccc;
  width: 100%;
  height: 5rem;
}
.hto_ul_p1 {
  color: red;
  margin-top: 26px;
  margin-left: 10px;
  font-size: 18px;
  font-weight: 700;
  position: absolute;
}
.hto_ul li img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-top: 6px;
  margin-left: 45px;
}
.hto_ul_p2 {
  margin-left: 10px;
  margin-top: 30px;
}
.hto_ul_p3 {
  margin-top: 30px;
  position: absolute;
  left: 80%;
  color: #ccc;
}
.hto_ul .hto_ul_img > img {
  position: absolute;
  width: 10px;
  height: 15px;
  left: 65%;
  margin-top: 33px;
}
</style>
