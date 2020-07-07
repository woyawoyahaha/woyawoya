<template>
  <div class="main">
    <div class="header_fu">
      <div class="header">
        <span class="header_span" @click="btns">〈</span>
        <!-- <span class="header_span1">账号</span> -->
        <span class="header_span1">关注</span>
        <img src="../../../img/two 1.jpg" />
      </div>
    </div>
    <div>
      <ul class="ul_big">
        <p v-if="list.length ? '' : '你还没有添加关注'" class="pp">你还没有添加关注</p>
        <li class="li_big" v-for="(item, index) in list" :key="item.id">
          <img :src="item.avatarUrl" />
          <p class="li_span" ref="ppp">{{ item.nickname }}</p>
          <p class="li_span1">{{ item.signature }}</p>
          <van-button class="btnss" type="primary" @click="alertMenu(index)">...</van-button>
        </li>
      </ul>
    </div>
    <van-action-sheet v-model="show" :actions="actions" round @select="onSelect" />
    <div class="footer_fot">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from '@/components/footer/index.vue'

export default {
  name: 'Four',

  components: {
    Footer
  },
  data() {
    return {
      list: [],
      show: false,
      actions: [
        { name: [] },
        { name: '设置备注名' },
        { name: '发私信' },
        { name: '取消关注' }
      ]
    }
  },
  methods: {
    btns() {
      history.go(-1)
    },
    alertMenu(index) {
      this.show = true
      console.log(this.$refs.ppp[index].innerText)
      this.actions[0].name = this.$refs.ppp[index].innerText
      //  this.$refs.ppp.forEach(item=>{
      //    console.log(item.innerText)
      //    this.actions[0].name=item.innerText

      //  })
    },
    onSelect(item) {
      console.log(item)
      this.show = false
      this.$toast({
        message: item.name,
        duration: 500
      })
    }
  },
  mounted() {
    this.axios
      .get('/info/user/follows?uid=' + this.$cookies.get('id'))
      .then(res => {
        this.list = res.data.follow
      })
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
/* .ul_big{
  margin-top:50px
} */
.main {
  height: 61.1rem;
}
.header_fu {
  width: 100%;
  min-height: 3rem;
}
.header {
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-around;
  background-color: #d33a31;
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: space-around;
}
.header_span1 {
  line-height: 2.5;
  color: white;
  font-size: 17px;
}
.header img {
  width: 2rem;
  height: 2rem;
  margin-top: 0.4rem;
}
.header_span {
  line-height: 2.3;
  color: white;
  font-size: 20px;
  cursor: pointer;
}

.li_big {
  width: 100%;
  height: 6rem;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid #ccc;
}
.li_big img {
  width: 70px;
  height: 70px;
  float: left;
  border-radius: 50%;
  margin-top: 14px;
  margin-left: 16px;
}
.li_span {
  font-size: 18px;
  position: absolute;
  left: 110px;
  top: 26px;
}
.li_span1 {
  margin-left: 200px;
  color: #ccc;
  position: absolute;
  left: -90px;
  top: 50px;
  width: 270px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.footer_fot {
  min-height: 48px;
}
.pp {
  text-align: center;
  margin-top: 10%;
  color: #ccc;
}
/* 弹出菜单 */
.btnss {
  background: white;
  color: #cccccc;
  border: none;
  font-size: 36px;
  position: absolute;
  left: 330px;
  top: 10px;
  width: 0px;
}
</style>
