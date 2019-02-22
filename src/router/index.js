import Vue from 'vue'
import Router from 'vue-router'
import homeContainer from '@/components/tabbar/homeContainer'
import shopcarContainer from '@/components/tabbar/shopcarContainer'
import searchContainer from '@/components/tabbar/searchContainer'
import mumberContainer from '@/components/tabbar/mumberContainer'
import NewList from '@/components/news/NewLsit.vue'
import Newinfo from '@/components/news/Newinfo.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
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
