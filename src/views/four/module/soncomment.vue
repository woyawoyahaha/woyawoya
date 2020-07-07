<template>
  <div>
    <div class="new">最新评论({{quantity}})</div>
    <p v-if="quantity ? '' : '你还没有评论'" class="pp">你还没有评论</p>
    <div class="npm" v-for="item in list" :key="item.id">
      <img class="npm_img" :src="item.user.avatarUrl" alt="">
      <p class="npm_p1">{{item.user.nickname}}</p><br/>
      <p class="npm_p2">{{item.time|dateFormat}}</p><br/>
      <p class="npm_p3">{{item.content}}</p>
    </div>
  </div>
</template>

<script>
// import check from '../module/PL'
export default {
  props:{
  },
  data(){
    return {
      id:'',
      list:[],
      quantity:'',
    }
  },
  created() {
    this.id=this.$route.query.id
    console.log(this.id)
     this.axios
      .get("/info/comment/event?threadId="+this.id)
      .then(res => {
        console.log(res.data.comments);
        this.list = res.data.comments;
        this.quantity=res.data.comments.length
      });
      // this.axios.get('/info/comment?t=1&type=6&threadId='+this.id+"&content="+this.$refs.buttn.value)
      // .then(res=>{
      //   console.log(res)
      // })
  }
}
</script>

<style scoped>
  .new{
    width:100%;
    height:2rem;
    background:#ddd;
    margin-top:10px;
    text-indent:3%;
    line-height:2.5;
    font-size:12px;
    color:#aaa
  }
  .npm{
    width:100%;
    height:5rem;
    border-bottom:1px solid #ccc
  }
  .npm_img{
    width:40px;
    height:40px;
    float: left;
    border-radius:50%;
    margin-top:10px;
    margin-left:10px
  }
  .npm_p1{
    float: left;
    font-size:14px;
    margin-left:15px;
    margin-top:10px
  }
  .npm_p2{
    float: left;
    font-size:10px;
    color:#ccc;
    margin-left:-43px;
    margin-top:9px;
  }
  .npm_p3{
    float: left;
    margin-left:-77px;
    margin-top:9px;
  }
  .pp{
    text-align: center;
    margin-top:10%;
    color: #ccc
  }
</style>
