import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import reset from './assets/css/reset.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  reset,
  render: (h) => h(App)
}).$mount('#app');
