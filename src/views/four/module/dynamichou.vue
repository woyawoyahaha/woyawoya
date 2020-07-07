<template>
  <div class="main">
    <div class="header_fu">
      <div class="header">
        <span class="header_span" @click="btns">〈</span>
        <span class="header_span1">动态</span>
        <img src="../../../img/two 1.jpg" />
      </div>
    </div>

    <p v-if="list.length ? '' : '你还没有发布动态'" class="pp">你还没有发布动态</p>
    <div class="middle" v-for="(item) in list" :key="item.id">
      <img class="middle_img" :src="img" alt />
      <p class="middle_p">{{cookies}}</p>
      <p class="dynamic_time">{{item.showTime | dateFormat}}</p>
      <p class="dynamic_p">{{JSON.parse(item.json).msg}}</p>
      <img class="dynamic_img" :src="item.pics[0].originUrl" alt />
      <!-- <div class="misic" @click="btnns(eventId[index],index)"> -->
      <div class="misic" @click="btnns(JSON.parse(item.json).song.id)">
        <img class="json_img" :src="JSON.parse(item.json).song.album.blurPicUrl" />
        <p class="json_p">{{JSON.parse(item.json).song.name}}</p>
        <p class="json_p1">{{JSON.parse(item.json).song.artists[0].name}}</p>
        <div></div>
      </div>
      <ul class="dynamic_ul">
        <li class="nnn1" @click="bbq(item.id)">
          <img src="../../../images/ZW.png" alt />
          <p>转发</p>
        </li>
        <router-link
          :to="{name:'PL',query:{id:item.info.threadId,time:item.showTime,img:item.pics[0].originUrl,wz:JSON.parse(item.json).msg}}"
        >
          <li>
            <img src="../../../images/PL.png" alt />
            <p>评论</p>
          </li>
        </router-link>
        <li class="app" @click="dzbtn(item.info.threadId)">
          <img src="../../../images/DZ.png" alt />
          <p>赞</p>
        </li>
      </ul>
    </div>
    <audio class="aaaa" id="music" :src="listmic.url" autoplay></audio>
    <div class="footer_fot">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from '@/components/footer/index.vue'
export default {
  name: 'Four',
  components: {
    Footer
  },
  data() {
    return {
      list: [],
      img: this.$cookies.get('avatarUrl'),
      cookies: '',
      isLogined: false,
      song: [],
      listmic: {},
      eventId: []
    }
  },

  methods: {
    btns() {
      history.go(-1)
    },
    bbq(id) {
      // console.log(id)
      let token = this.$cookies.get('token')
      console.log(token)
      this.axios
        .get(
          'info/event/forward?evId=' +
            id +
            '&uid=' +
            this.$cookies.get('id') +
            '&forwards=111',
          {
            headers: {
              Authorization: 'Bearer ' + token
            }
          }
        )
        .then(res => {
          console.log(res)
        })
    },
    dzbtn(id) {
      this.axios
        .get(
          '/info/comment/like?type=6&cid=' +
            1419532712 +
            '&threadId=' +
            id +
            '&t=' +
            1
        )
        .then(res => {
          console.log(res)
        })
    },
    //获取音乐api
    btnns(id, index) {
      console.log(id, index)
      console.log(this.listmic)
      this.axios.get('/info/song/url?id=' + id).then(res => {
        console.log(res.data.data)
        this.listmic = res.data.data[0]
      })
      var audio = document.getElementById('music')
      if (audio !== null) {
        if (this.playFlag) {
          audio.pause()
          this.playFlag = false
        } else {
          audio.currentTime = 0
          audio.play()
          this.playFlag = true
        }
      }
    }
  },
  created() {
    this.cookies = this.$cookies.get('nickname')
    //  this.$cookies.get('nickname')
    let that = this

    that.axios
      .get('/info/user/event?uid=' + that.$cookies.get('id'))
      .then(res => {
        console.log(res.data.events)
        that.list = res.data.events
        this.list.forEach(item => {
          let ll = JSON.parse(item.json).song.id
          this.eventId.push(ll)
        })
        console.log(this.eventId)
      })
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.pp {
  text-align: center;
  margin-top: 10%;
  color: #ccc;
}
.main {
  height: 100%;
}
.header_fu {
  width: 100%;
  min-height: 3rem;
}
.header {
  width: 100%;
  height: 3rem;
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

.middle {
  width: 100%;
  height: 70%;
  border-bottom: 1px solid #cccccc;
}
.middle_img {
  width: 10%;
  border-radius: 50%;
  margin: 5%;
  float: left;
}
.middle_p {
  width: 70%;
  margin-top: 6%;
  color: royalblue;
  font-weight: 700;
  font-size: 14px;
}

.footer_fot {
  min-height: 49px;
}
.dynamic_time {
  font-size: 8px;
  color: #ccc;
}
.dynamic_p {
  margin-top: 1%;
  font-size: 16px;
}

.dynamic_img {
  margin-left: 20%;
  width: 30%;
  height: 50%;
  margin-top: 2%;
}
.dynamic_ul {
  width: 43%;
  display: flex;
  justify-content: space-between;
  margin-left: 20%;
  margin-top: 1%;
}
.dynamic_ul li p {
  float: left;
  font-size: 12px;
  margin-left: 3px;
}
.dynamic_ul li img {
  width: 1rem;
  height: 1rem;
  float: left;
  /* margin-bottom:10px */
}

.misic {
  width: 70%;
  height: 2.5rem;
  background: #f1f3f2;
  margin-left: 20%;
  cursor: pointer;
}
.json_p {
  font-size: 12px;
  line-height: 1.5;
  margin-left: 3rem;
}
.json_p1 {
  font-size: 10px;
  margin-left: 3rem;
}
.json_img {
  width: 2rem;
  height: 2rem;
  float: left;
  margin-top: 3px;
  margin-left: 3px;
}

.ppppp {
  text-align: center;
}
.aaaa {
  width: 120px;
}
.nnn1 {
  cursor: pointer;
}
.app {
  cursor: pointer;
}
</style>
"{"msg":"测试第二次","song":{"name":"那女孩对我说 (完整版)","id":1372796676,
"position":0,"alias":[],"status":0,"fee":8,"copyrightId":1372818,"disc":"01",
"no":1,"artists":[{"name":"Uu","id":32208979,"picId":0,"img1v1Id":0,
"briefDesc":"","picUrl":"http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg"
,"img1v1Url":"http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
"albumSize":0,"alias":[],"trans":"","musicSize":0}],
"album":{"name":"那女孩对我说","id":79882922,"type":"EP/Single","size":2,"picId":109951164161042589,
"blurPicUrl":"http://p1.music.126.net/tXo6kGSy27gXlQzOI2O5BA==/109951164161042589.jpg",
"companyId":0,"pic":109951164161042589,"picUrl":"http://p1.music.126.net/tXo6kGSy27gXlQzOI2O5BA==/109951164161042589.jpg",
"publishTime":1561996800000,"description":"","tags":"","company":"鲸鱼向海","briefDesc":"",
"artist":{"name":"","id":0,"picId":0,"img1v1Id":0,"briefDesc":"","picUrl":"http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
"img1v1Url":"http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
"albumSize":0,"alias":[],"trans":"","musicSize":0},"songs":[],"alias":[],"status":0,
"copyrightId":1372818,"commentThreadId":"R_AL_3_79882922","artists":[{"name":"Uu","id":32208979,
"picId":0,"img1v1Id":0,"briefDesc":"","picUrl":"http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
"img1v1Url":"http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg","albumSize":0,"alias":[],"trans":"",
"musicSize":0}],"img80x80":"http://p2.music.126.net/tXo6kGSy27gXlQzOI2O5BA==/109951164161042589.jpg?param=80x80x1"},
"starred":false,"popularity":100.0,"score":100,"starredNum":0,"duration":280555,"playedNum":0,"dayPlays":0,"hearTime":0,
"ringtone":"","crbt":null,"audition":null,"copyFrom":"","commentThreadId":"R_SO_4_1372796676","rtUrl":null,"ftype":0,
"rtUrls":[],"copyright":0,"hMusic":{"name":null,"id":3814411576,"size":11224365,"extension":"mp3","sr":48000,"dfsId":0,
"bitrate":320000,"playTime":280555,"volumeDelta":-37221.0},"mMusic":{"name":null,"id":3814411577,"size":6734637,"extension":"mp3",
"sr":48000,"dfsId":0,"bitrate":192000,"playTime":280555,"volumeDelta":-34617.0},"lMusic":{"name":null,"id":3814411578,"size":4489773,
"extension":"mp3","sr":48000,"dfsId":0,"bitrate":128000,"playTime":280555,"volumeDelta":-32924.0},"bMusic":{"name":null,"id":3814411578,
"size":4489773,"extension":"mp3","sr":48000,"dfsId":0,"bitrate":128000,"playTime":280555,"volumeDelta":-32924.0},"rtype":0,"rurl":null,"mvid":0,"mp3Url":null}}"
