<template>
  <div class="Add">
    <header>
      <div class="Add-close" @click="Close()">
        <van-icon name="cross" />
        <span class="title">一LE投稿</span>
      </div>
    </header>
    <van-form @submit="onSubmit"  >
      <van-field
        v-model="ruler.content"
        name="用户名"
        label="标题"
        placeholder="请输入标题"
        :rules="[{ required: true, message: '请填写标题' }]"
      />

      <van-field name="coverImg" label="文件上传" :after-read="afterRead">
        <template #input>
          <van-uploader  v-model="coverImg" :after-read="afterRead" />
        </template>
      </van-field>

          <van-field
      readonly
      clickable
      name="picker"
      :value="ruler.type"
      label="段子类型"
      placeholder="点击选择类型"
      @click="showPicker = true"
    />
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>

      <van-field
        v-model="ruler.descriptions"
        type="descriptions"
        name="段子"
        label="内容"
        placeholder="请填写段子内容"
        :rules="[{message: '请填写段子内容' }]"
      />
      <div style="margin: 2rem;">
        <van-button round block type="info" native-type="submit">
          投稿
        </van-button>
      </div>
    </van-form>
    <footer></footer>
    <div></div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import { post } from "@/utils/ajax";

export default {
  name: "AddContent",
  data() {
    return {
      columns: ['text', 'image', 'gif', 'video'],
      showPicker: false,
        coverImg: [],

     rulerinfo:{
        coverImg: '',
        name: localStorage.getItem('userName'),
        content: '',
        type:'',
        descriptions:'',
        header: 'http://192.168.3.14:3009'+localStorage.getItem('image')
     },
       ruler:{
        coverImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588160402612&di=016cbed5e0ce88469c83a8064b1f8164&imgtype=0&src=http%3A%2F%2Fimg.tukexw.com%2Fimg%2Fea7b77819529897e.jpg',
        name: localStorage.getItem("userName"),
        content: '',
        type:'',
        descriptions:'',
        header: 'http://192.168.3.14:3009'+localStorage.getItem('image')
     }
    };
  },
  methods: {
     onConfirm(value) {
      this.ruler.type = value;
      this.showPicker = false;
    },
    Close() {
      this.$router.push({
        name: "DUANZI"
      });
    },
     onSubmit(values) {
       console.log(this.ruler)
      console.log('submit', values);
      console.log("coverimage",this.ruler.coverImg)


     post( 'http://192.168.3.14:3009/api/v1/products',this.ruler,{headers: {
            authorization: "Bearer " + localStorage.getItem("token")
          }
       }
      ).then(res => {
        console.log('跳转成功')
        this.$router.push('DUANZI')  
      }).catch(function(){
        console.log("没登录");
      
    });
    },

    //自行将图片上传至服务器
    afterRead(file) {
      const formData = new FormData();
      formData.append("file", file.file);
      post("http://192.168.3.14:3009/api/v1/common/file_upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(res => {
        console.log(res);
        this.ruler.coverImg = res.data.info;
      }) ;
    }
  }
}
</script>

<style scoped>
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
header {
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
section {
  width: 100%;
  background: #fff;
  flex: 1;
}

.Add-chioce {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.Add-left {
  color: #20b5ff;
  font-size: 16px;
}
.Add-right {
  color: #ccc;
  font-size: 12px;
}
.van-hairline--top-bottom {
  z-index: -9999;
}
.van-form{
      margin-top: 3rem;
}
#ipt {
  border: none;
  resize: none;
  caret-color: #20b5ff;
  font-size: 16px;
  width: 98%;
}
</style>