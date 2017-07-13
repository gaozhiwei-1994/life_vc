import Vue from 'vue'
import VueRouter from 'vue-router'
import homepage from '../components/homepage/homepage.vue'
import allproducts from '../components/allproducts/allproducts.vue'
import usercenter from '../components/usercenter/usercenter.vue'
import login from '../components/login/login.vue'
import shopcart from '../components/shopcart/shopcart.vue'
import stroll from '../components/stroll/stroll.vue'
import firstpage from '../components/firstpage/firstpage.vue'
import newgoods from '../components/newgoods/newgoods.vue'
import register from '../components/register/register.vue'

Vue.use(VueRouter)

export default new VueRouter({
  linkActiveClass: 'active', //配置 class
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/homepage'
    },
    {
      path: '/homepage',//首页
      component: homepage,
      children: [
        {
          path: '',
          component: firstpage
        },
        {
          path: 'newgoods',
          component: newgoods
        }
      ]
    },
    {
      path: '/usercenter',//账户中心
      component: usercenter
    },
    {
      path: '/allproducts',//全部产品
      component: allproducts
    },
    {
      path: '/login',//登录
      component: login
    },
    {
      path: '/register',  //注册
      component: register
    },
    {
      path: '/shopcart',
      component: shopcart
    },
    {
      path: '/stroll', //闲逛
      component: stroll
    }
  ]
})
