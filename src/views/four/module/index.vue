<template>
  <div>
    <ul class="ccc">
      <router-link :to="{name:'dynamichou'}">
        <li class="ccc_1">
        动态
        <br />
        <span>{{$store.state.count_dynamic}}</span>
      </li>
      </router-link>
      <router-link :to="{name:'attention'}">
        <li class="ccc_2">
        关注
        <br />
        <span>{{$store.state.counts}}</span>
      </li>
      </router-link>
     <router-link :to="{name:'fons'}">
        <li class="ccc_3">
        粉丝
        <br />
        <span>{{$store.state.count}}</span>
      </li>
     </router-link>
      <li class="ccc_4">我的资料</li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>

export default {
  methods: {
    load(){
      this.$store.commit("add",{})
    },
  },
    created() {
    this.load();
  },

};


</script>

<style scoped>
.ccc {
  display: flex;
  justify-content: space-around;
  margin-top: 9rem;
  color: rgba(153, 153, 153, 1);
  text-align:center;
    border-top:1px solid #CCCCCC;

}
.fade-enter-active, .fade-leave-avtive {
    transition: opacity 1s
}
.fade-enter, .fade-leave-to {
    opacity: 0
}
.ccc_1{margin-top:0.3rem}
.ccc_2{margin-top:0.3rem}
.ccc_3{margin-top:0.3rem}
.ccc_4 {
  margin-top: 0.6rem;
}

</style>
