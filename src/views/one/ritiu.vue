<template>

<div class="main">
  <Header class="top">
    <router-link :to="{name:'one'}"><i class="iconfont icon-zuo"></i></router-link>
    <h3>每日推荐</h3>
    <!-- <router-link> -->
      <i class="iconfont icon-yinle"></i>
    <!-- </router-link> -->
  </Header>
  <div class="con">
    <div class="banner">
      <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585309982874&di=2c808909f233d07ce2dc9825f040304a&imgtype=0&src=http%3A%2F%2Fwww.diyimei.net%2Fupload%2F2018%2F1527002480264995.jpg" alt="">
      <p>根据你的音乐口味,每天 6:00 更新</p>
    </div>
    <div class="bo">
      <i class="iconfont icon-bofang"></i>
      <h3>全部播放</h3>
    </div>
    <router-link
          v-for="(item, index) in dailySongs"
          :key="index"
          :to="{name:'play',query: { musicId: item.id }}"
          
        >
    <ul  >
      <li :key="index" @click="clearOther(index)">
        <div>
          <h3>{{item.name}}</h3>
          <p>{{item.artists[0].name}}</p>
        </div>
        <i class="iconfont icon-diandiandianshu"></i>
      </li>
      
    </ul>
    </router-link>
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
      dailySongs:[]
    }
  },
  components:{
    Footer
  },
  activated(){
   this.axios.get('/info/recommend/songs').then(res=>{
      this.dailySongs=res.data.data.dailySongs
      console.log( this.dailySongs)
      localStorage.setItem('port', '/info/recommend/songs')
      localStorage.setItem('isId', 'dailySongs')
      localStorage.setItem('listLength', this.dailySongs.length)

     
    })
  },
   
  methods:{
    clearOther(key){
      console.log(key)
      localStorage.setItem('listId', '')
      localStorage.setItem('musicNum', key)

     

    }
  }

}

</script>

<style scoped>
.main{display: flex;flex-direction: column;}
.main .top{background:rgb(25,34,39);height:3.56rem;display:flex;align-items: center; justify-content:space-between;box-sizing: border-box;padding:0 1rem;}
.main .top i{color: #fff;font-size:1.8rem;}
.main .top h3{color: #fff;}
.main .con{flex: 1;box-sizing: border-box;padding-bottom:3rem;overflow-y: auto;}
.main .con .banner{width:100%;height:12.94rem;position: relative;}
.main .con .banner img{width:100%;height:100%;background: #333;}
.main .con .banner p{width:100%;height:2.83rem;color: #fff;position: absolute;bottom: 0;left:0.5rem;line-height:2.83rem;}
.main .con .bo{width:100%;height:3.23rem;display: flex;background:rgb(37, 29, 29);align-items: center;border-radius:5px;}
.main .con .bo i{width: 3.23rem;color: #fff;text-align: center;font-size: 1.6rem;}
.main .con .bo h3{flex: 1; color: #fff;}
.main .con ul li{display: flex;background: rgb(78, 60, 77);height:3.8rem;width: 100%;align-items: center;box-sizing: border-box;padding:0 0.8rem;border-radius:5px;border-bottom:1px solid rgb(139, 137, 137);}
.main .con ul li div{flex: 1;}
.main .con ul li div h3{height:2.1rem;font-size:1.05rem;color: #fff;line-height: 2.1rem;}
.main .con ul li div p{height:1.05rem;font-size:0.81rem;color: rgb(218, 216, 216);line-height: 1.05rem;}
.main .con ul li i{width:3rem;font-size: 1.3rem;text-align: center;color: #fff;font-weight: 900;}

</style>

