<template>
    <div class="goods-list">
         <div class="goods-item" v-for="item in goodslist" :key="item.id" @click="getDetail(item.id)">
            <img :src="item.img_url" alt="">
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{item.sell_price}}</span>
                    <span class="old">￥{{item.market_price}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{item.stock_quantity}}</span>
                </p>
            </div>
        </div>
        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
export default {
    name:'GoodList',
    data() {
        return {
            pageindex: 1,
            goodslist: []
        }
    },
    created(){
        this.GoodsList()
    },
    methods:{
        GoodsList(){
            this.$http.get("api/getgoods?pageindex=" + this.pageindex).then(result=>{
                if(result.body.status === 0){
                    this.goodslist = this.goodslist.concat(result.body.message);
                }
            })
        },
        getMore(){
            this.pageindex++;
            this.GoodsList();

        },
        getDetail(id){
            //使用js的形式进行路由导航
            //注意，一定要区分this.$route和this.$router这两个对象
            //其中，this.$route是路由[参数对象],所有路由中的参数，params,query都属于它
            //其中,this.$router是一个路由【导航对象，用它可以方便的使用js代码,实现路由的1前进，后退，跳转到新的url地址。
            // 第一种。this.$router.push("/home/goodsinfo/" + id)
            // 第二种，this.$router.push({path: "'/home/goodsinfo/' +id"})
            //第三种:
            this.$router.push({name: 'goodsinfo', params:{id}})
            //第四种:this.$router.push({path:'/home/goodsinfo',query:{id}})原因是path和params不能一起使用。
        }
    }
}
</script>
<style scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding:7px;
    justify-content: space-between;
}
.goods-item{
    width: 49%;
    border: 1px solid #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
}
.goods-item img{
    width: 100%;
}
.title{
    font-size: 14px;
}
.info{
    background-color: #eee;
}
.info .price .old{
    text-decoration: line-through;
    font-size: 12px;
    margin-left: 10px;
}
.info .price .now{
    color: red;
    font-weight: bold;
    font-size: 14px;
}
.sell{
    display: flex;
    justify-content: space-between;
    font-size: 13px;
}
</style>
