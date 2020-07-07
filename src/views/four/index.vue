<template>
  <div class="about">
    <header>
      <router-link class="setting" :to="{name:'setting'}">
        <van-icon name="setting-o" />
      </router-link>
      
    </header>
      <p @click="Login()">登录</p>
      <p @click="Register()">注册</p>


  </div>
</template>

<script>


export default {
  name: "Mine",
 
  created() {
    let token = localStorage.getItem("token");
    if (token) {
    }
  },
  methods: {
    Login() {
      this.$router.push({
        name: "login"
      });
    },
    Register() {
      this.$router.push({
        name: "register"
      });
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

header {
  display: flex;
  width: 100%;
  height: 257px;
  background: #ccc;
  background: url(../../../public/img/logbag.jpg) no-repeat;
  background-position: center;
  background-size: 160% 100%;
  margin: 0px;
  padding: 0px;
  justify-content: space-between;
  align-items: flex-end;
}
.setting {
  width: 18px;
  height: 18px;
  position: fixed;
  left: 90%;
  top: 2%;
  color: #fff;
  font-size: 18px;
}
 p {
  position: relative;
  left: 0;
  top: 2rem;
  right: 0;
  bottom: 0;
  margin:3rem auto;
  width: 10rem;
  height: 35px;
  background-color:#5ed1ba ;
  color: whitesmoke;
  text-align: center;
  line-height: 35px;
  border-radius: 20px;
}

</style>