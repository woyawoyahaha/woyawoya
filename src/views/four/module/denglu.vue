<template>
  <div class="over">

    <div class="back">
      <header class="header_one">登陆</header>
      <img class="logo" src="../../../images/logo.png" alt />
    </div>
    <div>
      <router-link :to="{name:'phone'}">
        <button class="btn1">手机号登陆</button>
      </router-link>
      <router-link :to="{name:'enroll'}">
        <button class="btn2">手机号注册</button>
      </router-link>
    </div>

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
export default {};
</script>

<style ceoped>
.header_one {
  text-align:center;
  font-size: 20px;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  /* font-weight: 900; */
}
.back {
  background: url("../../../images/background.jpg");
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
}
.logo {
  width: 150px;
  height: 150px;
  margin-top: 50px;
  position:absolute
}
.btn1 {
  width: 80%;
  height: 3rem;
  margin-left: 10%;
  border: 1px solid red;
  border-radius: 30px 30px;
  background: rgba(255, 255, 255, 0.3);
  position: absolute;
  top: 260px;
  font-size: 20px;
  color: red;
  cursor:pointer;
}
.btn1:active {
  background: red;
  color: white;
}
.btn2 {
  width: 80%;
  height: 3rem;
  margin-left: 10%;
  border: 1px solid red;
  border-radius: 30px 30px;
  background: rgba(255, 255, 255, 0.3);
  position: absolute;
  top: 330px;
  font-size: 20px;
  color: red;
  cursor:pointer;
}
.btn2:active {
  background: red;
  color: white;
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
  margin-top: 7.5rem;
}
.over{
    height:667px;
    overflow-y:hidden;
}
</style>
