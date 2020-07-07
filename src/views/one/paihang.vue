<template>
   <div class="content">
        <div class="tiu-jian-mv">
          <div class="tj-t">
            每日一乐官方榜
          </div>
          <div class="tj-b">
            <ul>
              <router-link tag='li' :to="{ name: 'phItem',query:{num : 3}}">
                <div class="tj-img">
                  <img src="" ref="img2" alt="" />
                  <h2>飙升榜</h2>
                </div>
                <div class="tj-txt">
                  <p v-for="(item,index) in smallSongList2" :key="index">{{index+1}}. {{item.name}} -  {{item.ar[0].name}}</p>
                </div>
              </router-link>
              <router-link tag='li' :to="{ name: 'phItem',query:{num : 1}}">
                <div class="tj-img">
                  <img src="" ref="img" alt="" />
                  <h2>热歌榜</h2>
                </div>
                <div class="tj-txt">
                  <p v-for="(item,index) in smallSongList" :key="index">{{index+1}}. {{item.name}}  -  {{item.ar[0].name}}</p>
                </div>
              </router-link>

              <router-link tag='li' :to="{ name: 'phItem',query:{num : 0}}">
                <div class="tj-img">
                  <img src="" ref="img3" alt="" />
                  <h2>新歌榜</h2>
                </div>
                <div class="tj-txt">
                  <p v-for="(item,index) in smallSongList3" :key="index">{{index+1}}. {{item.name}} -  {{item.ar[0].name}}</p>
                </div>
              </router-link>

              <router-link tag='li' :to="{ name: 'phItem',query:{num : 4}}">
                <div class="tj-img">
                  <img src="" ref="img4" alt="" />
                  <h2>电音榜</h2>
                </div>
                <div class="tj-txt">
                  <p v-for="(item,index) in smallSongList4" :key="index">{{index+1}}. {{item.name}} -  {{item.ar[0].name}}</p>
                </div>
              </router-link>

              <router-link tag='li' :to="{ name: 'phItem',query:{num : 17}}">
                <div class="tj-img">
                  <img src="" ref="img5" alt="" />
                  <h2>华语金曲榜</h2>
                </div>
                <div class="tj-txt">
                  <p v-for="(item,index) in smallSongList5" :key="index">{{index+1}}. {{item.name}} -  {{item.ar[0].name}}</p>
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
      smallSongList:[],
      smallSongList2:[],
      smallSongList3:[],
      smallSongList4:[],
      smallSongList5:[]


    }
  },
  //
  beforeCreate(){
    //热歌榜
    this.axios.get('/info/top/list?idx=1').then(res=>{
      for(let i=0;i<3;i++){
      this.smallSongList.push(res.data.playlist.tracks.shift());
      }
    this.$refs.img.src=this.smallSongList[0].al.picUrl
    })
    //飙升榜
    this.axios.get('/info/top/list?idx=3').then(res=>{
      console.log(res);
      for(let i=0;i<3;i++){
      this.smallSongList2.push(res.data.playlist.tracks.shift());
      }
    this.$refs.img2.src=this.smallSongList2[0].al.picUrl
    })
    //新歌榜
    this.axios.get('/info/top/list?idx=0').then(res=>{
      for(let i=0;i<3;i++){
      this.smallSongList3.push(res.data.playlist.tracks.shift());
      }
    this.$refs.img3.src=this.smallSongList3[0].al.picUrl
    })
    //电音榜
    this.axios.get('/info/top/list?idx=4').then(res=>{
      for(let i=0;i<3;i++){
      this.smallSongList4.push(res.data.playlist.tracks.shift());
      }
    this.$refs.img4.src=this.smallSongList4[0].al.picUrl
    })

    this.axios.get('/info/top/list?idx=17').then(res=>{
      for(let i=0;i<3;i++){
      this.smallSongList5.push(res.data.playlist.tracks.shift());
      }
    this.$refs.img5.src=this.smallSongList5[0].al.picUrl
    })

  },



}
</script>

<style scoped>
/* content */
.content{flex:1;overflow-y: auto;}
.content::-webkit-scrollbar {
  display: none;
}
/* 每天听些好节目 */
.tiu-jian-mv .tj-t{width: 100%;height: 3.23rem;line-height:3.23rem;color:rgba(80, 80, 80, 1);font-size: 1.13rem;font-weight:600;}
.tiu-jian-mv .tj-b ul{width: 100%;margin-bottom: 5rem;}
.tiu-jian-mv .tj-b ul li{width:100%;height:7.86rem;margin-bottom:0.98rem;display: flex;}
.tiu-jian-mv .tj-b ul li .tj-img{width:7.86rem;height: 7.86rem;background-color: gray;margin-right:0.81rem;position: relative;}
.tiu-jian-mv .tj-b ul li .tj-img h2{position: absolute;top: 0;left: 0;right: 0;bottom: 0;margin:auto;width: 7rem;height: 2rem;text-align: center;color:rgb(255, 255, 255);font-weight:900;}
.tiu-jian-mv .tj-b ul li .tj-img img{background:rgba(118, 118, 118, 1);width: 100%;height: 100%;}
.tiu-jian-mv .tj-b ul li .tj-txt{width:60%;}
.tiu-jian-mv .tj-b ul li .tj-txt p{line-height: 2.5rem;color:rgba(80, 80, 80, 1);font-size: 0.97rem;width: 90%;white-space:nowrap;overflow: hidden;text-overflow: ellipsis;}

/* 脱口秀 */
.tiu-jian .tj-t{width: 100%;height: 3.23rem;line-height:3.23rem;color:rgba(80, 80, 80, 1);font-size: 1.13rem;font-weight: 600;}
.tiu-jian .tj-b{width: 100%;overflow-x: auto;}
.tiu-jian .tj-b ul{width: 100%;display: flex;}
.tiu-jian .tj-b ul li{width:8.49rem;height:11.76rem;margin-bottom:0.98rem;margin-right: 1rem;}
.tiu-jian .tj-b ul li .tj-img{width:8.49rem;height: 8.49rem;background-color: gray;margin-bottom:0.4rem;}
.tiu-jian .tj-b ul li .tj-img img{background:rgba(118, 118, 118, 1);width: 100%;height: 100%;border-radius: 10%;}
.tiu-jian .tj-b ul li  p{text-align: center;}
.tiu-jian .tj-b ul li .tj-txt p{line-height: 2.34rem;color:rgba(128, 128, 128, 1);font-size: 0.89rem;width:19rem;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}

</style>
