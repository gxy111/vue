<template>
    <div>
        <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item', item.id ==0? 'mui-active':'']" v-for="item in cates" :key="item.id" @tap="getPhotoCateId(item.id)">
							{{item.title}}
						</a>
					</div>
				</div>

			</div>
            <ul class="photo-list">
                <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+ item.id"  tag="li">
                    <img v-lazy="item.img_url">
                    <div class="info">
                        <div class="info-title">{{item.title}}</div>
                        <div class="info-body">{{item.zhaiyao}}</div>
                    </div>
                </router-link>
            </ul>
    </div>
</template>
<script>
import '../../assets/mui/js/mui.min.js'
//初始化滑动插件
mui('.mui-scroll-wrapper').scroll({
    deceleration:0.0005
})
export default {
    name: 'PhotoList',
    data() {
        return {
            list:[],
            cates:[]
        }
    },
    created(){
        this.getAllphoto(),
        this.getPhotoCateId(0)
    },
    mounted(){
        //如果要操作元素了，最好要在mounted里面，引物欸这里时候得到DOM元素是最新的
        mui(".mui-scroll-wrapper").scroll({
    deceleration:0.0005
});
    },
    methods:{
        getAllphoto(){
            this.$http.get("api/getimgcategory").then(result=>{
                if(result.body.status === 0){
                    result.body.message.unshift({title: "全部", id: 0});
                    this.cates = result.body.message
                }
            })
        },
        getPhotoCateId(cateId){
            this.$http.get("api/getimages/" + cateId).then(result=>{
                if(result.body.status === 0){
                    this.list = result.body.message
                }
            })
        }
    }
}
</script>
<style scoped>
*{
      touch-action: pan-y 
}
.mint-header{
    z-index: 99;
}
.photo-list li img[lazy="loading"]{
    
    width: 40px;
    height: 300px;
    margin: auto;
}
.photo-list{
    list-style: none;
    margin: 0;
    padding: 10px;
    padding-bottom: 0;
}
.photo-list li{
    margin-bottom: 10px;
    box-shadow: 0 0 6px #999;
    background-color: #ccc;
    text-align: center;
    position: relative;
}
.photo-list li img{
    width: 100%;
    vertical-align: middle
}
.info{
    position: absolute;
    bottom: 0px;
    color: white;
    text-align: left;
    background-color: rgba(0,0,0,0.4);
    max-height: 84px;
}
.info-title{
    font-size: 14px;
}
.info-body{
    font-size: 13px;
}
</style>
