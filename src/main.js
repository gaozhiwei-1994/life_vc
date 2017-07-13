import Vue from 'vue'
import app from './app.vue'
import router from './router/index'

import mock from './mock/mock'  //引入加载模块

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(Mint);

new Vue({
  el: '#app',
  render: h => h(app),
  router
})
