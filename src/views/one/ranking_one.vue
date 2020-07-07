<template>
  <div>
    <div class="one_time">
      <router-link tag="h3" :to="{name:'one_time'}">
        24小时榜 &nbsp;&nbsp;&nbsp; 〉
      </router-link>
      <ul class="one_time_ul">
        <li v-for="item in lists" :key="item.id">
          <img  :src="item.program.dj.avatarUrl">
          <p class="one_time_p1">{{item.rank}}</p>
          <p class="one_time_p2">{{item.program.dj.nickname}}</p>
          <img class="one_time_img" src="../../images/huo.png" alt="">
          <p class="one_time_p3">{{item.score}}</p>
        </li>
      </ul>
    </div>
    <div class="one_new">
     <router-link tag="h3" :to="{name:'one_new'}">
        新人榜 &nbsp;&nbsp;&nbsp; 〉
      </router-link>
      <ul class="one_new_ul">
        <li v-for="item in listss" :key="item.id">
          <img  :src="item.avatarUrl">
          <p class="one_new_p1">{{item.rank}}</p>
          <p class="one_new_p2">{{item.nickName}}</p>
          <img class="one_new_img" src="../../images/huo.png" alt="">
          <p class="one_new_p3">{{item.score}}</p>
        </li>
      </ul>
    </div>
    <div class="hot">
      <div class="hot_h3_div">
        <h3 class="hot_h3">最热主播</h3>
        <p @click="ppbtn" class="hot_h3_p">i</p>
      </div>

      <div class="hot_pp_div" v-if="Show">
        <p class="hot_pp">选取网易云音乐中热度最高的主播，热度由主播的节目热度、粉丝数量的综合计算，每天更新</p>
      </div>

      <ul class="hto_ul">
        <li v-for="item in list" :key="item.id">
          <p class="hto_ul_p1">{{item.rank}}</p>
          <img :src="item.avatarUrl">
          <p class="hto_ul_p2">{{item.nickName}}</p>
          <div class="hto_ul_img">
             <img class="hto_ul_img" src="../../images/huo.png" alt="">
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
      Show: false,
      list:[],
      lists:[],
      listss:[]
    }
  },
  methods: {
    ppbtn() {
      this.Show = !this.Show
    }
  },
  mounted() {
    this.axios.get('/info/dj/toplist/popular?limit=99')
    .then(res=>{
      console.log(res.data.data.list)
      this.list=res.data.data.list
    })
    // 24小时榜
    this.axios.get('/info/dj/program/toplist/hours?limit=3')
    .then(res=>{
      console.log(res.data.data.list)
      this.lists=res.data.data.list
    })
    // 新人榜
    this.axios.get('/info/dj/toplist/newcomer?limit=3')
    .then(res=>{
      console.log(res.data.data.list)
      this.listss=res.data.data.list
    })
  },
}
</script>

<style scoped>
.one_time {
  width: 100%;
  height: 13rem;
  border-bottom: 3px solid #ccc;
  overflow: hidden;
}
.one_new {
  width: 100%;
  height: 13rem;
  border-bottom: 3px solid #ccc;
}
.hot {
  position: relative;
}
.hot_h3_div{
 display: flex;
}
.hot_h3 {
  line-height: 3;
  margin-left: 10px;
  /* float: left; */
}
.hot_h3_p {
  width: 23px;
  height: 23px;
  text-align: center;
  line-height: 1.6;
  border: 1px solid #ccc;
  border-radius: 50%;
  font-weight: 700;
  color: #cccccc;
  margin-top: 15px;
  margin-left: 6px;
}
.hot_pp {
  position: absolute;
  width: 360px;
  height: 2.3rem;
  background-color: rgba(50, 50, 50, 0);
  color: white;
  font-size: 13px;
  margin-top: 13px;
  margin-left: 13px;
}
.hot_pp_div {
  position: absolute;
  width: 370px;
  height: 4rem;
  background-color: rgba(50, 50, 50, 0.7);
  top: 50px;
  left: 20px;
}
.hto_ul li{
  display:flex;
/* justify-content:space-around */
border-bottom:1px solid #ccc;
width:100%;
height:5rem;
}
.hto_ul_p1{
  color:red;
  margin-top:26px;
  margin-left:10px;
  font-size:18px;
  font-weight:700;
  position:absolute
}
.hto_ul li img{
  width:70px;
  height:70px;
  border-radius:50%;
  margin-top:6px;
  margin-left:45px;
}
.hto_ul_p2{
  margin-left:10px;
  margin-top:30px;
}
.hto_ul_p3{
  margin-top:30px;
  position:absolute;
  left:80%;
  color: #ccc
}
.hto_ul .hto_ul_img>img{
  position:absolute;
  width:10px;
  height:15px;
  left:65%;
  margin-top:33px;
}
/* 24小时修饰 */
.one_time h3{
  margin-top:10px;
  margin-left:10px;
  font-weight:700
}
.one_time_ul{
  display:flex;
  justify-content:space-around;
  margin-top:16px
}
.one_time_ul li{
  position: relative;
}
.one_time_ul li img{
  width:90px;
  height:90px;
  border-radius:50%
}
.one_time_p1{
  position:absolute;
  width:46px;
  height:46px;
  font-size:36px;
  color:rgba(255, 0,0 , 0.3);
  background:white;
  top:-10px;
  left:-5px;
  border-radius:0 0 100px 0;
  text-align: center
}
.one_time_p2{
  text-align: center;
  line-height: 2
}
.one_time_p3{
  text-align: center
}
.one_time .one_time_img{
  width: 10px;
  height:15px;
  float: left;
  margin-top:3px;
  margin-left:3px;
}
/* 新人榜修饰 */
.one_new h3{
  margin-top:10px;
  margin-left:10px;
  font-weight:700
}
.one_new_ul{
  display:flex;
  justify-content:space-around;
  margin-top:16px
}
.one_new_ul li{
  position: relative;
}
.one_new_ul li img{
  width:90px;
  height:90px;
  border-radius:50%
}
.one_new_p1{
  position:absolute;
  width:46px;
  height:46px;
  font-size:36px;
  color:rgba(255, 0,0 , 0.3);
  background:white;
  top:-10px;
  left:-5px;
  border-radius:0 0 100px 0;
  text-align: center
}
.one_new_p2{
  text-align: center;
  line-height: 2
}
.one_new_p3{
  text-align: center
}
.one_new .one_new_img{
  width: 10px;
  height:15px;
  float: left;
  margin-top:3px;
  margin-left:3px;
}
</style>
