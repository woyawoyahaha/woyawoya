<template>
  <div class="Add">
    <header>
      <div class="Add-close" @click="Close()">
        <van-icon name="cross" />
        <span class="title">一LE正文</span>
      </div>
    </header>

    <!-- 博主内容 -->
    <div class="bozhu">
          <div class="content" v-if="isShow">
              <div  class="van-skeleton van-skeleton--animate">
                <div  class="van-skeleton__avatar van-skeleton__avatar--round" style="width: 32px; height: 32px;">
                </div>
                <div class="van-skeleton__content">
                <h3  class="van-skeleton__title" style="width: 40%;">
                </h3>
                <div class="van-skeleton__row" style="width: 100%;">
                  </div>
                    <div  class="van-skeleton__row" style="width: 100%;">
                    </div>
                    <div  class="van-skeleton__row" style="width: 60%;">
                    </div>
                </div>
            </div>
          </div>
         <div  class="van-skeleton" v-else>
            <div  class="van-skeleton__avatar van-skeleton__avatar--round" style="width: 32px; height: 32px;overflow: hidden;">
              <img :src="header" style="width: 32px; height: 32px;"/> 
            </div>
            <div class="van-skeleton__content">
            <h5 class="van-skeleton__row" style="width: 50%;font-weight: 600;color:#ff9400;">{{name}}</h5>
            <div class="van-skeleton__row zhengwen" style="width: 100%;"><span>{{content}}</span>
              </div>
              <img :src="coverImg" style="width: 60%; " v-show="pic"/> 
                <div class="video-box" v-show="vedio" >
                            <video :id="id"
                            data-isPlaying="false"
                            ref="videoPlayer"
                            :src="vediosrc" 
                            loop="loop"
                            controlsList="nodownload"
                            >
                            </video>
                           
                            <div class="video-img"  @click="clickHandle(id)">
                                <img ref="player" src="../../../public/img/tmimg.png"  alt="">
                            </div>
                        </div>
                <div  class="van-skeleton__row shuoming" style="width: 60%;">
                    #{{caption}}#
                </div>
            </div>
            </div>
          </div>
<!-- 评论区 -->
          <van-divider class="pingline" style="position: relative;top: 3rem;">评论</van-divider>
          <div class="content" style="position: relative;top: 3rem;" v-for="item in comList" :key=item._id>
              <div  class="van-skeleton">
                <div  class="van-skeleton__avatar van-skeleton__avatar--round" style="width: 32px; height: 32px;overflow: hidden;">
              <img :src="item.header" style="width: 32px; height: 32px;"/> 
            </div>
              <div class="van-skeleton__content">
                <h4  class="van-skeleton__title" style="width: 40%;color:#797978;">
                  {{item.name}}
                </h4>
                <div class="van-skeleton__row" style="width: 100%;">
                  {{item.content}}
                  </div>
                <div class="van-skeleton__row" style="width: 100%;margin-top:1rem;color:rgb(94, 91, 220);    font-size: 14px;">
                    <span style="float:left;" v-show="isShow">删除</span>
                    <van-icon name="good-job-o" style="float:right;" size="6vw" />
                </div>   
                    </div>
                </div>
            </div>
          </div>
   
 
    
</template>

<script>
import { get } from "@/utils/ajax";

export default {
  name: "AddContent",
  data() {
    return {
      id:'',
      vediosrc:'',
      pic:false,
      vedio:false,
      isShow:false,
      header:"",
      content:"",
      caption:"",
      name:"",
      comList:[],
      coverImg:''
    };
  },
  methods: {
    Close() {
      this.$router.push({
        name: "DUANZI"
      });
    },
     clickHandle(v){
        console.log(this.$refs.videoPlayer)

        // 点击事件传入的参数为 sid 在列表中查找对应sid的坐标
        // let index = this.$refs.videoPlayer.findIndex((ele) =>{
        //   return ele.id === v;
        // });
       // video 有个paused属性，可以判断视频是否在播放 未播放为true 正在播放为false
        if(this.$refs.videoPlayer.paused){
            // 此时paused为true
            this.$refs.player.style.display='none'
            this.$refs.videoPlayer.play() 
            // 此时paused为false
        }else{
            this.$refs.player.style.display='block';
            this.$refs.videoPlayer.pause();
        }
    },
    replayHandle(){
      window.location.reload()
    }
  },
  activated(){
   
  let other =  localStorage.getItem('type')
     if(other === 'pic'){
      this.pic = true
      this.vedio = false

      console.log("这是图片")
    }
    
     if(other === 'vedio'){
      this.pic = false
      this.vedio = true
      console.log("这是录像")
    }
    



    console.log(this.$route.query.productId)//拿到段子的id
    get('http://192.168.3.14:3009/api/v1/products/'+this.$route.query.productId, {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token")
          }
        }).then(res=>{
          console.log("这是段子信息",res)
          this.header = res.data.header
          this.content = res.data.descriptions
          this.caption = res.data.content
          this.name = res.data.name
          this.vediosrc = res.data.video
          this.id = res.data._id
          this.isShow = false
          this.coverImg = 'http://192.168.3.14:3009'+res.data.coverImg
          console.log(this.name)

        })

         get('http://192.168.3.14:3009/api/v1/comment/com/'+this.$route.query.productId, {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token")
          }
        }).then(res=>{
          this.comList = res.data.reverse()
          console.log(res.data);

          // 删除评论
          // if(localStorage.getItem('userId')===res.data.userId){
          //   this.isShow = true
          //   console.log("xiangdeng")
          // }
        })

  },
}
</script>

<style scoped>
.video-box{
        position: relative
    }
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
header {
  z-index: 99999;
 position: fixed;
  background-color: #0b5fa5;
  height: 3rem;
  width: 100%;
  border-bottom: 1px solid #ccc;
}
.Add-close {
   
  display: inline-block;
  margin-left: 2%;
  width: 100%;
  margin-top: 0.7rem;
  
  
}
.title {
  min-height: 1rem;
  margin-left: 30%;
  margin-top: 1rem;
  color: #fff;
  font-size: 19px;
}
.bozhu{
  position: relative;
  top: 3rem;
  background-color: #fff;
  min-height: 2rem;
  border: 1px solid rgb(245, 245, 241);
  padding: 1rem 0;
}
.content{
  background-color: #fff;
  margin-top: 2rem;
  min-height: 2rem;
  border: 1px solid rgb(248, 248, 245);
  padding: 1rem 0;
}
.shuoming{
  margin-top: 1rem;
  color: #514ed9;
}
.pingline{
  margin-bottom: 0.5rem 0;
}

.van-skeleton__row, .van-skeleton__title{
  background-color: white;

}
.zhengwen{
  height: auto;
  min-height: 2rem;
}
.video-box .video-img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .video-box .video-img img{
        display: block;
        width: 10vw;
        height: 10vw;
        position: absolute;
        left: 45%;
        top: 45%;
        border: 1px solid #fff;
        border-radius: 50%;

    }
    video{
      width: 70vw;
    }


</style>