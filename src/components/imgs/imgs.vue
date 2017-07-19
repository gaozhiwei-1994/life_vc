<template>
  <div >
    <ul class="img-items">
      <li class="img-item" v-for="good in goods">
        <router-link to="">
          <img :src="good.image" alt="">
        </router-link>
        <div class="img-panel">
          <div class="img-title">{{good.name}}</div>
          <div class="img-details">
            <div class="img-price">
              <span class="act-tag" v-show="good.promotion">限时体验价</span>
              <span>￥</span>
              <span>{{good.price}}</span>
              <span class="img-old">{{good.oldPrice}}</span>
              <span class="ing-new" v-show="good.active">{{good.active}}</span>
            </div>
            <div class="img-comment">
              <span class="comment-content">评论&nbsp;:&nbsp{{good.commentCount}}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      props: ['goods']
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .img-items
    width 96%
    border 1px solid #ddd
    margin 2rem auto 0
    .img-item
      width 100%
      border: 1px solid #ddd;
      padding-bottom 2rem
      a
        display block
        width 100%

        img
         width 100%
      .img-panel
        width 100%
        background white
        font-size: 1.9rem;
        font-weight bold
        color: #333;
        line-height: 2.6rem;
        padding-bottom .3rem
        overflow hidden
        text-align: left;
        .img-title
          width: 94%;
          overflow: hidden;
          margin: 0 auto;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding-top: .5rem;
        .img-details
          width 94%
          margin 0 auto
          .img-price
            width 68%
            display inline-block
            .act-tag
              background #FFF000
            .img-old
              text-decoration line-through
              color #ccc
            .ing-new
              background #CC0000
          .img-comment
            display inline-block
            width 30%
            text-align right
</style>
