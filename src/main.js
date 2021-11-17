import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import reset from './assets/css/reset.css'
import moment from 'moment'
import globalMethods from './plugins/globalFunc'

// 2021-09-11 12:25  -> YYYY/MM/DD hh:mm
Vue.filter('formatDateYear', function (value) {
  if (value) {
    return moment(String(value)).format('YYYY')
  }
})

Vue.filter('formatDateV1', function (value) {
  if (value) {
    return moment(String(value)).format('YYYY/MM/DD')
  }
})

Vue.filter('formatDateV2', function (value) {
  if (value) {
    return moment(String(value)).format('YYYY.MM.DD')
  }
})

Vue.config.productionTip = false
Vue.use(globalMethods)

new Vue({
  router,
  store,
  reset,
  render: (h) => h(App)
}).$mount('#app')
