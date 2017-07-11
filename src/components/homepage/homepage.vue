<template>
   <div>
     <div class="home-wrapper">
       <header class="header-wrapper">
         <div class="header">
           <router-link to="/allproducts">
             <span class="header-search"></span>
           </router-link>
         </div>
         <div class="menu-wrapper">
           <ul class="menu-list" style="width: 800px;">
             <li class="font-large selected">
               <router-link to="/">首页</router-link>
             </li>
             <li class="font-large">
               <router-link to="/homepage/newgoods">新品</router-link>
             </li>
             <li class="font-large"><a>家务</a></li>
             <li class="font-large"><a>下厨</a></li>
             <li class="font-large"><a>家居服</a></li>
             <li class="font-large"><a>生活</a></li>
             <li class="font-large"><a>软装</a></li>
             <li class="font-large"><a>床品</a></li>
             <li class="font-large"><a>工作和旅行</a></li>
             <li class="font-large"><a>了解LifeVC</a></li>
           </ul>
         </div>
       </header>
       </div>
     <router-view></router-view>
     </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'mint-ui';
    export default {
      components: {
        'mt-swipe': Swipe,
        'mt-swipe-item': SwipeItem
      }
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
        overflow-x scroll
        background white
        .menu-list
          height 4rem
          li
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
              font-size: 2rem;/*1.35*/
          .selected
            border-bottom 2px solid #80B532
            a
              color: #80B532

</style>
