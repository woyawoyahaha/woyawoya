<template>
  <div class="over">
    <div class="denglu">
      <button class="ppppp" @click="btns">〈</button>
      <p>手机号登陆</p>
    </div>
    <div class="input_1">
      <img class="img" ref="ipp1" src="../../../images/phone.png" alt />
      <input class="ipt1" ref="ipp1" placeholder="手机号" type="text" />
    </div>
    <div class="input_2">
      <img class="img_1" src="../../../images/password.png" alt />
      <input
        @keyup.enter="login"
        class="ipt2"
        ref="ipp2"
        placeholder="设置登陆密码,不少于6位"
        type="password"
      />
    </div>
    <button class="btn" @click="login">登陆</button>
  </div>
</template>
<script>
export default {
  methods: {
    btns() {
      history.go(-1)
    },
    //登陆api   和登陆判断
    login() {
      this.axios
        .get(
          '/info/login/cellphone?phone=' +
            this.$refs.ipp1.value +
            '&password=' +
            this.$refs.ipp2.value
        )
        .then(res => {
          console.log(res)

          if (res.data.code == 200) {
            // alert('登陆成功')
            this.$cookies.set('token', res.data.token)
            this.$cookies.set('id', res.data.account.id)
            this.$cookies.set('userId', res.data.profile.userId)
            this.$cookies.set('avatarUrl', res.data.profile.avatarUrl)
            this.$cookies.set('nickname', res.data.profile.nickname)
            this.$cookies.set('backgroundUrl', res.data.profile.backgroundUrl)
            location.href = 'index.vue'
          } else {
            alert(res.data.msg)
          }
        })
    }
  }
  //  mounted() {
  //     this.axios.get('/info/login/status')
  //   .then(res=>{
  //     console.log(res)
  //   })
  //   },
}
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
  width: 90%;
  margin-top: 30px;
  height: 1.9rem;
  border: none;
  position: absolute;
  top: -30px;
}
.input_1 {
  border: solid 2px #ccc;
  width: 80%;
  height: 2rem;
  position: relative;
  top: 30px;
  margin-left: 10%;
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
  background-color: rgba(0, 0, 0, 1);
  color: white;
  margin-top: 90px;
  margin-left: 10%;
  border: none;
  cursor:pointer;
}
.over {
  overflow-y: hidden;
}
</style>
