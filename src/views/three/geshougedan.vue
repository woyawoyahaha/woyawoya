<template>
  <div class="main">
    <!-- 头部 -->
    <Header class="top">
      <ul class="topContent">
        <li>
          <img @click="moveBack()" src="../../img/two 7.png" />
        </li>
        <li>
          <p>歌手详情</p>
        </li>
        <li>
          <h6 class="shoucang" @click="shoucang">{{collect}}</h6>
        </li>
      </ul>
    </Header>
    <!-- 内容区 -->
    <div class="content">
      <div class="songSheet">
        
          
          <div class="desc">
            {{this.desc}}
          </div>
          
      </div>
      <!-- 播放 -->
      <div class="Song">
        <div class="play">
          <img src="../../img/two 14.svg" alt />
          <p>播放全部</p>
        </div>
        <router-link
          v-for="(item, index) in privilegesList"
          :key="index"
          :to="{name:'play',query: { musicId: item.id,pagefrom:3}}"
        >
          <ul class="music" @click="musicIds(item.id,index)">
            <li>
              <div>
                <p>{{index+1}}</p>
              </div>
              <div>
                <p>{{item.name}}</p>
                <span>{{item.ar[0].name}}</span>
              </div>
              <div>
                <img src="../../img/two 15.svg" />
                <img src="../../img/two 16.svg" />
              </div>
            </li>
          </ul>
        </router-link>
      </div>
    </div>
    <div class="height">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from '@/components/footer/index.vue'
import bus from '@/assets/busEvent.js'
import axios from 'axios'
export default {
  methods: {
    moveBack() {
      history.go(-1)
    },

    //点击获取id，把id存到localStorage里面
    musicIds(id,key) {
      localStorage.setItem('id', id)
      localStorage.setItem('musicNum',key)

    },
     shoucang(){
          this.shou =! this.shou
         
      if (this.shou == true) {
        this.collect = '已关注'
      } else if (this.shou == !true) {
        this.collect = '+关注'
      }
          
      }
  },
  name: 'Three',
  data() {
    return {
      privilegesList: [],
      songSheetList: [],
      shou:false,
      desc:'',
      collect:"+"
   
    }
  },
  components: {
    Footer
  },
  created() {
    let num = this.$route.query.geshouId
    console.log(num)

        //请求列表
     this.axios.get('/info/artist/top/song?id=' + num).then(res => {
      console.log(res.data.songs);
    //   this.$refs.img.src = res.data.playlist.coverImgUrl
      this.privilegesList = res.data.songs
      
    //   this.title = res.data.playlist.description
    })

    //请求上面歌手详情
    this.axios.get('/info/artist/desc?id='+num).then(res=>{
        console.log(res.data.briefDesc)
        this.desc=res.data.briefDesc
    })
    // 请求歌手图片
    
   

     localStorage.setItem('listLength', this.privilegesList.length)
      //把接口传过去
      localStorage.setItem('port', '/info/artist/top/song?id=')

      localStorage.setItem('listId', this.$route.query.geshouId)
  },
 
  destroyed() {
    console.log('组件销毁')
  }
}
</script>

<style scoped>
/* 头部区 */
.main .top {
  width: 100%;
  height: 3.56rem;
  top: 25.87rem;
  color: rgba(0, 0, 0, 1);
  background-color: #3c3c3c;
  font-size: 1.13rem;
  line-height: 150%;
  box-shadow: 0rem 0.08rem 0.08rem 0rem rgba(0, 0, 0, 0.5);
  text-align: center;
}
.topContent {
  display: flex;
  justify-content: space-between;
}
.topContent > li {
  width: 10rem;
  height: 3.56rem;
}
.topContent > li:nth-child(1) > img {
  width: 0.8rem;
  height: 1.2rem;
  margin-top: 1.3rem;
  margin-left: 1rem;
}
.shoucang{
    color: honeydew;
     margin-left: 3.875rem;
    margin-top: 1rem;
    font-size: 1rem;
    border: red solid 1px;
    padding: 2px 5px;
    border-radius: 0.75rem;
    position: absolute;
    width: 3rem;
    height: 1.5rem;
   
}
.desc{
width:90%;
height:100%;
margin: 0.63rem auto;
color: #5bc2f3;
text-overflow: -o-ellipsis-lastline;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 8;
-webkit-box-orient: vertical

}
.topContent > li:nth-child(2) > p {
  font-size: 1.13rem;
  line-height: 3.56rem;
  font-weight: 400;
  color: #ffffff;
}
.topContent > li:nth-child(3) > img {
  width: 1rem;
  height: 0.2rem;
  margin-top: 1.8rem;
  margin-left: 6rem;
}
/* 内容区 */
.content {
  flex: 1;
  overflow-y: auto;
}
.songSheet {
  width: 100%;
  min-height: 12.5rem;
  background-color: rgb(236, 236, 236);
  overflow: hidden;
}
.songSheet > dl {
  width: 100%;
  height: 8.13rem;
}
.songSheet > dl > dt > img {
  width: 7.5rem;
  height: 7.5rem;
  margin-top: 0.63rem;
  margin-left: 0.63rem;
  float: left;
}
.share {
  width: 100%;
  height: 4.12rem;
  margin-top: 0.3rem;
}
.icon {
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
}
.icon > li > img {
  widows: 1.5rem;
  height: 1.5rem;
  margin-left: 0.3rem;
  margin-bottom: 0.3rem;
}
.icon > li > em {
  color: rgba(255, 255, 255, 1);
}
.play {
  width: 100%;
  height: 2.8rem;
}
.play > img {
  width: 1.25rem;
  height: 1.25rem;
  float: left;
  margin-left: 0.63rem;
  margin-top: 0.63rem;
}
.play > p {
  width: 21rem;
  font-size: 0.81rem;
  color: rgba(80, 80, 80, 1);
  line-height: 2.5rem;
  float: right;
  border-bottom: solid 1px #e4e4e6;
}
.music {
  width: 100%;
}
.music > li {
  width: 100%;
  height: 2.94rem;
}
.music > li > div:nth-child(1) {
  width: 2.5rem;
  height: 2.88rem;

  float: left;
}
.music > li > div:nth-child(1) > p {
  color: rgba(80, 80, 80, 1);
  font-size: 0.81rem;
  line-height: 2.88rem;
  text-align: center;
}
.music > li > div:nth-child(2) {
  width: 15.3rem;
  height: 2.88rem;

  float: left;
}
.music > li > div:nth-child(2) > p {
  color: rgba(80, 80, 80, 1);
  font-size: 0.81rem;
  margin-top: 0.3rem;
}
.music > li > div:nth-child(2) > span {
  color: rgba(153, 153, 153, 1);
  font-size: 0.63rem;
}
.music > li > div:nth-child(3) {
  width: 5rem;
  height: 2.88rem;
  float: left;
}
.music > li > div:nth-child(3) > img:nth-child(1) {
  width: 1rem;
  height: 1rem;
  float: left;
  margin-left: 0.8rem;
  margin-top: 1rem;
}
.music > li > div:nth-child(3) > img:nth-child(2) {
  width: 1rem;
  height: 1rem;
  float: left;
  margin-left: 0.8rem;
  margin-top: 1rem;
}
.height {
  min-height: 3rem;
}
</style>
