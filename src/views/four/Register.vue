<template>
  <div class="Register">
    <header>
      <div class="Add-close" @click="Close()">
        <van-icon name="arrow-left" />
      </div>
    </header>
    <section>
      <van-cell-group>
        <van-field v-model="name" placeholder="请输入昵称" style="margin-top:20px" id="name" />
        <van-field v-model="password" placeholder="请输入密码" style="margin-top:20px" id="password" />
      </van-cell-group>
      <van-uploader v-model="avatar" multiple :max-count="1" :after-read="afterRead" />
      <p>头像上传</p>

      <van-button type="info" class="btn" @click="btn()">注册</van-button>
    </section>
  </div>
</template>

<script>
import { post } from "../../utils/ajax";
export default {
  name: "Register",
  data() {
    return {
      name: "",
      password: "",
      avatar: [],
      imgUrl: ""
    };
  },
  methods: {
    btn() {
      console.log("点击了按钮");
      post("http://192.168.3.14:3009/api/v1/auth/reg", {
        userName: this.name,
        password: this.password,
        nickName: this.name,
        avatar: this.imgUrl
      }).then(res => {
        console.log(this.imgUrl);
        console.log(res);
        if (res.data.code == "success") {
          this.$router.push({
            name: "login"
          });
        } else {
          alert("请注册正确的账号信息");
        }
      });
    },
    Close() {
      this.$router.push({
        name: "mine"
      });
    },
    afterRead(file) {
      const formData = new FormData();
      formData.append("file", file.file);
      post("http://192.168.3.14:3009/api/v1/common/file_upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(res => {
        console.log(res);
        this.imgUrl = res.data.info;
      });
    }
  }
};
</script>

<style scoped>
header {
  display: flex;
  width: 100%;
  height: 257px;
  background: #ccc;
  background: url(../../../public/img/logbag.jpg) no-repeat;
  background-position: center;
  background-size: cover;
  margin: 0px;
  padding: 0px;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
}
.Add-close {
  color: #fff;
  position: absolute;
  top: 5%;
  left: 3%;
}
.btn {
  display: block;
  margin-left: 31%;
  margin-top: 4%;
  width: 150px;
}
.Head-portrait {
  margin-left: 35%;
  margin-top: 5%;
}
</style>