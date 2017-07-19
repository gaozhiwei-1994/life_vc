<template>
  <div>
    <div class="home-wrapper" ref="homeWrapper" v-show="isShow">
      <header class="header-wrapper">
        <div class="header">
          <router-link to="/allproducts">
            <span class="header-search"></span>
          </router-link>
        </div>
        <div class="menu-wrapper" ref="menuList">
          <ul class="menu-list" @click="drop" ref="menuUl" id="nav" style="width: 800px;">
            <li class="font-large selected">
              <router-link to="/homepage/firstpage">首页</router-link><!--/firstpage-->
            </li>
            <li class="font-large">
              <router-link to="/homepage/newgoods">新品</router-link>
            </li>

            <li class="font-large" v-for="channel in channels">
              <router-link :to="`/homepage/channels/${channel.id}`">{{channel.name}}</router-link>
            </li>
          </ul>
        </div>
      </header>
    </div>
    <router-view :products="products" :goods="goods"></router-view>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import firstpage from '../firstpage/firstpage.vue'
  export default {
    props: ['products'],
    data () {
      return {
        isShow: true,
        channels: [
          {id: 2860, name: '家务'},
          {id: 2859, name: '下厨'},
          {id: 2865, name: '家居服'},
          {id: 2861, name: '生活'},
          {id: 3260, name: '软装'},
          {id: 2862, name: '床品'},
          {id: 2863, name: '工作和旅游'},
          {id: 2864, name: '了解LifeVC'},
        ]
      }
    },
    created () {
      this.goods = [
        {name:'洗衣防水巾(30片)',
          price:9,
          oldPrice:19,
          commentCount:0,
          image:'http://i.lifevccdn.com/upload/AppItemInfoImage/22ff9444fc364a4cb66a5b31e2eb805b_d1242x0.jpg'},
        {name:'全棉舒适四件套(绵羊)',
          price:269,
          oldPrice:319,
          commentCount:0,
          image:'http://i.lifevccdn.com/upload/AppItemInfoImage/5bcd664da38e459aa7cf2e8c2c2542ab_d1242x0.jpg'},
        {name:'耐磨高弹力旅行箱保护套',
          price:39,
          oldPrice:49,
          commentCount:1,
          image:'http://i.lifevccdn.com/upload/AppItemInfoImage/e9c796325d644c80b8eee21e94fb2e46_d1242x0.jpg'},
        {name:'防滑金属衣架(3只装)',
          price:19,
          oldPrice:'',
          commentCount:3,
          image:'http://i.lifevccdn.com/upload/AppItemInfoImage/17ef2de78aca4bdabc82697e743ca707_d1242x0.jpg'},
        {name:'席梦思保护套(梦幻系列)',
          price:109,
          oldPrice:'',
          commentCount:109,
          image:'http://i.lifevccdn.com/upload/AppItemInfoImage/4e3696ca1ee14a7c80a29b98fdbcf6a6_d1242x0.jpg'},
        {name:'分类整理收纳箱',
          price:39,
          oldPrice:'',
          commentCount:8,
          image:'http://i.lifevccdn.com/upload/AppItemInfoImage/16b39b0ca5504a59b1dd8347d540287f_d1242x0.jpg'},
        {name:'便携式防水防污购物袋 ',
          price:49,
          oldPrice:'',
          commentCount:26,
          image:'http://i.lifevccdn.com/upload/AppItemInfoImage/1e499193e70d4ebba44f7d77edac9e86_d1242x0.jpg'},
        {name: '专业防水运动包',
          price:49,
          oldPrice:'',
          commentCount:26,
          image:'http://i.lifevccdn.com/upload/AppItemInfoImage/6b4df93f9686487cb33f072ad0cd9556_d1242x0.jpg'},
        {name:'折叠式差旅多功能包',
          price:49,
          oldPrice:'',
          commentCount:22,
          image:'http://i.lifevccdn.com/upload/AppItemInfoImage/019e6f4dd8fb4c69b67291336c5ec78b_d1242x0.jpg'},
        {name:'高端合金框飞机轮商务箱',
          price:399,
          oldPrice:'',
          commentCount:0,
          image:'http://i.lifevccdn.com/upload/AppItemInfoImage/07f53b859b274e158d2ab06c3bc519c5_d1242x0.jpg'},
        {name:'洗衣防水巾(30片)',
          price:9,
          oldPrice:19,
          commentCount:0,
          image:'http://i.lifevccdn.com/upload/AppItemInfoImage/22ff9444fc364a4cb66a5b31e2eb805b_d1242x0.jpg'},
        {name:'全棉舒适四件套(绵羊)',
          price:269,
          oldPrice:319,
          commentCount:0,
          image:'http://i.lifevccdn.com/upload/AppItemInfoImage/5bcd664da38e459aa7cf2e8c2c2542ab_d1242x0.jpg'},
        {name:'耐磨高弹力旅行箱保护套',
          price:39,
          oldPrice:49,
          commentCount:1,
          image:'http://i.lifevccdn.com/upload/AppItemInfoImage/e9c796325d644c80b8eee21e94fb2e46_d1242x0.jpg'},
        {name:'防滑金属衣架(3只装)',
          price:19,
          oldPrice:'',
          commentCount:3,
          image:'http://i.lifevccdn.com/upload/AppItemInfoImage/17ef2de78aca4bdabc82697e743ca707_d1242x0.jpg'},
        {name:'席梦思保护套(梦幻系列)',
          price:109,
          oldPrice:'',
          commentCount:109,
          image:'http://i.lifevccdn.com/upload/AppItemInfoImage/4e3696ca1ee14a7c80a29b98fdbcf6a6_d1242x0.jpg'},
        {name:'分类整理收纳箱',
          price:39,
          oldPrice:'',
          commentCount:8,
          image:'http://i.lifevccdn.com/upload/AppItemInfoImage/16b39b0ca5504a59b1dd8347d540287f_d1242x0.jpg'},
        {name:'便携式防水防污购物袋 ',
          price:49,
          oldPrice:'',
          commentCount:26,
          image:'http://i.lifevccdn.com/upload/AppItemInfoImage/1e499193e70d4ebba44f7d77edac9e86_d1242x0.jpg'},
        {name: '专业防水运动包',
          price:49,
          oldPrice:'',
          commentCount:26,
          image:'http://i.lifevccdn.com/upload/AppItemInfoImage/6b4df93f9686487cb33f072ad0cd9556_d1242x0.jpg'},
        {name:'折叠式差旅多功能包',
          price:49,
          oldPrice:'',
          commentCount:22,
          image:'http://i.lifevccdn.com/upload/AppItemInfoImage/019e6f4dd8fb4c69b67291336c5ec78b_d1242x0.jpg'},
        {name:'高端合金框飞机轮商务箱',
          price:399,
          oldPrice:'',
          commentCount:0,
          image:'http://i.lifevccdn.com/upload/AppItemInfoImage/07f53b859b274e158d2ab06c3bc519c5_d1242x0.jpg'},
        {name:'洗衣防水巾(30片)',
          price:9,
          oldPrice:19,
          commentCount:0,
          image:'http://i.lifevccdn.com/upload/AppItemInfoImage/22ff9444fc364a4cb66a5b31e2eb805b_d1242x0.jpg'},
        {name:'全棉舒适四件套(绵羊)',
          price:269,
          oldPrice:319,
          commentCount:0,
          image:'http://i.lifevccdn.com/upload/AppItemInfoImage/5bcd664da38e459aa7cf2e8c2c2542ab_d1242x0.jpg'},
        {name:'耐磨高弹力旅行箱保护套',
          price:39,
          oldPrice:49,
          commentCount:1,
          image:'http://i.lifevccdn.com/upload/AppItemInfoImage/e9c796325d644c80b8eee21e94fb2e46_d1242x0.jpg'},
        {name:'防滑金属衣架(3只装)',
          price:19,
          oldPrice:'',
          commentCount:3,
          image:'http://i.lifevccdn.com/upload/AppItemInfoImage/17ef2de78aca4bdabc82697e743ca707_d1242x0.jpg'},
        {name:'席梦思保护套(梦幻系列)',
          price:109,
          oldPrice:'',
          commentCount:109,
          image:'http://i.lifevccdn.com/upload/AppItemInfoImage/4e3696ca1ee14a7c80a29b98fdbcf6a6_d1242x0.jpg'},
        {name:'分类整理收纳箱',
          price:39,
          oldPrice:'',
          commentCount:8,
          image:'http://i.lifevccdn.com/upload/AppItemInfoImage/16b39b0ca5504a59b1dd8347d540287f_d1242x0.jpg'},
        {name:'便携式防水防污购物袋 ',
          price:49,
          oldPrice:'',
          commentCount:26,
          image:'http://i.lifevccdn.com/upload/AppItemInfoImage/1e499193e70d4ebba44f7d77edac9e86_d1242x0.jpg'},
        {name: '专业防水运动包',
          price:49,
          oldPrice:'',
          commentCount:26,
          image:'http://i.lifevccdn.com/upload/AppItemInfoImage/6b4df93f9686487cb33f072ad0cd9556_d1242x0.jpg'},
        {name:'折叠式差旅多功能包',
          price:49,
          oldPrice:'',
          commentCount:22,
          image:'http://i.lifevccdn.com/upload/AppItemInfoImage/019e6f4dd8fb4c69b67291336c5ec78b_d1242x0.jpg'},
        {name:'高端合金框飞机轮商务箱',
          price:399,
          oldPrice:'',
          commentCount:0,
          image:'http://i.lifevccdn.com/upload/AppItemInfoImage/07f53b859b274e158d2ab06c3bc519c5_d1242x0.jpg'}

      ],
      this.$nextTick(() =>{
        this.scroll = new BScroll (this.$refs.menuList,{
          probeType: 3,
          click: true,
          scrollX: true
        })
      })
    },
    methods : {
      drop (event) {
        document.body.scrollTop = 0
        var a = event.target
        var left = a.getBoundingClientRect().left
        console.log(left)
        var ul = document.querySelector('.menu-list')
        ul.scrollLeft += left
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .home-wrapper
    .header-wrapper
      width 100%
      position fixed
      top 0
      z-index 99
      .header
        position relative
        width: 100%;
        height: 4rem;
        background-size 50%
        background-repeat no-repeat
        background-position 50%
        background-color #89BE48
        bg-image(home_logo)
        .header-search
          width: 3.666666rem
          height: 3.666666rem
          display: block
          position: absolute
          z-index: 1000
          top: 0
          right: 0
          background-size: 45%
          background-repeat: no-repeat
          background-position: 50%
          bg-image(home_search)
      .menu-wrapper
        margin: 0 auto
        width: 100%
        height: 4rem
        overflow: hidden
        background white
        .menu-list
          height 4rem
          .font-large
            width 80px
            height 4rem
            float left
            text-align center
            box-sizing border-box
            a
              color: #333
              height: 3.8rem;
              display: block;
              line-height: 3.8rem;
              font-size: 2rem;
          .active
            border-bottom 2px solid #80B532
            a
              color #80B532

</style>
