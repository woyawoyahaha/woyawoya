<template>
    <div id="vedio">
        <van-icon @click="replayHandle" name="replay" color="#046cd4" size="8vw" />
            <ul>
                <li v-for="item in list"  :key="item._id">
                    <van-skeleton title avatar :row="3"  :loading="loading">
                        <van-image
                            round
                            width="2rem"
                            height="2rem"
                            :src="item.header"
                        />
                        <strong>{{item.name}}</strong>
                        <p  @click="tiaoping(item._id)">{{item.descriptions}}</p>
                        <div class="video-box">
                            <video :id="item._id"
                            data-isPlaying="false"
                            ref="videoPlayer"
                            :src="item.video" 
                            loop="loop"
                            controlsList="nodownload"
                             
                            >
                            </video>
                            <p class="biaoti">#{{item.content}}#</p>
                            <div @click="clickHandle(item._id)"
                            class="video-img">
                                <img ref="player" src="../../../public/img/tmimg.png" alt="">
                            </div>
                        </div>
                        <div>
                            
                            <van-icon name="comment-o" size="6vw" is-link @click="showPopup($event,item._id,item.up)"/>
                            <van-icon name="good-job-o" size="6vw"   :class="item.type?'text-red':'text-green'" @click="setcolor($event,item._id)"/>
                        </div>
                    </van-skeleton>
                </li>
            </ul>
            <div class="foot">

            </div>
    </div>
</template>


<script>
import { get } from '../../utils/ajax'

export default {
    data(){
        return{
            show: false,
            loading:true,
            list:[],
             commentInfo:{
                productId:'',
                content: '',
                userId:"",
                up:0,
                header:'',
                name:'',

            }
        }
    },
    mounted() {
        localStorage.setItem("type","vedio");
    this.loading = false;
    },
    name:'Vedio',
    created(){//组件创建之后之行的内容，发get请求
        // get("/le/getJoke?count=30&type=video").then(res=>{
        //     this.list = res.data.result
        //     console.log(this.list)
        // })
         get('http://192.168.3.14:3009/api/v1/products', {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token")
          }
        }).then(res=>{
            console.log("后台的爆笑段子:");
            var aSearch = [];
            res.data.products.forEach(function(ele){//循环外层数组
            if(ele.type=='video'){
                aSearch.push(ele)
            }
             
            return  
            });
           console.log(aSearch);
          this.list = aSearch
         
            // this.listText = res.data.result
        })
    },
    methods:{
        setcolor(event,id){
                    event.cancelBubble = true; //阻止事件冒泡
                    this.list.forEach((item)=>{
                        if(item._id === id){
                       item.type = !item.type
                     
                      
                        }
                    })
                },
        tiaoping(id){
                    this.$router.push({name:"comment",query: {productId: id }})
                    console.log(id)

                },
                onSubmit(values) {
                 console.log('submit', values);
                post('http://192.168.3.14:3009/api/v1/comment', this.commentInfo,{
                headers: {
                    authorization: "Bearer " + localStorage.getItem("token")
                }
                }).then(res=>{
                    console.log(res)
                    this.show = false;
                    this.commentInfo.content=""
                    this.commentInfo.up = ''
            
                }).catch(function(error){
                        this.$router.push({'name':login})//错误处理 相当于error
                        })
                    },
                showPopup(event,id) {
                    event.cancelBubble = true; //阻止事件冒泡
                    this.commentInfo.productId = id;
                    console.log("点开弹出框了",this.commentInfo.productId)
                this.show = true;
                },
    clickHandle(v){
        // 点击事件传入的参数为 sid 在列表中查找对应sid的坐标
        // console.log(this.$refs.videoPlayer)

        let index = this.$refs.videoPlayer.findIndex((ele) =>{
          return ele.id === v;
        });
       // video 有个paused属性，可以判断视频是否在播放 未播放为true 正在播放为false
        if(this.$refs.videoPlayer[index].paused){
            // 此时paused为true
            this.$refs.player[index].style.display='none'
            this.$refs.videoPlayer[index].play() 
            // 此时paused为false
        }else{
            this.$refs.player[index].style.display='block';
            this.$refs.videoPlayer[index].pause();
        }
    },
    replayHandle(){
      window.location.reload()
    }
}
}

</script>

<style>
     .text-red{
    color: gray;
    }
    .text-green{
    color: red;
    }
    .van-sticky{
        z-index: 1000;
        text-align: center;
        padding-top: 3vw;
        background:#F7F8FA;
        border-bottom-left-radius: 3vw;
        border-bottom-right-radius: 3vw
    }
    .van-divider{
        margin-bottom: 0
    }
    #vedio>.van-icon{
        background: rgba(240, 240, 240, 0.8);
        box-shadow: 0px 0px 2.5vw #888888;
        border-radius: 2vw;
        position: fixed;
        bottom: 20vw;
        right: 8vw;
        z-index: 1000;
    }
    #vedio ul{
        overflow: hidden;
        background: rgba(180,180,180,0.6)
    }
    /* 试图隐藏滚动条 但很显然没有成功 */
    /* #vedio ul::-webkit-scrollbar{display: none}
    #vedio ul{-ms-overflow-style: none}
    #vedio ul{overflow: -moz-scrollbars-none; } */

    #vedio ul li {
        width: 96vw;
        overflow: hidden;
        background: white;
        border-radius: 5vw;
        position: relative;
        padding-bottom: 2vw;
        margin: 2vw 2vw 3vw;
    }
    #vedio ul li .van-image{
        margin-top: 4vw;
        margin-left: 4vw
    }
    #vedio ul li strong{
        display:block;
        position: absolute;
        top: 20px;
        left: 60px
    }
    #vedio ul li p{
        margin-left: 5vw;
        margin-right: 5vw;
        margin-bottom: 7vw
    }
    .video-box{
        position: relative
    }
    #vedio ul li video{
        width: 70vw;
        height: auto;
        border-left: 15vw solid black;
        border-right: 15vw solid black;
        display: inline-block;
        vertical-align: baseline;
        margin-bottom: 4vw
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
    #vedio ul li>div:nth-child(5){
        display: flex;
        justify-content: space-around;
        width: 90vw;
        height: 6vw;
        margin-left: 3vw;
        line-height: 6vw
    }
    .foot{
        width: 100vw;
        height: 15vw
    }
    .van-hairline--top-bottom{
        z-index: 999
    }
    .biaoti{
        margin-left: 5vw;
        margin-right: 5vw;
        margin-top: 1rem;
        color: skyblue;
       
    }
</style>