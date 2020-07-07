<template>
  <div class="box">
    <div class="header">
      <router-link to="sousuo">
        <input type="text" class="sousuo" placeholder="搜索歌手" />
      </router-link>
    </div>
    <div class="nearby">
      <ul>
        <li>
          <router-link to="mxyh">
            <img src="../../img/tb313.png" />
          </router-link>
        </li>
        <li>
          <router-link to="mxyh">
            <img src="../../img/tb314.png" />
          </router-link>
        </li>
        <li>
          <router-link to="mxyh">
            <img src="../../img/tb315.png" />
          </router-link>
        </li>
        <li>
          <router-link to="mxyh">
            <img src="../../img/tb316.png" />
          </router-link>
        </li>
      </ul>
      <ol>
        <li>
          <span>认识的人</span>
        </li>
        <li>
          <span>明星用户</span>
        </li>
        <li>
          <span>音乐人</span>
        </li>
        <li>
          <span>音乐达人</span>
        </li>
      </ol>
    </div>
    <div class="possible">
      <h3>可能认识的人</h3>
    </div>
    <div class="mogul">
      <div class="nav_1" v-for="(item) in list" :key="item.id">
        <div class="box">
          <img :src="item.picUrl" />
        </div>
        <p>{{item.name}}</p>
        <h6 @click="enter">{{con}}</h6>
        <h5>
          歌曲数：{{item.musicSize}}
          <span>##话题进行时</span>
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      con: '+关注',
      flag: false
    }
  },
  mounted() {
    this.axios
      .get('/info/top/artists?offset=0&limit=30')
      .then(res => {
        console.log(res.data.artists)
        this.list = res.data.artists
      })
  },
  methods: {
    enter() {
      this.flag = !this.flag
      if (this.flag == true) {
        this.con = '已关注'
      } else if (this.flag == !true) {
        this.con = '+关注'
      }
    }
  }
}
</script>


<style scoped>
.header {
  height: 1.75rem;
  width: 100%;
  background: #e6e7e9;
  position: relative;
}

.header .sousuo {
  height: 1rem;
  width: 90%;
  background: white;
  position: absolute;
  top: 0.25rem;
  left: 5%;
  border-radius: 0.3125rem;
  font-size: 0.625rem;
  text-align: center;
}

.nearby {
  width: 100%;
  height: 6.25rem;
  border-bottom: #e6e7e9 solid 0.0625rem;
}

.nearby ul li a > img {
  width: 3rem;
  height: 3rem;
}

.nearby ul {
  display: flex;
  justify-content: space-around;
  padding-top: 0.625rem;
}

.nearby ol {
  display: flex;
  justify-content: space-around;
  padding-top: 0.625rem;
}

.nearby ol li span {
  font-size: 0.875rem;
}

.possible h3 {
  text-indent: 1rem;
  line-height: 2.5rem;
}

.mogul .nav_1 {
  width: 100%;
  height: 3.75rem;
  background: white;
  float: left;
  border-bottom: solid 0.0625rem #e6e7e9;
  position: relative;
}

.mogul .nav_1 .box img {
  width: 2.875rem;
  height: 2.875rem;
  border-radius: 50%;
  margin-top: 8px;
  margin-left: 10px;
}

.mogul .nav_1 p {
  margin-left: 4.5rem;
  margin-top: -2.875rem;
}

.mogul .nav_1 h6 {
  margin-left: 18.875rem;
  margin-top: -1rem;
  font-size: 0.875rem;
  border: red solid 1px;
  padding: 2px 5px;
  border-radius: 0.75rem;
  position: absolute;
}

.mogul .nav_1 h5 {
  font-size: 0.75rem;
  margin-left: 4.5rem;
  margin-top: 0.5rem;
}

.mogul .nav_1 h5 > span {
  margin-left: 0.625rem;
}
</style>
