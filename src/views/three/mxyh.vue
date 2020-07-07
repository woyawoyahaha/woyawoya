<template>
  <div class="box">
    <div class="tuichu">
      <router-link to="tjgz">
        <img src="../../img/tb317.png" />
      </router-link>
    </div>
    <div class="repeat" v-for="(item,id) in list" :key="item.id">
      <img :src="item.picUrl" />
      <h5>{{item.name}}</h5>
      <p>热度:{{item.score}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.axios.get('/info/toplist/artist').then(res => {
      console.log(res.data.list.artists)
      this.list = res.data.list.artists
    })
  }
}
</script>

<style scoped>
.tuichu {
  background: red;
}

.tuichu a > img {
  width: 2rem;
  height: 2rem;
}

.repeat {
  width: 100%;
  height: 5rem;
  background: #f1f3f2;
  border: papayawhip solid 0.0625rem;
}

.repeat img {
  width: 4.5rem;
  height: 4.5rem;
  margin: 0.25rem 0 0 0.25rem;
  display: inline;
}

.repeat h5 {
  margin-left: 6.875rem;
  margin-top: -4.0625rem;
  font-size: 1.125rem;
}

.repeat p {
  font-size: 0.875rem;
  margin-left: 6.875rem;
  margin-top: 1.25rem;
}
</style>
