## 用传统方式命令行把修改过后的代码上传到gitHub？？
1. git add .
2. git commit -m '提交信息'
3. git push
## 制作首页App组件
1. 完成Header区域，使用的事Mint-UI中的Header组件
2. 制作底部的Tabber区域，使用的是MUI的Taber.html
    + 在制作购物车小图标的时候，操作会相对多一些：
    + 先把扩展图标的css样式，拷贝到项目中。
    + 为购物车小图标添加以下样式:mui-icon mui-icon-extra mui-icon-extra-cart
3. 要在中间区域放置一个router-view 来展示路由匹配的组件。
## 改造tabbar 为 router-link

##设置路由高亮

## 点击tabbar 中的路由链接，展示对应的路由组件

## 制作首页轮播图布局

## 加载首页轮播图数据
1. 获取数据，如何获取，使用vue-resource
2. 使用vue-resource 的 this.$http.get 获取数据
3. 获取到的数据，要保存到data身上
4. 使用v-for 循环渲染每个item项

## 改造九宫格区域的样式
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
