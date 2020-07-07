<template>
  <div class="comment">
    <Header class="top">
      <ul class="topContent">
        <li>
          <img @click="moveBack()" src="../../img/two 7.png" />
        </li>
        <li>
          <p>评论（{{content.length}}）</p>
        </li>
        <li>
          <img src="../../img/two 12.png" />
        </li>
      </ul>
    </Header>

    <div class="content">
      <dl class="song_detailed">
        <dt>
          <img :src="MusicDetails.al.picUrl" />
        </dt>
        <dd>
          <p>{{MusicDetails.name}}</p>
          <span>{{MusicDetails.ar[0].name}}</span>
        </dd>
      </dl>
      <div class="Establish">
        <p>精彩评论</p>
      </div>
      <div class="songComment" v-for="(item,id) in content" :key="id">
        <div class="picture">
          <img :src="item.user.avatarUrl" />
        </div>
        <div>
          <p>{{item.user.nickname}}</p>
          <span>{{item.time | dateFormat}}</span>
          <p
            style="color: rgba(67, 67, 67, 1);font-size: 0.8rem;min-height:1.56rem;border-bottom: solid 0.01rem #999696"
          >{{item.content}}</p>
        </div>
        <div class="stick">
          <p>10万</p>
          <img src="../../img/two 27.svg" alt />
        </div>
      </div>
    </div>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      MusicDetails: {
        ar: [''],
        al: {}
      },
      content: []
    }
  },
  methods: {
    moveBack() {
      history.go(-1)
    }
  },
  activated() {
    this.ids = this.$route.query.ids
    this.axios
      .get('/info/comment/music?id=' + this.ids)
      .then(res => {
        this.content = res.data.comments
      }),
      this.axios
        .get('/info/song/detail?ids=' + this.ids)
        .then(res => {
          if (res.data.songs && res.data.songs.length > 0) {
            this.MusicDetails = res.data.songs[0]
          }
        })
  }
}
</script>

<style scoped>
.top {
  width: 100%;
  height: 3.56rem;
}
.topContent {
  display: flex;
  justify-content: space-between;
  background: rgba(60, 60, 60, 0.6);
}
.topContent > li {
  width: 33.33%;
  height: 3.56rem;
}
.topContent > li:nth-child(1) > img {
  width: 0.6rem;
  height: 1rem;
  margin-top: 1.2rem;
  margin-left: 1rem;
}
.topContent > li:nth-child(2) > p {
  width: 100%;
  height: 100%;
  font-size: 1.15rem;
  color: rgba(80, 80, 80, 1);
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  line-height: 3.5rem;
}
.topContent > li:nth-child(3) > img {
  width: 1.8rem;
  height: 1.8rem;
  margin-top: 1rem;
  margin-left: 6rem;
}
.content {
  height: 43rem;
  flex: 1;
  overflow-y: auto;
}
.song_detailed {
  width: 100%;
  height: 4.38rem;
  margin-top: 1.3rem;
}
.song_detailed > dt {
  float: left;
  margin-left: 0.6rem;
}
.song_detailed > dt > img {
  width: 4.38rem;
  height: 4.38rem;
}
.song_detailed > dd {
  float: left;
  margin-left: 0.6rem;
  margin-top: 0.8rem;
}
.song_detailed > dd > p {
  color: rgba(80, 80, 80, 1);
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
}
.song_detailed > dd > span {
  color: rgba(153, 153, 153, 1);
  font-size: 0.6rem;
}

.Establish {
  width: 100%;
  height: 2.02rem;
  background: rgba(238, 238, 238, 1);
  margin-top: 0.5rem;
}
.Establish > p {
  font-size: 0.7rem;
  color: rgba(80, 80, 80, 1);
  line-height: 2.02rem;
  margin-left: 0.8rem;
}
.songComment {
  width: 100%;
  min-height: 6rem;
  margin-top: 1.5rem;
}
.picture {
  width: 3.5rem;
  height: 100%;
  overflow: hidden;
  float: left;
}
.picture > img {
  width: 2.48rem;
  min-height: 2.48rem;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  border-radius: 50%;
}
.songComment > div:nth-child(2) {
  width: 67.1%;

  float: left;
}
.songComment > div:nth-child(2) > p {
  color: rgba(67, 67, 67, 1);
  font-size: 0.8rem;
  margin-top: 0.7rem;
}
.songComment > div:nth-child(2) > span {
  color: rgba(128, 128, 128, 1);
  font-size: 0.2rem;
}

.stick {
  float: right;

  width: 5rem;
  height: 100%;
}
.stick > p {
  color: rgba(128, 128, 128, 1);
  font-size: 0.63rem;
  float: left;
  margin-left: 1rem;
  margin-top: 0.6rem;
}
.stick > img {
  width: 0.88rem;
  height: 0.88rem;
  float: right;
  margin-right: 1rem;
  margin-top: 0.6rem;
}
.footer {
  width: 100%;
  height: 0.01rem;
  background: red;
}
</style>
