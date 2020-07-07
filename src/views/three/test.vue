<template>
  <div class="hello">
    <div @click="ckick(index)" :class="item.type?'text-red':'text-green'" v-for="(item,index) in list" :key="index">
   {{item.desc}}
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
 data() {
  return {
   list: [{id:1,desc:'漩涡名字',type:false},{id:2,desc:'宇智波佐助',type:false}]
  }
 },
 methods: {
  ckick(idx) {
   console.log(idx);
   this.list.forEach((item,index)=>{
    if(idx===index){
     item.type = !item.type
    }
   })
  }
 },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text-red{
 color: red;
}
.text-green{
 color: green;
}
</style>