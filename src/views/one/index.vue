<template>
  <div class="main">
    <Header></Header>
    <div class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/footer/index.vue";
import Header from "@/views/one/header.vue";

export default {
  name: "One",
  components: {
    Footer,
    Header
  }
};
</script>

<style scoped>
</style>
