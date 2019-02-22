<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in NewList" :key="item.id">
        <router-link :to="'/home/newinfo/' + item.id">
          <img
            class="mui-media-object mui-pull-left"
            :src="item.img_url"
          >
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
              <span>发表时间:{{item.add_time}}</span>
              <span>点击: {{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NewList",
  data() {
    return {
      NewList:[]
    };
  },
  created(){
    this.getNewList()
  },
  methods:{
    getNewList(){
      this.$http.get('api/getnewslist').then(result=>{
        if(result.body.status === 0){
          this.NewList = result.body.message;
        }else{
          Toast('获取新闻列表失败')
        }
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mui-ellipsis{
  font-size: 12px;
  color: #226aff;
  display: flex;
  justify-content: space-between
}
h1{
  font-size: 12px;
}
</style>
