<template>
  <div class="walk-container">
    <header>
      <h2>闲逛</h2>
    </header>
    <div ref="stroll">
      <mt-loadmore :top-method="loadTop" ref="loadmore"
                   :bottom-method="loadBottom">
        <div>
          <div class="walk-all-item">
            <div class="walk-item" v-for="item in stroll">
              <div class="walk-type-item">
                <div class="walk-item-layer">
                  <img :src="item.url" />
                  <span>New</span>
                </div>
                <h3 class="walk-item-title">
                  <a href="javascript:;">{{item.name}}</a>
                </h3>
                <div class="walk-price-bar">
                  <span class="walk-price">￥{{item.price}}</span>
                  <span class="walk-comment">月销 {{item.price}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="walk-all-item">
            <div class="cat-wrap">
              <div class="walk-cat"><span>49元包1年</span></div>
              <div class="walk-cat"><span>今日新品</span></div>
              <div class="walk-cat"><span>送500元积分</span></div>
              <div class="walk-cat"><span>金币商城</span></div>
            </div>
            <div class="walk-item" v-for="item in reverseStroll">
              <div class="walk-type-item">
                <div class="walk-item-layer">
                  <img :src="item.url" />
                  <span>New</span>
                </div>
                <h3 class="walk-item-title">
                  <a href="javascript:;">{{item.name}}</a>
                </h3>
                <div class="walk-price-bar">
                  <span class="walk-price">￥{{item.price}}</span>
                  <span class="walk-comment">月销 {{item.price}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </mt-loadmore>
    </div>
    <toTop></toTop>
  </div>
</template>

<script>
  import { Loadmore } from 'mint-ui';
  import toTop from '../toTop/toTop.vue'
  export default {
    props: ['stroll'],
    methods: {
      loadTop() {
        this.$refs.loadmore.onTopLoaded();
      },
      loadBottom () {
        this.$refs.loadmore.onBottomLoaded();
      }
    },
    computed: {
      reverseStroll () {
        const arr = []
        this.stroll.filter(item =>{
          arr.unshift(item)
        })
//        console.log(arr)
//        console.log(this.stroll)
        return arr
      }
    },
    components: {
      'mt-loadmore': Loadmore,
      toTop
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .walk-container
    header
      height 48px
      line-height 48px
      position: fixed;
      top 0
      left 0
      right 0
      z-index 10
      text-align center
      background-color #89BE48
      font-size 22px
      color #fff
    .index-wrapper
      z-index 9999999999999
    .walk-all-item
      margin-top 48px
      margin-bottom 48px
      width 50%
      height 100%
      float left
      overflow-x hidden
      .cat-wrap
        width 100%
        padding 5px
        margin-bottom 133px
        .walk-cat
          width: 83px;
          min-height: 58px;
          line-height 58px
          background-color: #eaeaea;
          border: 0;
          border-radius: 8px;
          vertical-align: middle;
          font-size: 14px;
          color: #4a4a4a;
          padding: 1px .5%;
          display: inline-block;
          margin: 1%;
          float: left;
          text-align: center;
      .walk-type-item
        margin 3%
        width 94%
        clear both
        .walk-item-layer
          position relative
          width 100%
          z-index -1
          img
            border-radius 8px;
            width 100%
          span
            background-color #79da87
            max-width 94%
            overflow hidden
            display inline-block
            text-align left
            font-size 12px
            color #fff
            line-height 14px
            text-transform uppercase
            padding 2px 5px
            position absolute
            top 8px
            left 0
            z-index 1
            white-space nowrap
            word-break keep-all
            text-overflow ellipsis
        .walk-item-title
          padding 3px 0 5px;
          overflow: hidden;
          white-space: nowrap;
          word-break: keep-all;
          text-overflow: ellipsis;
          a
            color: #333;
            text-decoration: none;
            font-size: 14px
        .walk-price-bar
          text-align: left;
          width: 100%;
          font-size: .9rem;
          height: 1.5rem;
          overflow: hidden
          .walk-price
            font-size: 18px;
            line-height: 18px;
            display: inline-block;
            color: #ff475d;
            font-weight: 400;
            overflow: hidden;
            text-align: left;
            width: auto;
          .walk-comment
            font-size: 14px;
            line-height: 14px;
            width: auto;
            max-width: none;
            overflow: hidden;
            float: right;
            display: inline-block;
            text-align: right;
            color: #999;
            white-space: nowrap;
            word-break: keep-all;
            text-overflow: ellipsis;
</style>

