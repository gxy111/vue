<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea maxlength="120" v-model="msg" placeholder="请输入要说话的内容(最多120字)"></textarea>
    <mt-button type="primary" size="large" @click="postContent">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,i) in comments" :key="'item.add_time'+ i++">
        <div
          class="cmt-title"
        >第{{ i+1 }}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time}}</div>
        <div class="cmt-body">{{item.content === ''?'此用户很懒':item.content}}</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>
<script>
export default {
  name: "Comment",
  data() {
    return {
      msg: "",
      comments: [],
      pageIndex: 1
    };
  },
  created() {
    this.getComment();
  },
  methods: {
    getComment() {
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex)
        .then(result => {
          if (result.body.status === 0) {
            //每当获取新评论数据的时候，不要把老数据清空覆盖，而是以老数据拼接上新数据
            this.comments = this.comments.concat(result.body.message);
          } else {
            Toact("获取评论失败");
          }
        });
    },
    getMore() {
      this.pageIndex++;
      console.log(this.pageIndex);
      this.getComment();
    },
    postContent() {
      if (this.msg.trim().length === 0) {
        return Toast("评论内容不能为空");
      }
      //参数1:请求的url地址
      //参数2:提交给服务器的数据对象{content:this.msg}
      //参数3:定义提交时候表单中数据的格式{emlateJSON:true}
      this.$http
        .post("api/postcomment/" + this.$route.params.id, {
          content: this.msg.trim()
        })
        .then(result=>{
            if(result.body.status === 0){
                var cmt = {
                    user_name: "小行星",
                    add_time: Date.now(),
                    content: this.msg.trim()
                };
                this.comments.unshift(cmt);
                this.msg = '';
            }
        });
    }
  },
  props: ["id"]
};
</script>
<style scoped>
.cmt-container h3 {
  font-size: 18px;
}
.cmt-container textarea {
  font-size: 14px;
  height: 85px;
  margin: 0;
}
.cmt-container .cmt-list {
  margin: 5px 0;
}
.cmt-container .cmt-item {
  font-size: 13px;
}
.cmt-container .cmt-title {
  line-height: 30px;
  background-color: #ccc;
}
.cmt-container .cmt-body {
  line-height: 35px;
  text-indent: 2em;
}
</style>
