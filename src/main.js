// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import './assets/mui/css/mui.min.css'
import './assets/mui/css/icons-extra.css'
import './assets/mui/fonts/mui-icons-extra.ttf'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import moment from 'moment'
Vue.use(MintUI)
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005'

Vue.config.productionTip = false
Vue.filter('dataFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  moment(dataStr).format(pattern)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
