<template>
  <div>
    <div class="mui-numbox" data-numbox-min="1" data-numbox-max="max">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input
        id="test"
        ref="numbox"
        @change="countChanged"
        class="mui-input-numbox"
        type="number"
        value="1"
      >
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>
<script>
import mui from "../../assets/mui/js/mui.min.js";
export default {
  name: "goodsbox",
  data() {
      return {
          
      }
  },
  mounted() {
    mui(".mui-numbox").numbox();
  },
  methods: {
    countChanged() {
      this.$emit("getcount", parseInt(this.$refs.numbox.value));
    }
  },
  props: ["max"],
  watch: {
    //使用js api设置max的最大值
    max: function(newVal, oldVal) {
      mui(".mui-numbox")
        .numbox()
        .setOption("max", newVal);
    }
  }
};
</script>
<style scoped>
</style>
