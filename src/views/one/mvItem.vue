<template>
  <div class="main">
    <header class="header">
      <i @click="breakBtn" class="iconfont icon-xiangzuosanjiaoxing"></i>
      <i class="iconfont icon-paihangbang"></i>
    </header>
    <div v-for="item in mvItem" :key="item.id" class="content">
        <div class="vadio">
         <video width="100%" height="100%" controls :src="mvItem[0].brs[480]" autoplay="autoplay"></video>
        </div>
        <div class="con-t">
          <div class="con-tit">
            <h3>{{mvItem[0].name}}</h3>
            <p>歌手:{{mvItem[0].artistName}} 播放 :{{mvItem[0].playCount}}</p>
          </div>
          <div class="nav">
            <p>
              <i class="iconfont icon-guanzhu"></i>
              <em>{{mvItem[0].likeCount}}</em>
            </p>
            <p>
              <i class="iconfont icon-jianyi"></i>
              <em>{{mvItem[0].commentCount}}</em>
            </p>
            <p>
              <i class="iconfont icon-fenxiang-1"></i>
              <em>{{mvItem[0].shareCount}}</em>
            </p>
            <p>
              <i class="iconfont icon-xiazai"></i>
              <em>{{mvItem[0].subCount}}</em>
            </p>
          </div>
           <h2>相关推荐</h2>
      <ul>
        <li v-for="item in siMv" :key="item.id" @click.stop="shuzi(item.id)">
          <div class="img">
            <img :src="item.cover" alt="" />
          </div>
          <div class="txt">
            <!-- <span>{{item.id}}</span> -->
            <h3>{{item.name}}</h3>
            <p>{{item.artists[0].name}}</p>
          </div>
        </li>
      </ul>
     </div>



    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/footer/index.vue'
import axios from "axios"
export default {
  data() {
    return {
      mvItem: [],
      siMv:[],
      
    
    }
  },
  activated() {
    this.axios
      .get('/info/mv/detail?mvid=' + this.$route.query.id)
      .then(res => {
        console.log(res.data.data);
        this.mvItem=[res.data.data]
        // console.log(this.mvItem);

        axios.get('/info/simi/mv?mvid='+this.$route.query.id)
        .then(res=>{
          console.log(res.data.mvs);
          this.siMv = res.data.mvs
        })

      })
  },
  methods: {
    breakBtn() {
      history.go(-1)
    },
    //点开以后相应的推荐播放的实现
    shuzi(f){
      //获取歌曲id
       console.log(f)
       //请求相应数据
      axios.get('/info/mv/detail?mvid='+f)
        .then(res=>{
          console.log(res.data.data);
          this.mvItem=[res.data.data]
        })

      
    
    }

  },
  components: {
    Footer
  }
}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #333;
  color: #fff
}

/* header */
.header {
  background: rgb(25, 34, 39);
  height: 3.56rem;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  align-items: center;
}
.header i {
  font-size: 1.8rem;
  color: #fff;
}

/* content */
.content {
  flex: 1;
  overflow-y: auto;
  padding-bottom: 3rem;
}
.content .con-t {
  width: 86%;
  margin: 0 auto;
}
.content .vadio {
  width: 100%;
  height: 13.75rem;
  background: grey;
}
.content .con-tit {
  height: 5.6rem;
  overflow: hidden;
  margin-bottom: 0.8rem;
}
.content .con-tit h3 {
  height: 2.43rem;
  line-height: 2.43rem;
  font-size: 1.13rem;
  margin-top: 0.8rem;
  width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* color: rgba(80, 80, 80, 1); */
}
.content .con-tit p {
  height: 2.43rem;
  line-height: 2.43rem;
  font-size: 0.89rem;
  /* color: rgba(128, 128, 128, 1); */
}
.content .nav {
  height: 3.4rem;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #ccc;
}
.content .nav p {
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
.content .nav p i {
  font-size: 1.7rem;
}
.content h2 {
  font-size: 1.13rem;
  height: 3.23rem;
  line-height: 3.23rem;
}
.content ul {
  width: 100%;
}
.content ul li {
  width: 100%;
  height: 4.04rem;
  margin-bottom: 0.81rem;
  display: flex;
}
.content ul li .img {
  width: 35%;
  height: 4.04rem;
  margin-right: 0.81rem;
  border-radius: 5px;
  overflow: hidden;
}
.content ul li .img img {
  width: 100%;
  height: 100%;
  background: darkgray;
}
.content ul li .txt {
  width: 65%;
  height: 4.04rem;
}
.content ul li .txt h3 {
  height: 2.43rem;
  line-height: 2.43rem;
  width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
