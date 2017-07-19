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
import channels from '../components/channels/channels.vue'
import footer from '../components/footer/footer.vue'
import setting from '../components/setting/setting.vue'

Vue.use(VueRouter)

export default new VueRouter({
  linkActiveClass: 'active', //配置 class
  mode: 'history',
  routes: [
    {
      path: '/login',//登录
      component: login
    },
    {
      path: '/register',  //注册
      component: register
    },
    {
      path: '/setting',
      component: setting
    },
    {
      path: '/',
      component: footer, //footer
      children: [
        {
          path: '/',
          redirect: 'homepage'  //默认首页 上边的头 和 nav
        },
        {
          path: 'homepage',
          component: homepage,
          children: [
            {
              path: '/',
              redirect: 'firstpage' //首页主页面 (轮播图等)
            },
            {
              path: 'firstpage',
              component: firstpage
            },
            {
              path: 'newgoods',  //新品
              component: newgoods
            },
            {
              path: 'channels/:id', //家务
              component: channels
            }
          ]
        },
        {
          path: 'usercenter',//账户中心
          component: usercenter
        },
        {
          path: 'allproducts',//全部产品
          component: allproducts
        },
        {
          path: 'shopcart',  //购物车
          component: shopcart
        },
        {
          path: 'stroll', //闲逛
          component: stroll
        }
      ]
    }
  ]
})
/*根路由必须加上/
* 子路由可以直接写子路由字符串，也可以写全
* router-link中的to 必须写全
* */
/*
* routes: [
 {
 path: '/setting',
 name: 'setting',
 component: setting
 },
 {
 path: '/login',
 name: 'login',
 component: login
 },
 {
 path: '/register',
 name: 'register',
 component: register
 },
 {
 path: '/channelsub/2860/2877',
 name: '家务产品',
 component: homelist
 },
 {
 path: '/',
 name: 'App2',
 component: App2,
 children:[
 {
 path: '/',
 name: 'content',
 redirect:'/content'},
 {
 path: '/content',
 name: 'content',
 component:content,
 children: [
 {
 path: '/',
 name: 'Home',
 redirect: '/content/Home'
 },
 {
 path: '/content/Home',
 name: 'Home',
 component: Home
 },
 {
 path: '/content/New',
 name: 'New',
 component: New
 },
 {
 path: '/content/channel/2860',
 name: '2860',
 component: household
 },
 {
 path: '/content/channel/2859',
 name: '2859',
 component: icook
 },
 {
 path: '/content/channel/2865',
 name: '2865',
 component: clothes
 },
 {
 path: '/content/channel/2861',
 name: '2861',
 component: live
 },
 {
 path: '/content/channel/3260',
 name: '3260',
 component: software
 },
 {
 path: '/content/channel/2862',
 name: '2862',
 component: bed
 },
 {
 path: '/content/channel/2863',
 name: '2863',
 component: work
 },
 ]
 },
 {
 path: '/all',
 name: 'all',
 component:all
 },
 {
 path: '/stroll',
 name: 'stroll',
 component: stroll
 },
 {
 path: '/cart',
 name: 'cart',
 component: cart
 },
 {
 path: '/usercenter',
 name: 'usercenter',
 component: usercenter
 },
 ]
 },


 ]
* */
