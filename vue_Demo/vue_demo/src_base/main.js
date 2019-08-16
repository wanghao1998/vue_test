/*
入口js:创建Vue实例
*/
import Vue from 'vue'
import App from './App'

const vm = new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
})
vm()
