<template>
    <div>
        <div class="mui-numbox" data-numbox-min='1' style="height:25px;">
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" ref="numbox" readonly @change="countChanged" class="mui-input-numbox" type="number" :value="initcount" />
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				</div>
    </div>
    
</template>
<script>
import mui from '../../assets/mui/js/mui.min.js'
export default {
    name: 'numbox',
    mounted(){
        mui(".mui-numbox").numbox()
    },
    methods:{
        countChanged(){
            this.$store.commit("updateGoodsInfo",{
                id: this.goodsid,
                count: this.$refs.numbox.value
            })
        }
    },
    props:["initcount","goodsid"],
}
</script>
<style scoped>

</style>
