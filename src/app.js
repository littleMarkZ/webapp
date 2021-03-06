import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import './config/rem'
import MintUI from 'mint-ui'

Vue.use(MintUI)

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}

new Vue({
  router,
  store,
  ...App
}).$mount('#app')
