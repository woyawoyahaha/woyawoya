<template>
  <div class="main">
    <!-- 头部 -->
    <Header class="top">
      <ul class="topContent">
        <li>
          <img @click="moveBack()" src="../../img/two 7.png" />
        </li>
        <li>
          <p>歌单</p>
        </li>
        <li>
          <img src="../../img/two 8.png" />
        </li>
      </ul>
    </Header>
    <!-- 内容区 -->
    <div class="content">
      <div class="songSheet">
        <dl>
          <dt>
            <img :src="songSheetList.coverImgUrl" />
          </dt>
          <dd style="width:15.1rem;height:2.81rem;float:right;margin-top: 0.63rem">
            <p style="color:rgba(255, 255, 255, 1);line-height:2.81rem">{{songSheetList.name}}</p>
          </dd>
          <dd style="width:15.1rem;height:2.81rem;float:right">
            <img
              style="width:1.85rem;height:1.85rem;border-radius:0.94rem;float:left"
              :src="this.$cookies.get('avatarUrl')"
            />
            <p
              style="margin-left:2.5rem;color:rgba(255, 255, 255, 1)"
            >{{this.$cookies.get('nickname')}}</p>
          </dd>
        </dl>

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
          :to="{name:'play',query: { musicId: item.id,pagefrom:1}}"
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
import Router from 'vue-router'
export default {
  created(){
    console.log(this.$route)

  },
  methods: {
    moveBack() {
      console.log()
      history.go(-1)
      localStorage.clear()

    },

    //点击获取id，把id存到localStorage里面
    musicIds(id,key) {
      
      localStorage.setItem('id', id)
      
      localStorage.setItem('musicNum',key )

    },
    getList(jiekou){
     
         // activated created
    this.id = this.$route.query.id
    //把歌单id传过去
      localStorage.setItem('listId', this.id)

    this.axios
      .get(jiekou + this.id)
      .then(res => {
      
           this.privilegesList = res.data.playlist.tracks
          this.songSheetList = res.data.playlist
       
       
        // console.log(this.privilegesList)
      //歌单长度传过去
      localStorage.setItem('listLength', this.privilegesList.length)
      //把接口传过去
      localStorage.setItem('port', jiekou)


      })
    }
  },
  name: 'Three',
  data() {
    return {
      privilegesList: [],
      songSheetList: [],
      
    }
  },
    beforeRouteEnter (to, from, next) {
        let jiekou= ''
      
      if (from.path==="/index/gedan"){
        console.log("从歌单来")
        jiekou= '/info/playlist/detail?id='
         next(vm=>{
            vm.getList(jiekou)
            
         })
        return
      }
      else if(from.path==="/index/gexing"){
         console.log("主页来")
        jiekou= '/info/playlist/detail?id='
         next(vm=>{
            vm.getList(jiekou)
        

         })
        return
      }
       else if(from.path==="/two"){
         console.log("喜欢来")
        jiekou= '/info/playlist/detail?id='
         next(vm=>{
            vm.getList(jiekou)
        

         })
        return
      }
     
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  } ,
  components: {
    Footer
   
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
  height: 12.5rem;
  background-color: rgba(85, 85, 85, 1);
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
  width: 15rem;
  height: 2.88rem;

  float: left;
}
.music > li > div:nth-child(2) > p {
  color: rgba(80, 80, 80, 1);
  font-size: 0.81rem;
  margin-top: 0.3rem;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
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
