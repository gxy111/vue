<template>
    <div class='newinfo-container'>
        <h3 class='title '>{{newinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间:{{newinfo.add_time}}</span>
            <span>点击: {{newinfo.click}}次</span>
        </p>
        <hr>
        <div class="content" v-html="newinfo.content"></div>
        <comment-box :id="this.id"></comment-box>
    </div>
</template>
<script>
import commit from '../subcomponent/comment.vue'
export default {
    name: 'Newinfo',
    data(){
        return{
            id: this.$route.params.id,
            newinfo: []
        }
    },
    created(){
        this.getNewInfo()
    },
    components:{
        "comment-box": commit
    },
    methods:{
        getNewInfo(){
            this.$http.get('api/getnew/' + this.id).then(result=>{
                if(result.body.status === 0){
                    this.newinfo = result.body.message[0]
                }else{
                    Toact('获取新闻失败')
                }
            })
        }
    }
}
</script>
<style scoped>
.newinfo-container h3{
   padding: 0 4px;
   text-align: center;
   margin: 15px 0;
   color: red; 
}

 .subtitle{
     font-size: 13px;
     color: #226aff;
     display: flex;
     justify-content: space-between
 }
</style>
