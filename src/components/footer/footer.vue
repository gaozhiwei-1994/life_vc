<template>
  <div>
    <div class="footer">
      <div class="footer-item">
        <router-link class="router-item" to="/homepage">
          <div class="ico homeico"></div>
          <span>首页</span>
        </router-link>
      </div>
      <div class="footer-item">
        <router-link class="router-item" to="/allproducts">
          <div class="ico allico"></div>
          <span>全部产品</span>
        </router-link>
      </div>
      <div class="footer-item">
        <router-link class="router-item" to="/stroll">
          <div class="ico strico"></div>
          <span>闲逛</span>
        </router-link>
      </div>
      <div class="footer-item">
        <router-link class="router-item" to="/shopcart">
          <div class="ico cartico"></div>
          <span>购物车</span>
        </router-link>
      </div>
      <div class="footer-item">
        <router-link class="router-item" to="/usercenter">
          <div class="ico centerico"></div>
          <span>个人中心</span>
        </router-link>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer
    height 4.5rem
    width 100%
    position fixed
    left 0
    bottom 0
    background #f8f8f8
    border-top .04rem solid #ddd
    display flex
    .footer-item
      height 100%
      flex 1
      .router-item
        display: block;
        color: #ababab;
        line-height: .1rem;
        font-size: 1.1rem;
        vertical-align: bottom;
        text-align: center;
      .ico
        width: 100%;
        height: 3.3rem;
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: 28%;
        margin-bottom: .2rem;
      .homeico
        bg-image(footer_home)
      .allico
        bg-image(footer_all)
      .cartico
        bg-image(footer_shopcart)
      .centerico
        bg-image(footer_usercenter)
      .strico
        bg-image(footer_str)

</style>
