<template>
  <div class="over">
    <div class="denglu">
      <button class="ppppp" @click="btns">〈</button>
      <p>手机号注册</p>
    </div>
    <div class="input_1">
      <img class="img" src="../../../images/phone.png" alt />
      <em>+86</em>
      <input  class="ipt1" ref="ipp1" placeholder="手机号" type="text" />
    </div>
    <div class="input_3">
      <img class="img" src="../../../images/yaoshi.png" alt />
      <input  class="ipt3" ref="code" placeholder="输入验证码" type="text" />
      <button @click="login" class="huoqu_btn">获取验证码</button>
    </div>
    <div class="input_2">
      <img class="img_1" src="../../../images/password.png" alt />
      <input  class="ipt2" ref="passwords" placeholder="设置登陆密码,不少于6位" type="password" />
    </div>
    <div class="input_4">
      <img class="img_1" src="../../../images/password.png" alt />
      <input class="ipt4" ref="name" placeholder="请输入昵称" type="text" />
    </div>
    <button class="btn" @click="register">注册</button>

    <div class="footer">
      <p class="footer_p">­­­­­————其他方式登陆————</p>
      <ul>
        <li>
          <img src="../../../images/wx.png" alt />
          <p>微信</p>
        </li>
        <li>
          <img src="../../../images/qq.png" alt />
          <p>QQ</p>
        </li>
        <li>
          <img src="../../../images/wb.png" alt />
          <p>微博</p>
        </li>
        <li>
          <img src="../../../images/wy.png" alt />
          <p>网易邮箱</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    btns() {
      history.go(-1);
    },
    //发送验证码
    login(){
      this.axios.get('/info/captcha/sent?phone='+this.$refs.ipp1.value)
      .then(res=>{
        console.log(res)
        if(res.data.code==200){
          alert('发送成功')
        }
      })
    },
    //注册
    register(){
      this.axios.get('/info/register/cellphone?phone='
      +this.$refs.ipp1.value
      +"&password=="+this.$refs.passwords.value
      +"&captcha="+this.$refs.code.value
      +"&nickname="+this.$refs.name.value)
      .then(res=>{
        console.log(res)
        if(res.data.code==200){
          alert('注册成功')
          location.href='http://localhost:8080/phonelogin.vue#/phone'
          this.$refs.ipp1.value=''
          this.$refs.code.value=''
          this.$refs.passwords.value=''
          this.$refs.name.value=''
        }

      })
    }
  }
};
</script>
<style scoped>
.ppppp{
  cursor:pointer;
}
.denglu {
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
}
.denglu p {
  display: flex;
  justify-content: center;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.denglu button {
  position: absolute;
  float: left;
  margin-left: 6px;
  font-size: 20px;
  border: none;
  background: white;
}
.ipt1 {
  width: 78%;
  margin-top: 30px;
  height: 1.9rem;
  border: none;
  position: absolute;
  top: -30px;
  margin-left: 5px;
}
.input_1 {
  border: solid 2px #ccc;
  width: 80%;
  height: 2rem;
  position: relative;
  top: 30px;
  margin-left: 10%;
}
.input_1 em {
  line-height: 2;
}
.ipt2 {
  width: 90%;
  margin-top: 30px;
  height: 1.9rem;
  border: none;
  position: absolute;
  top: -30px;
}
.input_2 {
  border: solid 2px #ccc;
  width: 80%;
  height: 2rem;
  position: relative;
  top: 60px;
  margin-left: 10%;
}

.img {
  width: 30px;
  height: 30px;
  float: left;
}
.img_1 {
  width: 30px;
  height: 30px;
  float: left;
}
.btn {
  width: 80%;
  height: 3rem;
  background-color: red;
  color: white;
  margin-top: 110px;
  margin-left: 10%;
  border: none;
  cursor:pointer;
}
.over {
  height: 667px;
  overflow-y: hidden;
}

.ipt3 {
  width: 56%;
  margin-top: 30px;
  margin-left: 10px;
  height: 1.9rem;
  border: none;
  position: absolute;
  top: -30px;
}
.input_3 {
  border: solid 2px #ccc;
  width: 50%;
  height: 2rem;
  position: relative;
  top: 45px;
  margin-left: 10%;
}
.ipt4 {
  width: 90%;
  margin-top: 30px;
  height: 1.9rem;
  border: none;
  position: absolute;
  top: -30px;
}
.input_4 {
  border: solid 2px #ccc;
  width: 80%;
  height: 2rem;
  position: relative;
  top: 75px;
  margin-left: 10%;
}
.huoqu_btn {
  position: absolute;
  left: 102%;
  width: 58%;
  height: 2rem;
  border: none;
  background: chartreuse;
  color: white;
  cursor:pointer;
}

.footer_p {
  text-align: center;
  margin-bottom: 30px;
}
.footer ul {
  display: flex;
  justify-content: space-around;
}
.footer ul li img {
  width: 4rem;
  height: 4rem;
}
.footer ul li {
  width: 4rem;
  height: 3rem;
  text-align: center;
}
.footer {
  text-align: center;
}
.footer {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: 9.41rem;
}
</style>
