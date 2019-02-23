<template>
  <div class="goodsinfo-container">
    <transition @before-enter="beforeEnter" @enter="Enter" @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>

    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :lunbotuList="lunbotu" :isfull="false"></swiper>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">{{goodsinfo.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价:
            <del>￥{{goodsinfo.market_price}}</del>&nbsp;&nbsp;销售价:
            <span class="now_price">￥{{goodsinfo.sell_price}}</span>
          </p>
          <p>购买数量:<goodsbox @getcount="getSelectCount" :max="goodsinfo.stock_quantity"></goodsbox>
          </p>
          <p>
            <mt-button type="primary" alt="small">立即购买</mt-button>
            <mt-button type="danger" alt="small" @click="addToShopCar">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号:{{goodsinfo.goods_no}}</p>
          <p>库存情况:{{goodsinfo.stock_quantity}}</p>
          <p>上架时间:{{goodsinfo.add_time}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment(id)">商品详情</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import swiper from "../subcomponent/swipe";
import goodsbox from "../subcomponent/goodsbox";
export default {
  name: "Goodsinfo",
  data() {
    return {
      id: this.$route.params.id,
      lunbotu: [],
      goodsinfo: [],
      ballFlag: false, //控制小球
      selectCount: 1
    };
  },
  created() {
    this.getLunbotu(), this.getGoodsInfo();
  },
  components: {
    swiper,
    goodsbox
  },
  methods: {
    getLunbotu() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          //先循环轮播图数组的每一项，为item添加img属性，因为轮播图组件种只认识item.img,不认识item.src
          result.body.message.forEach(item => {
            item.img = item.src;
          });
          this.lunbotu = result.body.message;
        }
      });
    },
    getGoodsInfo() {
      this.$http.get("api/goods/getinfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.goodsinfo = result.body.message[0];
        }
      });
    },
    goDesc(id) {
      this.$router.push({ name: "goodsdesc", params: { id } });
    },
    goComment(id) {
      this.$router.push({ name: "goodscomment", params: { id } });
    },
    addToShopCar() {
      this.ballFlag = !this.ballFlag;
    },
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    Enter(el) {
      el.offsetWidth;
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      const badgePostion = document.getElementById("badge").getBoundingClientRect();
      const xDist = badgePostion.left - ballPosition.left; 
      const yDist = badgePostion.top - ballPosition.top;
      el.style.transform = `translate(${xDist}px,${yDist}px)`;
      el.style.transition = "all 1s cubic-bezier(.4,-0.3,1,.68)";
       done();  //报错
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag;
    },
    getSelectCount(count){
        this.selectCount = count;
        console.log(count)
    }
  }
};
</script>
<style scoped>
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;
}
.now_price {
  color: red;
  font-size: 16px;
  font-weight: bold;
}
.mui-card-footer {
  display: block;
}
.mui-card-footer button {
  margin: 15px 0;
}
.ball {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  z-index: 99;
  top: 409px;
  left: 78px;
}
</style>

