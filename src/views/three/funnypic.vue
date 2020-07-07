<template>
    <div id="funPicture">
        <ul>
            <li v-for="item in listPicture"   :key="item.sid">
                <van-skeleton title avatar :row="3"  :loading="loading">
                    <van-image
                        round
                        width="2rem"
                        height="2rem"
                        :src="item.header | filterimg"
                    />
                    <strong>{{item.name}}</strong>
                    <p @click="tiaoping(item._id)">{{item.descriptions}}</p>
                    <img :src="item.coverImg | filterimg" alt="图片被我吃掉啦，略略略~(｀・ω・´)">
                    <p class="biaoti">#{{item.content}}#</p>
                    <div>
                        
                        <van-icon name="comment-o" size="6vw" is-link @click="showPopup($event,item._id,item.up)" />
                        <van-icon name="good-job-o" size="6vw" :class="item.type?'text-red':'text-green'" @click="setcolor($event,item._id)" />
                        
                    </div>
                </van-skeleton>
            </li>
        </ul>
        <div class="foot">
        </div>

          <van-cell>展示弹出层</van-cell>
            <van-popup round v-model="show" position="bottom" :style="{ height: '40%' }">
                <van-form @submit="onSubmit(commentInfo.content)">
                    <van-field
                    v-model="commentInfo.content"
                    rows="5"
                    autosize
                    
                    type="textarea"
                    maxlength="100"
                    placeholder="写评论..."
                    show-word-limit
                    />
                    <div style="margin: 16px;">
                        <van-button round block type="info" native-type="submit">
                        提交
                        </van-button>
                    </div>
                    </van-form>
            </van-popup>
    </div>
</template>

<script>
import { get,post} from '../../utils/ajax'

export default {
    name:'FunPicture',
    data(){
        return{
            show: false,
            loading:true,
            listPicture:[],
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

    methods: {
                setcolor(event,id){
                    event.cancelBubble = true; //阻止事件冒泡
                    this.listPicture.forEach((item)=>{
                        if(item._id === id){
                       item.type = !item.type
                     
                      
                        }
                    })
                },
                tiaoping(id){
                    console.log(id)

                    this.$router.push({name:"comment",query: {productId: id }})

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
            },
    mounted() {
        localStorage.setItem("type","pic")

        this.loading = false;
        this. commentInfo.userId = localStorage.getItem("userId")
        this. commentInfo.header = 'http://192.168.3.14:3009'+localStorage.getItem("image")
        this. commentInfo.name = localStorage.getItem("userName")
    },
    filters:{
      filterimg(val){
            if(val){
                if(val.startsWith('http')){
                    return val
                }
                else{
                    return 'http://localhost:3009'  + val
                }
               
            } 
            return 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2871640007,716259366&fm=26&gp=0.jpg'
      }
  },
    created(){//组件创建之后之行的内容，发get请求
        // get("/le/getJoke?count=40&type=image").then(res=>{
        //     console.log("搞笑图片:");
        //     console.log(res.data.result);
        //     this.listPicture = res.data.result
        // })
         get('http://192.168.3.14:3009/api/v1/products', {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token")
          }
        }).then(res=>{
            console.log("后台的爆笑段子:");
            var aSearch = [];
            res.data.products.forEach(function(ele){//循环外层数组
            if(ele.type=='image'){
                aSearch.push(ele)
            }
             
            return  
            });
           console.log(aSearch);
          this.listPicture = aSearch
         
            // this.listText = res.data.result
        })
    },
}
</script>

<style scoped>
    .text-red{
    color: gray;
    }
    .text-green{
    color: red;
    }
    #funPicture ul{
        overflow: hidden;
        background: rgba(180,180,180,0.6)
    }
    /* ul::-webkit-scrollbar{display: none} */
    #funPicture ul li {
        width: 96vw;
        overflow: hidden;
        background: white;
        border-radius: 5vw;
        position: relative;
        padding-bottom: 2vw;
        margin: 2vw 2vw 3vw;
    }
    #funPicture ul li .van-image{
        margin-top: 4vw;
        margin-left: 4vw
    }
    #funPicture ul li strong{
        display:block;
        position: absolute;
        top: 20px;
        left: 60px
    }
    #funPicture ul li p{
        margin-left: 5vw;
        margin-right: 5vw;
        margin-bottom: 7vw
    } 
    #funPicture ul li>img{
        display: block;
        width: 100%;
        height: auto;
        margin-bottom: 4vw
    }
    #funPicture ul li>div{
        display: flex;
        justify-content: space-around;
        width: 90vw;
        height: 6vw;
        margin-left: 5vw;
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