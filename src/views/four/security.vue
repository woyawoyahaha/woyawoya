<template>
  <div class="push">
    <div class="Top">
      <van-icon name="arrow-left" class="Icons" @click="Return()" />
      <h5>账号与安全</h5>
    </div>
    <div class="section">
      <div class="Head-portraits">
        <img :src="this.avatar" alt />
      </div>
      <div class="main">
          <van-cell-group>
          <van-cell title="当前账号" :value='ruleForm.userName' />
          <van-cell title="密码" value="*******"/>
        </van-cell-group>
       <van-button @click="Onclick()"  round type="info">修改密码</van-button>
         <van-dialog v-model="isShow" @confirm='confirm()' show-cancel-button>
          <van-field v-model="password" label="当前密码" placeholder="请输入当前的密码" />
          <van-field v-model="Newpassword" label="最新密码" placeholder="请输入想要修改密码" />
          <van-field v-model="ruleForm.password" label="确认密码" placeholder="请确认密码" />
        </van-dialog>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>


<script>
import { get } from "../../utils/ajax";
import { put } from "../../utils/ajax";
export default {
  data() {
    return {
      avatar:'',
      isShow: false,
      password: "",
      Newpassword: "",
      ruleForm: {
        userName: '每日一LE',
        password:'',
        nickName:'',
        avatar: '',
        createdAt:'',
        updatedAt:'',
        _id:''
      }
    };
  },
  methods: {
    Return() {
      this.$router.push({
        name: "setting"
      });
    },
    Onclick() {
     
      this.isShow = !this.isShow;
      let token = localStorage.getItem("token");
      
      
    },
    confirm(){
       console.log(this.ruleForm)
      console.log('我点击了确认')
      if(this.Newpassword === this.ruleForm.password){
        put("http://192.168.3.14:3009/api/v1/users/"+this.ruleForm._id,this.ruleForm,{
        headers: {
          authorization: "Bearer " + localStorage.getItem("token")
        }
      }).then(res => {
        console.log(res);  
      });
      }
  }
  },
  
  created() {
    if (localStorage.getItem("token")) {
      console.log("进入我的页面")
      this.ruleForm.userName = localStorage.getItem("userName");
      get("http://192.168.3.14:3009/api/v1/users/info", {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token")
        }
      }).then(res => {
        console.log("这是获取信息",res)
        this.ruleForm._id=res.data._id
        this.avatar = "http://192.168.3.14:3009" + res.data.avatar;
        this.ruleForm.avatar = res.data.avatar;
        this.ruleForm.userName = res.data.userName
        this.ruleForm.nickName = res.data.userName
        this.ruleForm.createdAt = res.data.createdAt
        this.ruleForm.updatedAt = res.data.updatedAt

      });
    } else {
    }
  }
};
</script>

<style scope>
.push {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.Top {
  width: 100%;
  height: 50px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-bottom: 8px solid #efeff7;
}
.Icons {
  position: absolute;
  left: 2%;
  color: #979797;
  font-size: 24px;
}
.Top h5 {
  color: #222629;
  font-size: 16px;
}
.section {
  position: relative;
  height: 600px;
}
.Head-portraits {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  position: absolute;
  left: 40%;
  top: 5%;
}
.Head-portraits img {
  width: 90px;
  height: 90px;
  border-radius: 50%;
}
.main {
  position: absolute;
  top: 25%;
  width: 100%;
}
.main li {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f0eff4;
  border-top: 1px solid #f0eff4;
}
.main h5 {
  margin-left: 10px;
}
.main span {
  margin-right: 10px;
  font-size: 14px;
}
.main p {
  margin-left: 10px;
  margin-top: 10px;
  color: #f00;
}
.van-button--round {
    width: 60%;
    margin-top: 10%;
    margin-left: 22%;
}
</style>