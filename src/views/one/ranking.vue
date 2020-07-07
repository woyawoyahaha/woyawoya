  <template>
  <div class="main">
    <div class="header_fu">
      <div class="header">
        <span class="header_span" @click="btns">〈</span>
        <span class="header_span1">主播电台排行榜</span>
        <img src="../../img/two 1.jpg" />
      </div>
    </div>
    <ul class="ranking_ul">
      <router-link tag="li" :to="{name:'ranking_one'}">主播榜</router-link>
      <router-link tag="li" :to="{name:'ranking_two'}">节目榜</router-link>
      <router-link tag="li" :to="{name:'ranking_three'}">电台榜</router-link>
    </ul>
    <router-view></router-view>
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
    return {}
  },
  methods: {
    btns() {
      window.history.go(-1)
    },
    liclick(index) {
      this.currentIndex = index
    }
  }
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.main {
  height: 100%;
}
.header_fu {
  width: 100%;
  min-height: 3rem;
}
.header {
  width: 100%;
  min-height: 3rem;
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

.footer_fot {
  min-height: 48px;
}
.ranking_ul {
  display: flex;
  justify-content: space-around;
  background: #d33a31;
  height: 3rem;
  line-height: 2;
  margin-top: -1px;
  color: white;
}
.ranking_ul li {
  height: 2.5rem;
}
.one {
  border-bottom: 3px solid white;
  height: 2.5rem;
  color: white;
}
.router-link-active {
  border-bottom: 3px solid white;
  border-radius: 20% 20%;
}
</style>
