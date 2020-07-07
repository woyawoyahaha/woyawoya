<template>
  <div class="content">
        <!-- banner -->
        <div class="banner">
          <van-swipe :autoplay="3000" indicator-color="white" style="height:100%">
          <van-swipe-item v-for="(item,index) in dj" :key="index" >
            <img :src="item.pic" alt="">
          </van-swipe-item>
        </van-swipe>
        </div>
        <!-- 电台分类 -->
        <!-- <div class="sort">
          <div class="sort-con">
            <i class="iconfont icon-yinle"></i>
            <p>电台推荐</p>
          </div>
          <router-link :to="{name:'ranking'}">
            <div class="sort-con">
            <i class="iconfont icon-paihangbang"></i>
            <p>电台排行</p>
          </div>
          </router-link>
        </div> -->

        <!-- 每天听些好节目 -->
        <!-- <div class="tiu-jian-mv">
          <div class="tj-t">
            每天听些好节目>
          </div>
          <div class="tj-b">
            <ul>
              <li>
                <div class="tj-img">
                  <img src="" alt="" />
                </div>
                <div class="tj-txt">
                  <h3>【3D环绕合集】你也要来玩吗？很...</h3>
                  <p>年度最受欢迎个性推进按歌曲</p>
                </div>
              </li>
            </ul>
          </div>
        </div> -->
        <!-- 脱口秀 -->
        <div class="tiu-jian" v-for="(item,index) in tuiList" :key=index>
          <div class="tj-t">
           {{item.categoryName}}>
          </div>
          <div class="tj-b">
            <ul>
              <router-link tag="li" v-for="item in item.radios" :key="item.id" :to="{name:'zhuboItem',query:{id:item.id,pagefrom:3}}">
           
                <div class="tj-img">
                  <img :src="item.picUrl" alt="" />
                </div>
                <p>{{item.name}}</p>
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
      dj:[],
      tuiList:[]
    }
  },

  created(){

    this.axios.get('/info/dj/banner').then(res=>{
      // console.log(res.data.data);
      this.dj = res.data.data
    })

    this.axios.get('/info/personalized/djprogram').then(res=>{
      console.log(res.data)
      // this.tuiList=res.data.result
    })

    //创作翻唱
    this.axios.get('/info/dj/category/recommend').then(res=>{
      console.log(res.data.data)
      this.tuiList=res.data.data
    })
  }

}
</script>

<style scoped>
/* content */
.content{flex:1;overflow-y: auto;margin-bottom: 3rem;}
.content::-webkit-scrollbar {
  display: none;
}
.content .banner{width: 100%;height:10.51rem;}
.content .banner img{width: 100%;height:100%;background: brown;}

/* 电台分类 */
.content .sort{width:100%;height:2.43rem;margin-top: 1.05rem;margin-bottom:1.7rem; display: flex;justify-content: space-around;}
.content .sort .sort-con{display: flex;line-height:2.43rem;}
.content .sort .sort-con i{font-size: 1.6rem;}
.content .sort .sort-con p{font-size: 1.05rem;padding: 0 0.8rem;}

/* 每天听些好节目 */
.tiu-jian-mv .tj-t{width: 100%;height: 3.23rem;line-height:3.23rem;color:rgba(80, 80, 80, 1);font-size: 1.13rem;font-weight:600;}
.tiu-jian-mv .tj-b ul{width: 100%;}
.tiu-jian-mv .tj-b ul li{width:100%;height:5.66rem;margin-bottom:0.98rem;display: flex;}
.tiu-jian-mv .tj-b ul li .tj-img{width:5.66rem;height: 5.66rem;background-color: gray;margin-right:0.81rem;}
.tiu-jian-mv .tj-b ul li .tj-img img{background:rgba(118, 118, 118, 1);}
.tiu-jian-mv .tj-b ul li .tj-txt h3{line-height: 2.91rem;color: rgba(80, 80, 80, 1);font-size: 1.05rem;width:16rem;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}
.tiu-jian-mv .tj-b ul li .tj-txt p{line-height: 2.34rem;color:rgba(128, 128, 128, 1);font-size: 0.89rem;width:16rem;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}

/* 脱口秀 */
.tiu-jian{width: 100%;min-height: 1rem;}
.tiu-jian .tj-t{width: 100%;height: 3.23rem;line-height:3.23rem;color:rgba(80, 80, 80, 1);font-size: 1.13rem;font-weight: 600;}
.tiu-jian .tj-b{overflow: auto;}
.tiu-jian .tj-b ul{width: 100%;;display: flex;justify-content: space-around;}
.tiu-jian .tj-b ul li{width:8.49rem;height:7.76rem;margin-bottom:0.98rem;float: left;}
.tiu-jian .tj-b ul li .tj-img{width: 6rem; height: 6rem;border-radius: 10%;background-color: gray;overflow: hidden;margin-bottom: 0.4rem;}
.tiu-jian .tj-b ul li .tj-img img{background:rgba(118, 118, 118, 1);width: 100%;height: 100%;}
.tiu-jian .tj-b ul li {font-size: 0.8rem;}
.tiu-jian .tj-b ul li .tj-txt p{line-height: 2.34rem;color:rgba(128, 128, 128, 1);font-size: 0.89rem;width:19rem;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}

</style>
