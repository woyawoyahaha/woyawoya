<template>
    <div class="content">
   <!-- banner -->
   <div class="banner">
     <div class="ban-l">
       <img src="@/img/gedan.jpg" alt="">
     </div>
     <div class="ban-r">
       <h2>精品歌单></h2>
       <h3>评论过万的英文歌与潜力股</h3>
       <p>听歌写评论,平平更健康</p>
     </div>
   </div>
   <!-- 推荐MV -->
   <div class="tiu-jian-mv">
    <div class="tj-t">
      <h3>全部歌单</h3>
      <p>欧美 丨 民谣 | 电子</p>
    </div>
    <div class="tj-b">
      <ul>
        <router-link tag="li" :to='{name:"songSheet",query:{id:item.id}}' v-for="(item) in playlists " :key="item.id" >
          <div class="tj-img">
            <img :src="item.coverImgUrl" alt="">
            <span class="iconfont icon-yinyue">{{item.trackCount}}万</span>
          </div>
          <p>{{item.name}}</p>
        </router-link>


      </ul>
    </div>
   </div>
  </div>
</template>

<script>
import { get } from '../../utils/ajax'

export default {
  data(){
    return {
      playlists:[]
    }
  },
  created(){
    get('/info/top/playlist/highquality'+'?limit=10').then(res=>{
      console.log(res.data.playlists);
      this.playlists = res.data.playlists
    })
  }

}
</script>

<style scoped>
/* content */
.content{flex:1;overflow-y: auto;}
.content::-webkit-scrollbar {
  display: none;
}
.content .banner{width: 100%;height:9.7rem;background:url("http://img4.imgtn.bdimg.com/it/u=1040628782,1354239620&fm=26&gp=0.jpg");background-size:100% 100%; display: flex;}
.banner .ban-l{width: 7.82rem;height:7.82rem;widows: 7.82rem;background:red;margin:0.94rem 0.63rem 0;overflow: hidden;}
.ban-l img{width: 100%}
.banner .ban-r{height: 5.63rem;margin:0.94rem 0.63rem 0;line-height:2.1rem;}
.banner .ban-r h2{margin-bottom: 0.97rem;font-size: 1.1rem;color: rgba(255, 255, 255, 1);}
.banner .ban-r h3{font-size:1rem;color: rgba(255, 255, 255, 1);}
.banner .ban-r p{font-size:0.9rem;color: rgba(255, 255, 255, 1);}


/* 推荐MV */
.tiu-jian-mv .tj-t{width: 100%;height: 3.23rem;line-height:3.23rem;color:rgba(80, 80, 80, 1);font-size: 1.13rem;display: flex;justify-content: space-between;box-sizing: border-box;padding:0 1rem;}
.tiu-jian-mv .tj-t p{font-size: 0.9rem;}
.tiu-jian-mv .tj-b ul{display: flex;width: 100%;flex-wrap: wrap;justify-content: space-around;}
.tiu-jian-mv .tj-b ul li{width:45% ;height:15.59rem;margin-bottom:0.98rem;}
.tiu-jian-mv .tj-b ul li .tj-img{width:100%;position:relative;}
.tiu-jian-mv .tj-b ul li .tj-img img{background:rgba(118, 118, 118, 1);width:100%;height:100%;border-radius: 10%;}
.tiu-jian-mv .tj-b ul li .tj-img i{position: absolute;top: 0;right:4rem;font-size: 1.21rem;color: rgba(118, 118, 118, 1);}
.tiu-jian-mv .tj-b ul li .tj-img span{position: absolute;top: 0;right:0.8rem;font-size: 0.97rem;color: rgba(118, 118, 118, 1);}
.tiu-jian-mv .tj-b ul li p{height: 3.23rem;color: rgba(80, 80, 80, 1);font-size: 0.89rem;line-height:150%;}

</style>
