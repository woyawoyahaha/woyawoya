<template>
  <div class="content">

   <div class="banner">
    <van-swipe :autoplay="3000" indicator-color="white" style="height:100%">
          <van-swipe-item v-for="(item,index) in dj" :key="index" >
            <img :src="item.pic" alt="" width="100%" height="100%"/>
          </van-swipe-item>
        </van-swipe>
   </div>
   <!-- <div class="siren">
     <div class="s-con">
       <p><i class="iconfont icon-diantai"></i></p>
       <span>私人FM</span>
     </div>
     <router-link :to="{name:'Ritiu'}" class="s-con">
      <p><i class="iconfont icon-riqi"></i></p>
      <span>每日推荐</span>
    </router-link>
    <div class="s-con">
      <p><i class="iconfont icon-paihangbang"></i></p>
      <span>音乐热榜</span>
    </div>
   </div> -->
   <!-- 推荐歌单 -->
   <div class="tiu-jian">
    <div class="tj-t">
      推荐歌单>
    </div>
    <div class="tj-b">
      <ul>
        <router-link tag="li" :to='{name:"songSheet",query:{id:item.id,pagefrom:1}}' v-for="(item) in playlists " :key="item.id" >
          <div class="tj-img">
            <img :src="item.coverImgUrl" alt="">
            <span class="iconfont icon-yinyue">{{item.trackCount}}万</span>
          </div>
          <p>{{item.name}}</p>
        </router-link>
      </ul>
    </div>
   </div>
   <!-- 最新音乐 -->
   <div class="tiu-jian">
    <div class="tj-t">
      最新音乐>
    </div>
    <div class="tj-b">
      <ul>
        <router-link tag="li" :to="{name:'songSheet',query:{id:item.id}}" v-for="(item) in playlists2" :key="item.id">
          <div class="tj-img">
            <img :src="item.coverImgUrl" alt="">
            <span class="iconfont icon-yinyue">{{item.trackCount}}万</span>
          </div>
          <p>{{item.name}}</p>
        </router-link>


      </ul>
    </div>
   </div>
   <!-- 推荐MV -->
   <div class="tiu-jian-mv">
    <div class="tj-t">
      推荐MV>
    </div>
    <div class="tj-b">
      <ul>
        <router-link tag="li" :to="{name:'mvItem',query:{id:item.id}}" v-for="(item) in playlists3" :key="item.id">
          <div class="tj-img">
            <img :src="item.picUrl" alt="">
          </div>
          <div class="tj-txt">
            <p>{{item.name}}</p>
            <p>{{item.artistName}}</p>
          </div>
        </router-link>

      </ul>
    </div>
   </div>
  </div>
</template>

<script>

export default {
  data(){
    return {
      playlists:[],
      playlists2:[],
      playlists3:[],
      dj:[]
    }
  },
  created(){
    this.axios.get('/info/dj/banner').then(res=>{
      // console.log(res.data.data);
      this.dj = res.data.data
    })

    this.axios.get('/info/top/playlist/highquality'+'?limit=6').then(res=>{
      // console.log(res.data.playlists);
      this.playlists = res.data.playlists
    })
    this.axios.get('/info/top/playlist/highquality'+'?before=1503639064232&limit=6').then(res=>{
      // console.log(res.data.playlists);
      this.playlists2 = res.data.playlists
    })
    // 推荐mv
    this.axios.get('/info/personalized/mv').then(res=>{
      // console.log(res.data.result);
      this.playlists3 = res.data.result
    })
  }

}
</script>

<style scoped>
/* content */
.content{flex:1;overflow-y: auto;box-sizing:border-box;padding-bottom: 3rem;}
.content::-webkit-scrollbar {
  display: none;
}

.content .banner{width: 100%;height:10rem;background-color: rgba(238, 238, 238, 1);}

.content .siren{width:100%;height:6.47rem;display: flex;justify-content: space-between;margin:1.29rem 0;border-bottom:1px solid #E3E5E4;}
.content .siren .s-con{flex: 1;height:6.47rem;text-align: center;}
.content .siren .s-con p{ width:4.04rem ; height: 4.04rem; background-color: #514ed9; margin:0 auto; border-radius: 50%; -webkit-border-radius: 50%; -moz-border-radius: 50%; -ms-border-radius: 50%; -o-border-radius: 50%; }
.content .siren .s-con p i{line-height:4.04rem;font-size:2.1rem;color:#eaffd9;}
.content .siren .s-con span{line-height:2.43rem;color: #363837;font-size:0.97rem;}

.tiu-jian .tj-t{width: 100%;height: 3.23rem;line-height:3.23rem;color:rgba(80, 80, 80, 1);font-size: 1.13rem;font-weight:600;}
.tiu-jian .tj-b ul{display: flex;width: 100%;flex-wrap: wrap;justify-content: space-around;}
.tiu-jian .tj-b ul li{width:8.49rem ;height:12.37rem;margin-bottom:0.98rem;}
.tiu-jian .tj-b ul li .tj-img{width:8.49rem;height: 8.49rem;position: relative;}
.tiu-jian .tj-b ul li .tj-img img{background:rgba(118, 118, 118, 1);width:100%;height:100%;border-radius: 10%;}
.tiu-jian .tj-b ul li .tj-img span{position: absolute;top: 0;right:0;font-size: 0.97rem;color: #fff;}
.tiu-jian .tj-b ul li p{height: 3.88rem;color: rgba(80, 80, 80, 1);font-size: 0.89rem;line-height:150%;padding-top:10px;box-sizing: border-box;}
/* 推荐MV */
.tiu-jian-mv .tj-t{width: 100%;height: 3.23rem;line-height:3.23rem;color:rgba(80, 80, 80, 1);font-size: 1.13rem;font-weight:600;}
.tiu-jian-mv .tj-b ul{display: flex;width: 100%;flex-wrap: wrap;justify-content: space-around;}
.tiu-jian-mv .tj-b ul li{width:47% ;height:11.16rem;margin-bottom:0.98rem;}
.tiu-jian-mv .tj-b ul li .tj-img{width:100%}
.tiu-jian-mv .tj-b ul li .tj-img img{background:rgba(118, 118, 118, 1);width:100%;height:100%;}
.tiu-jian-mv .tj-b ul li .tj-txt{width:100% ;height:3.88rem;}
.tiu-jian-mv .tj-b ul li p{ color: rgba(80, 80, 80, 1);font-size: 0.89rem;line-height:110%;padding-top:10px;box-sizing: border-box;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;}

</style>
