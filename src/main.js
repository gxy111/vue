// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import VueResource from 'vue-resource'
import './assets/mui/css/mui.min.css'
import './assets/mui/css/icons-extra.css'
import './assets/mui/fonts/mui-icons-extra.ttf'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import moment from 'moment'
// 安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(MintUI)
Vue.use(Vuex)
Vue.use(VuePreview)
Vue.use(VueResource)
var car = JSON.parse(localStorage.getItem('car') || '[]')
var store = new Vuex.Store({
  state: {
    car: car
  },
  mutations: {
    addToCar (state, goodsinfo) {
      var flag = false
      state.car.some(item => {
        // eslint-disable-next-line no-cond-assign
        // eslint-disable-next-line eqeqeq
        if (item.id == goodsinfo.id) {
          item.count += parseInt(goodsinfo.count)
          flag = true
          return true
        }
      })
      if (!flag) {
        state.car.push(goodsinfo)
        localStorage.setItem('car', JSON.stringify(state.car))
      }
    },
    updateGoodsInfo (state, goodsinfo) {
      state.car.some(item => {
        // eslint-disable-next-line eqeqeq
        if (item.id == goodsinfo.id) {
          item.count = parseInt(goodsinfo.count)
          return true
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    removeFormCar (state, id) {
      state.car.some((item, i) => {
        // eslint-disable-next-line eqeqeq
        if (item.id == id) {
          state.car.splice(i, 1)
          return true
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateGoodsSelected (state, info) {
      state.car.some(item => {
        // eslint-disable-next-line eqeqeq
        if (item.id == info.id) {
          item.selected = info.selected
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    }
  },
  getters: {
    getAllCount (state) {
      var c = 0
      state.car.forEach(item => {
        c += item.count
      })
      return c
    },
    getGoodsCount (state) {
      var o = {}
      state.car.forEach(item => {
        o[item.id] = item.count
      })
      return o
    },
    getGoodsSelected (state) {
      var o = {}
      state.car.forEach(item => {
        o[item.id] = item.selected
      })
      return o
    },
    getGoodsCountAndmount (state) {
      var o = {
        count: 0,
        amount: 0
      }
      state.car.forEach(item => {
        if (item.selected) {
          o.count += item.count
          o.amount += item.price + item.count
        }
      })
    }
  }
})
Vue.http.options.root = 'http://www.liulongbin.top:3005'
Vue.http.options.emulateJSON = true

Vue.config.productionTip = false
Vue.filter('dataFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  moment(dataStr).format(pattern)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
