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

## 改造新闻资讯 路由链接
1. 绘制页面:使用mui中的media-list
2. 使用vue-resource 获取数据
3. 渲染真实数据

## 实现新闻资讯 点击跳转到新闻详情
1. 把列表中的每一项改造为router-link,同时，在跳转的时候应该提供唯一的id标识符,
2. 创建新闻详情的组件页面 Newinfo.vue
3. 在路由模块中，将新闻详情的路由地址和组件页面对应起来
## 实现新闻详情的页面布局和数据渲染

## 单独封装一个commit.vue评论子组件
1. 先创建一个单独的commit.vue组件模板
2. 在需要使用comment组件的页面中，先手动导入commit组件
    + import commit from './commit.vue'
3. 在父组件中，使用'components'属性，将刚才导入commit组件注册为自己的子组件
4. 将注册子组件时候的注册名称，以标签形式，在页面中引用即可。
## 获取所有的评论数据显示到页面中

## 实现点击加载更多评论的功能
1. 为加载更多按钮，确定点击事件，在事件中，请求下一页数据
2. 点击加载更多，让pageIndex++,然后重新调用this.getComment()方法重新获取最新一夜的数据
3. 为了防止新数据覆盖老数据的情况，我们在点击加载更多的时候，每当获取到新数据，应该让老数据调用数组的concat方法，拼接上新数组
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
