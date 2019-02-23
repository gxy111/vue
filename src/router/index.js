import Vue from 'vue'
import Router from 'vue-router'
import homeContainer from '@/components/tabbar/homeContainer'
import shopcarContainer from '@/components/tabbar/shopcarContainer'
import searchContainer from '@/components/tabbar/searchContainer'
import mumberContainer from '@/components/tabbar/mumberContainer'
import NewList from '@/components/news/NewLsit'
import Newinfo from '@/components/news/Newinfo'
import PhotoList from '@/components/photo/PhotoList'
import Photoinfo from '@/components/photo/Photoinfo'
import GoodList from '@/components/goods/GoodList'
import Goodsinfo from '@/components/goods/Goodsinfo'
import Goodsdesc from '@/components/goods/Goodsdesc'
import Goodscomment from '@/components/goods/Goodscomment'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home/photolist',
      name: 'photolist',
      component: PhotoList
    },
    {
      path: '/home/goodsdesc/:id',
      name: 'goodsdesc',
      component: Goodsdesc
    },
    {
      path: '/home/goodscomment/:id',
      name: 'goodscomment',
      component: Goodscomment
    },
    {
      path: '/home/goodslist',
      name: 'goodslist',
      component: GoodList
    },
    {
      path: '/home/goodsinfo/:id',
      name: 'goodsinfo',
      component: Goodsinfo
    },
    {
      path: '/home/photoinfo/:id',
      name: 'photoinfo',
      component: Photoinfo
    },
    {
      path: '/home/newlist',
      name: 'newList',
      component: NewList
    },
    {
      path: '/home/newinfo/:id',
      name: 'newinfo',
      component: Newinfo
    },
    {
      path: '/home',
      name: 'homeContainer',
      component: homeContainer
    },
    {
      path: '/mumber',
      name: ' mumberContainer',
      component: mumberContainer
    },
    {
      path: '/search',
      name: 'searchContainer',
      component: searchContainer
    },
    {
      path: '/shopcar',
      name: 'shopcarContainer',
      component: shopcarContainer
    }
  ],
  linkActiveClass: 'mui-active'
})
