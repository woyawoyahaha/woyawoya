<template>
  <div class="whole">
    <Header class="top">
      <ul class="topContent">
        <li>
          <img @click="moveBack()" src="../../img/two 7.png" />
        </li>
        <li>
          <p>{{MusicDetails.name}}</p>
          <span>{{MusicDetails.ar[0].name}}</span>
        </li>
        <li>
          <img src="../../img/two 12.png" />
        </li>
      </ul>
    </Header>

<!-- 音乐大小     -->
    <van-slider v-model="value" @change="setVol(value)" />


    <div class="content">
      <div class="play" @click="songHandle" v-show="lyric">
        <img :src="MusicDetails.al.picUrl" />
      </div>
      <div class="lyric" v-show="song" @click="songHandle">
        <p v-for="(item,index) in songList" :key="index">{{item}}</p>
      </div>
    </div>
    <div class="share">
      <ul>
        <li v-if="zan" @click="dianzan">
          <img  src="../../img/two 17.svg" />
        </li>
        <li v-else class="likehang">
          <van-icon  class="like" name="like"  @click="dianzan"/>
        </li>
        <li>
          <img @click="downLoad" src="../../img/two 18.svg" />
        </li>
        <li>
          <img @click="runSong" src="../../img/two 19.svg" />
        </li>
        <li>
          <img src="../../img/two 20.svg" />
        </li>
      </ul>
    </div>
    <footer>

      <!-- 设置播放时间 -->
      <div class="playMusic">
        <p>{{timeplan}}</p>
        <!-- <van-slider v-model="value" @change="setVol(value)" /> -->

         <van-slider id="playtime" v-model="jindu" @change="playtime(jindu)" />
        <p>{{allTime}}</p>
      </div>
      
      <!-- 播放键 -->
      <ul class="suspend">
        <!-- <li>
          <img src="../../img/two 21.svg" />
        </li> -->
        <li id="last">
          <img src="../../img/two 22.svg" @click="lastMusic(-1)"  />
        </li>
        <li id="off">
          <audio id="audio" ref="audio" :src="muiscList.url" autoplay loop @timeupdate="timeupdate"></audio>
          <img @click="playHandle" v-if="play" src="../../img/two 23.svg" />
          <img @click="playHandle" v-else src="../../img/two 26.svg" />
        </li>
        <li id="next">
          <img src="../../img/two 24.svg" @click="lastMusic(1)"/>
        </li>
        <!-- <li>
          <img src="../../img/two 25.svg" />
        </li> -->
      </ul>
    </footer>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue';
import moment from 'moment'
import { Slider } from 'vant';
Vue.use(Slider);
import { Toast } from 'vant';

export default {
  name: 'play',
  data() {
    return {
      //声音
      isClick:1,
      zan:true,
      jindu:0,
      allTime:'',
      max:0,
      timeplan:'0',
      value: 100,
      MusicDetails: {
        ar: [''],
        al: {},
        
      },
   
      lyric: true,
      song: false,

      songList: [],
      muiscList: {},

      isPlaying: true,

      play: true,
      // suspend: false
      //歌单的id
      // listId:localStorage.getItem('listId'),
      //歌曲位置
      musicNum:Number(localStorage.getItem('musicNum')),
      //上首歌的id
     
      lastM:'',
      listLength:localStorage.getItem('listLength')-1,
      isId:localStorage.getItem('isId')
      
    }
  },
   created() {
     
    },
    computed:{
     
    },
  methods: {
    //播放进度条播放时间
    dianzan(){
      this.isClick += 1
      if(this.isClick%2 !==0){
          this.zan = true
      }
      else{
        this.zan = false
      }
    },
    timeupdate(e){
      this.max=e.target.duration
      let min=String(e.target.currentTime).split(".").slice(0,1)
      this.timeplan=this.setTime(min)
      this.allTime = this.setTime(this.max)
      this.jindu=min/this.max*100
      // console.log(this.jindu)
    
    } ,
    playtime(jindu){
        // e.target.currentTime=this.jindu*(e.target.duration)/100
        console.log(this.jindu)
        console.log(this.max)
        this.$refs.audio.currentTime=jindu*this.max/100
    },
    setTime(time){
      let  s = parseInt(time%60)
      let min = parseInt(time/60)
       if(s<10){
        s = '0'+parseInt(time%60) 
      }
        if(min<10){
        min = '0'+parseInt(time/60) 
      }
      return (min+':'+s)
    }
    ,
  //  声音大小
    setVol(value) {
      Toast('当前值：' + value);
      console.log(value)
    
     this.$refs.audio.volume = value/100
      // console.log(this.$refs.audio.volume)
      console.log(this.$refs.audio.duration)
      //
      // console.log(this.$refs.audio.currentTime)

    },
    //点击下载
    downLoad() {
      let id = localStorage.getItem('id')
      this.axios.get('/info/song/url?id=' + id).then(res => {
        // console.log(res.data.data);
        if (res.data.data[0].url) {
          open(res.data.data[0].url)
        }
      })
    },
   
//```````````````````````````````````````````````````````````
  // 点击上下首键

    async lastMusic(num){


      this.play = true

       let qie= Number(localStorage.getItem('musicNum'))+Number(num)

       console.log(qie)
      // 现在所拿到的接口
      // console.log("接口"+localStorage.getItem('port'))
      //现在播放的数据
      // console.log(this.muiscList)
      // 拿到上一个音乐的接口
      // console.log("歌单ID"+localStorage.getItem('listId'))
     await this.axios.get(localStorage.getItem('port') + localStorage.getItem('listId'))
      .then(res => {
        // console.log(res)
        
        let gedan=[]      

         localStorage.setItem('musicNum' ,qie) 
        console.log(qie)
        if(localStorage.getItem('musicNum')<0){
          // console.log("到头了")
          localStorage.setItem('musicNum',this.listLength) 
          // console.log(this.listLength)
        }else if(localStorage.getItem('musicNum')>this.listLength){
          // console.log("新开始")
          // console.log(this.musicNum)
          // console.log(this.listLength)
          localStorage.setItem('musicNum',0)
        }
  //根据不同接口拿到歌单
         if(this.$route.query.pagefrom===1){
          //  console.log(res);
          //  console.log(gedan);
           console.log("从主业来")
           gedan = res.data.privileges
           
        this.lastM=gedan[localStorage.getItem('musicNum')].id

         }else if(this.$route.query.pagefrom===3){
           console.log(res);
           gedan = res.data.privileges
          //  console.log(gedan);

           console.log("从排行榜来")
        this.lastM=gedan[localStorage.getItem('musicNum')].id

           
         }else if(this.$route.query.pagefrom===2){
           gedan = res.data.programs
          //  console.log(gedan);
           console.log("从电台来")
        this.lastM=gedan[localStorage.getItem('musicNum')].mainSong.id
         
         }
         console.log("此刻播放的id")
        console.log(this.lastM) 
        console.log("此刻播放的歌单")
        console.log(gedan)
        // console.log('这个初始-------------------'+this.listLength)
        
       
          
        // this.lastM=gedan[localStorage.getItem('musicNum')].id
        console.log( this.musicNum)
        console.log( this.lastM)



        localStorage.removeItem('id')
        //获取上下一首歌
        this.substitute()
        //获取页面相应的信息
        this.substituteMsg()
      })
    
    },

//获取改变的歌
    async substitute(){
      console.log(this.lastM)
      await this.axios.get('/info/song/url?id='+this.lastM).then(res=>{
        console.log(res.data)
          this.muiscList=res.data.data[0]
        })
    }
    ,


    //获取歌曲相应的信息
    async substituteMsg(){
          await axios.get('/info/song/detail?ids='+this.lastM).then(res=>{
            console.log("歌曲信息")

            console.log(res)
            this.MusicDetails = res.data.songs[0]
              console.log(this.MusicDetails.id)
    //切换歌曲换歌词
               this.musicId2 = ''
               this.acquireText()
            })    
           
        },

    //  获取歌词
    acquireText(){
      this.axios
        .get(
          '/info/lyric?id=' +
            (this.musicId2 ? this.musicId2 : this.MusicDetails.id)
        )
        .then(res => {
            let arr = res.data.lrc.lyric
          
            .replace(/[(\d)*]/g, '')
            .replace(/[.*]/g, '')
            .replace(/[:*]/g, '')
            .replace(/[\[]*]/g, '|')
            .split('|')

           this.songList = arr
          // console.log(this.songList) 
        })
        .catch(error => {
    // 请求失败，
          this.songList = ['暂无歌词']
          // console.log(error);
	})
    },

     runSong() {
      //点击这个点击事件拿id，传参，另一种query传参
      this.$router.push({
        name: 'songComment',
        query: {
          ids: this.muiscList.id
        }
      })
    },
    moveBack() {
      history.go(-1)
    },
    songHandle() {
      this.song = !this.song
      this.lyric = !this.lyric
    },
    playHandle() {

      console.log("----------------->")
      if (this.play) {
        this.$refs.audio.pause()
      } else {
        this.$refs.audio.play()
      }
      this.play = !this.play

    }
  },
  activated() {
    console.log(localStorage.getItem('musicNum'))
    this.titleType=this.$route.query.pagefrom

    this.musicId = localStorage.getItem('id')

    // console.log(this.$route.query);
    this.musicId2 = this.$route.query.musicId
       //从localStorage里面拿id， 赋值给musicId，让axios使用
    this.axios
      .get(
        '/info/song/url?id=' +
          (this.musicId2 ? this.musicId2 : this.musicId)
      )
      .then(res => {
        this.muiscList = res.data.data[0]
        console.log(this.muiscList)
      }),
      this.axios
        .get(
          '/info/song/detail?ids=' +
            (this.musicId2 ? this.musicId2 : this.musicId)
        )
        .then(res => {
          if (res.data.songs && res.data.songs.length > 0) {
            this.MusicDetails = res.data.songs[0]
          }
        }),
    this.acquireText()
  }
}
</script>

<style scoped>
.likehang{
  text-align: center;
  
}
.like{
  width: 1.5rem;
    height: 1.5rem;
    margin: 1rem auto;
    color: red;
}
.whole>>>#playtime{
  width: 71%;
  margin-left: 0;

  margin-top: 2rem;
}
.whole>>>.van-slider__bar{
  background-color: #84878a;
}
.whole>>>.van-slider{
    width: 60%;
    margin-left: 20%;
    margin-top: 3rem;
}

.whole>>>.van-slider__button{
  width: 12px;
  height: 12px;
}
.top {
  width: 100%;
  height: 2.75rem;
}
.topContent {
  width: 100%;
  height: 3.6rem;
  display: flex;
  justify-content: space-around;
  background: rgba(80, 80, 80, 0.7);
}
.topContent > li {
  width: 33.33%;
}
.topContent > li:nth-child(1) > img {
  width: 0.6rem;
  height: 1rem;
  margin-top: 1.3rem;
  margin-left: 1.3rem;
}
.topContent > li:nth-child(2) > p {
  width: 100%;
  height: 1.18rem;
  font-size: 0.88rem;
  color: rgba(80, 80, 80, 1);
  text-align: center;
  margin-top: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.topContent > li:nth-child(2) > span {
  display: block;
  color: rgba(80, 80, 80, 1);
  font-size: 0.69rem;
  text-align: center;
  width: 100%;
  height: 1.18rem;
  overflow: hidden;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 0.3rem;
}
.topContent > li:nth-child(3) > img {
  width: 1.8rem;
  height: 1.8rem;
  margin-top: 0.8rem;
    margin-left: 5rem;
}
.content {
  width: 100%;
  height: 23rem;
  margin-top: 0.8rem;
  overflow: hidden;
  flex: 1;
  overflow-y: auto;
}
.play {
  width: 10.5rem;
  height: 10.5rem;
  margin: 2rem auto;
  border: solid 2.5rem #000000;
  border-radius: 50%;
  animation: haha1 19s linear infinite;
}
@keyframes haha1 {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  75% {
    -webkit-transform: rotate(270deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

.play > img {
  width: 10.5rem;
  height: 10.5rem;
  border-radius: 50%;
}
.lyric {
  width: 100%;
  min-height: 30rem;
  padding-top: 12rem;
}
.lyric > p {
  text-align: center;
  line-height: 2rem;
}
.share > ul {
  display: flex;
  justify-content: space-around;
}
.share > ul > li {
  width: 25%;
  height: 3rem;
}
.share > ul > li > img {
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.8rem auto;
}
.share > ul > li:nth-child(3) > a > img {
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.8rem auto;
}
.playMusic {
  width: 100%;
  height: 4rem;
}
.playMusic > p {
  float: left;
  width: 3.13rem;
  height: 4rem;
  color: rgba(80, 80, 80, 1);
  font-size: 0.63rem;
  line-height: 4rem;
  text-align: center;
}
.playMusic > div {
  width: 17rem;
  height: 0.06rem;
  background-color: rgba(153, 153, 153, 1);
  float: left;
  margin: auto;
  margin-top: 2rem;
}
.playMusic > div > div {
  width: 0.63rem;
  height: 0.63rem;
  background-color: rgba(153, 153, 153, 1);
  border-radius: 50%;
  margin-top: -0.3rem;
}
.suspend {
  display: flex;
  justify-content: space-around;
}

/* .suspend > li:nth-child(1) > img {
  width: 1.63rem;
  height: 1.63rem;
  margin-top: 1.3rem;
}
.suspend > li:nth-child(2) > img {
  width: 2.13rem;
  height: 2.13rem;
  margin-top: 1rem;
}
.suspend > li:nth-child(3) > img {
  width: 3.5rem;
  height: 3.5rem;
  margin-top: 0.5rem;
} */
.suspend > li > img {
  width: 2.13rem;
  height: 2.13rem;
  margin-top: 1rem;
}
/* .suspend > li:nth-child(5) > img {
  width: 1.5rem;
  height: 1.5rem;

  margin-top: 1.3rem;
  margin-left: 1rem;
} */

</style>