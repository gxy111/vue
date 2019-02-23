<template>
    <div class="photoinfo-container">
        <h3>{{photoinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间: {{photoinfo.add_time}}</span>
            <span>点击:{{photoinfo.click}}次</span>
        </p>
        <hr>
        <!-- 缩略图 -->
       <img class="preview-img" v-for="(item, index) in list" :key="item.src" :src="item.src" height="100" @click="$preview.open(index, list)">   

        <div class="content" v-html="photoinfo.content"></div>
        <cmt-box :id='id'></cmt-box>
    </div>
</template>
<script>
import comments from "../subcomponent/comment.vue";
export default {
    name:'Photoinfo',
    data() {
        return {
            list:[],
            id: this.$route.params.id,
            photoinfo:[]
        }
    },
    created(){
        this.getPhotoinfo(),
        this.getThumbs()
    },
    components:{
        'cmt-box': comments
    },
    methods:{
        getPhotoinfo(){
            this.$http.get("api/getimageInfo/" + this.id).then(result=>{
                if(result.body.status === 0){
                    this.photoinfo = result.body.message[0]
                }
            })
        },
        getThumbs(){
            this.$http.get('api/getthumimages/' + this.id).then(result=>{
                if(result.body.status === 0){
                    result.body.message.forEach(item=>{
                        item.w = 500;
                        item.h = 400;
                    })
                    this.list = result.body.message;
                }
            })
        }
    }
}
</script>
<style scoped>
.photoinfo-container{
    padding: 3px;
}
h3{
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
}
.subtitle{
    display: flex;
    justify-content: space-between;
    font-size: 13px;
}
.content{
    font-size:13px;
    line-height: 30px;
}
</style>

