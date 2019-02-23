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
1. getComment

## 实现点击加载更多评论的功能
1. 为加载更多按钮，确定点击事件，在事件中，请求下一页数据
2. 点击加载更多，让pageIndex++,然后重新调用this.getComment()方法重新获取最新一夜的数据
3. 为了防止新数据覆盖老数据的情况，我们在点击加载更多的时候，每当获取到新数据，应该让老数据调用数组的concat方法，拼接上新数组

## 发表评论
1. 把文本框做双向数据绑定
2. 为发表按钮绑定一个事件
3. 检验评论内容是否为空，如果为空，则Toast提示用户，评论内容不能为空
4. 通过vue-resource 发送一个请求, 把评论内容交给服务器
5. 发表评论ok后，重新刷新列表，以查看最新的评论
 + 若果调用getcomment方法重新评论列表的话，可能只能得到最后一页的评论，前几页的评论获取不到
 + 换一种思路,当评论成功后，在客户端手动拼接出一个最新评论的对象，然后调用数组的unshift方法，把最新的评论添加到data中comments的开头，这样，就能完美实现刷新评论列表的需求。

 ## 改造图片分析按钮为路由的链接并显示对应的组件页面

## 绘制图片列表组建页面结构并美化样式
1. 制作顶部的滚动条
2. 制作底部的图片列表
### 制作顶部滚动条的坑:
1. 需要借助mui的tab-top-webview-main.html
2. 需要把slider区域的mui-fullscreen去掉
3. 无法触发滑动，为js组件，需要初始化
    + 导入mui.js
    + 调用官方方式初始化
4. 我们在初始化滑动条的时候，导入mui.js，但是控制台报错
    + 经过推测，可能是webpack默认启用严格模式所以造成冲突.
    + 解决方案:1.把mui.js中的非严格模式的代码改掉，不现实。2.把webpack打包时候的严格模式禁用掉。
    + 最终，我们选择了plan B 移除严格模式
5. 刚进入图片分享页面的时候，滑动条无法正常工作，经过我们认真的分析，发现，如果要初始化，滑动条必须要等DOM元素加载完毕，所以我们把初始化滑动条的代码，搬到了mounted生命周期函数中，
MUI 中的 tabbar 在移动端无法跳转路由的问题解决：
在 App.vue 组件中添加如下代码
import mui from './lib/mui/js/mui.min.js'	

mounted(){
mui('body').on('tap','a',function(){document.location.href=this.href;}); 
},
6. 当滑动条调试ok后，发现tabber无法正常工作，这时候，我们需要把每个tabbar按钮的样式中，'mui-tab-item'重新改一下名字
### 制作图片列表区域
1. 图片列表需要使用懒加载技术，我们可以使用mint-ui提供的现成的组件‘lazy-load’
2. 根据'lazy-load'的使用文档，尝试使用。
3. 渲染图片列表数据
### 实现了图片列表懒加载和央视梅花
## 实现了点击图片跳转到图片详情页面
## 实现详情页面的布局和美化，同时获取数据渲染页面

## 实现图片详情中的缩略图功能
1. 使用插件vue-preview这个缩略图插件
2. 获取到所有的图片列表，然后使用v-for指令渲染数据
3. 注意:img标签上class不能去掉
4. 注意:每个土拍你数据对象中，必须有w,h属性。

## 绘制商品列表页面基本结构并梅花

## 尝试在手机上去进行项目的预览和测试

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
