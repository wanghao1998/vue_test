/*
路由器模块
* */
import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About'
import Home from '../views/Home'
import News from '../views/News'
import Message from '../views/Message'
Vue.use(VueRouter)

export default new VueRouter({
  // n个路由
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      // 嵌套路由（子路由）
      children: [
        {
          path: 'News',
          component: News
        },
        {
          path: 'Mesg',
          component: Message
        },
        {
          path: '/',
          redirect: '/About'
        }
      ]
    },
    {
      path: '/home/',
      redirect: '/home/News'
    }
  ]
})
