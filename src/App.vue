<template>
  <div id="app-container">
    <mt-header fixed title="本地项目">
			<span @click="goBack" slot="left" v-show="flag">
				<mt-button icon="back">返回</mt-button>
			</span>
		</mt-header>

    <transition>
      <router-view></router-view>
    </transition> 

    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-lib" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-lib" to="/mumber">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item-lib" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge">{{$store.getters.getAllCount}}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-lib" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>
<script>
import mui from "./assets/mui/js/mui.min.js";

export default {
  name: "App",
  data() {
    return {
			flag: false
		}
	},
	created(){
		this.falg = this.$route.path === '/home'? false :true
	},
	methods:{
		goBack(){
			this.$router.go(-1)
			console.log('hah1')
		}
	},
	watch:{
			'$route.path'(newVal){
				if(newVal === '/home'){
					this.flag = false;
				}else{
					this.flag = true;
				}
			}
	}
};
</script>
<style scoped>
#app-container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow: hidden;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
/* 排除 */
.mui-bar-tab .mui-tab-item-lib.mui-active {
    color: #007aff;
}

.mui-bar-tab .mui-tab-item-lib {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-lib .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-lib .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
.mui-bar .mui-icon {
    font-size: 24px;
    position: relative;
    z-index: 20;
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>
