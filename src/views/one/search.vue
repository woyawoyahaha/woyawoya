<template>
<div class="main">
  <header class="se-top">
    <van-search class="ipt" placeholder="搜索音乐、歌词、电台" v-model="value" @keydown.13="Serve" />
    <i @click="backBtn">取消</i>
  </header>
  <div class="se-con">
    <ul v-if="value" class="se-list" ref="aalist">
      <li v-for="(v) in musicList" :key="v.id" @click="toSong(v.id)">
          {{ v.name }} - {{ v.artists[0].name }}</li>
      <li>搜索更多>></li>
    </ul>
    <ul v-else class="se-list" >
      <li>我的搜索历史</li>
      <li v-for="(v, i) in history" :key="i" @click="toIpt(v)">{{v}}</li>
    </ul>
  </div>
  <Footer></Footer>
</div>
</template>
<script>
import axios from 'axios'
import Footer from '@/components/footer/index.vue'
export default {
  data(){
    return {
      value:'',
      musicList:[],
      history:[]
    }
  },
  components:{
    Footer
  },
  methods:{
    Serve() {
      if(this.value){
        axios
        .get(`http://localhost:3000/search?keywords=` + this.value)
        .then(res => {
          // console.log(res.data.result.songs);
          this.musicList = res.data.result.songs;
          this.history.push(this.value)
          this.$refs.aalist.style.display='block'
        });
      }else{2
        this.musicList = []
      }
    },
    toSong(id){

      localStorage.setItem('id', id)

      this.$router.push({
        name:'play',
        query:{ musicId: id }
      })

      /* axios.get('/info/song/url?id='+id).then(res=>{
        console.log(res.data.data);
        // if(res.data.data[0].url){
        //   open(res.data.data[0].url)
        // }
      }) */
    },
    toIpt(v){
      this.value = v
    },
    backBtn(){
      history.go(-1)
    }
  }
}
</script>

<style scoped>
.main .se-top{height: 3.56rem;width:100%;background: #d83f37;display: flex;}
.main .se-top i{width:4rem;text-align: center;align-self: center;color: aliceblue}
.main .se-top .ipt .van-search__content{color: #493e3d;background-color: #de635c;}
.main .se-top .van-search{background: #d83f37!important;flex:1}
.main .se-con{flex: 1;overflow-y: auto;}
.main .se-con .se-list{width: 100%;overflow-y: auto; background: #eee;box-sizing: border-box;padding:1rem 1.5rem 3rem;display: none}
.main .se-con .se-list li{cursor: pointer; line-height:3rem;border-bottom: 1px solid #333;font-size:1.2rem; width:100%;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}

</style>

