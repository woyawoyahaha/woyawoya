<template>
  <div class="box">
    <div class="header">
      <ul>
        <li>
          <router-link to="dynamic">
            <img src="@/img/tb317.png" />
          </router-link>
        </li>
        <li>
          <span>发动态</span>
        </li>
        <li>
          <van-cell is-link @click="showPopup">发表</van-cell>
        </li>
      </ul>
    </div>
    <!-- <van-popup v-model="show" position="top" :style="{ height: '20%' }" /> -->
    <van-cell-group>
      <van-field
        v-model="message"
        rows="1"
        autosize
        type="textarea"
        placeholder="一起聊聊吧~"
        maxlength="140"
        show-word-limit
      />
    </van-cell-group>
    <van-uploader :after-read="afterRead" />
    <div class="fenx">
      <ul>
        <li>
          <img src="../../img/tb318.png" />
        </li>
        <li>给动态配音乐~</li>
        <li>&gt;</li>
      </ul>
    </div>
    <div class="fenx2">
      <p>同时分享到：</p>
      <p>
        <img src="../../img/tb319.png" />
      </p>
    </div>
    <div class="tail">
      <ul>
        <li>
          <img src="../../img/tb321.png" />
        </li>
        <li>
          <img src="../../img/tb322.png" />
        </li>
        <li>
          <img src="../../img/tb323.png" />
        </li>
        <li>
          <img src="../../img/tb324.png" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Popup } from 'vant'
import { Field } from 'vant'
import { Uploader } from 'vant'
Vue.use(Field)
Vue.use(Uploader)
Vue.use(Popup)
export default {
  data() {
    return {
      message: '',
      show: false
    }
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file)
    },
    showPopup() {
      this.show = true
    }
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 2.5rem;
  border-bottom: 0.03125rem solid navajowhite;
}

.header ul li > a > img {
  display: inline;
  width: 1.5rem;
  height: 1.5rem;
  
  margin-top: 0.5rem;
}

.header ul {
  display: flex;
  justify-content: space-around;
  line-height: 2.5rem;
}
.header li{
  width: 33%;
}
.header li span {
  font-size: 1.125rem;
  
}
.header ul li:nth-child(2) {
  text-align: center;
  
}

.fenx {
  width: 100%;
  height: 3.375rem;
  border-bottom: #f7f7f7 solid 0.0625rem;
}

.fenx ul {
  display: flex;
  justify-content: space-around;
  padding-top: 1rem;
}

.fenx ul li:nth-child(3) {
  margin-left: 10.5rem;
}

.fenx ul li:nth-child(2) {
  margin-left: -1.5rem;

}

.fenx2 {
  width: 100%;
  height: 6.25rem;
  border-bottom: #f7f7f7 solid 0.0625rem;
}

.fenx2 p > img {
  display: inline;
  margin-top: 2rem;
}

.fenx2 {
  display: flex;
  justify-content: flex-start;
  margin-left: 1.5rem;
  line-height: 6.25rem;
}

.tail {
  width: 100%;
  min-height: 6rem;
}

.tail ul {
  margin-top: 1rem;
}

.tail ul li {
  float: left;
  margin-left: 1.5rem;
}
</style>
