<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.img">
        <img :src="item.img" alt="" :class="{full: isfull}">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>

export default {
  name: "swipe",
  props:["lunbotuList","isfull"]
};
</script>
<style scoped>
.mint-swipe-item{
    text-align: center;
}
.mint-swipe {
  height: 200px;
}
.mint-swipe img {
  height: 100%;
}
.full{
    width: 100%
}
</style>
