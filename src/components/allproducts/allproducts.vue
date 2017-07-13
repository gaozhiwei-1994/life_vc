<template>
    <div>
      <div class="wrapper">
        <div class="head-wrapper">
          <div class="header">
            <p>全部产品</p>
          </div>
          <div class="search-wrapper">
            <div class="search" @click="showInput" v-show="!isShow">
              <span>搜索商品</span>
            </div>
            <div class="input" v-show="isShow">
              <input type="text" placeholder="搜索商品">
              <span @click="showDiv">取消</span>
            </div>
          </div>
        </div>
        <div class="content-wrapper">
          <div class="content" v-for="subject in products">
            <div class="content-name">
             {{subject.name}}
            </div>
            <ul class="content-list">
              <li v-for="item in subject.cards">
                <img :src="item.url" alt="">
                <span>{{item.name}}</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
      props: ['products'],
      data () {
        return {
          isShow: false
        }
      },
      created () {
          //console.log('cc',this.products)
        if(this.products.length!==0){
          this.products.forEach(p=>{
            console.log(1)
            if(p.cards.length%3 !== 0){
              const num = 3 - p.cards.length%3
              for(var i=0;i<num;i++){
                p.cards.push({})
              }
            }
          })
        }
      },
      updated () {
          //console.log('uu',this.products)
        this.products.forEach(p=>{
          //console.log(1)
          if(p.cards.length%3 !== 0){
            const num = 3 - p.cards.length%3
            for(var i=0;i<num;i++){
              p.cards.push({})
            }
            console.log(p.cards)
          }
        })
      },
      methods: {
        showInput () {
          this.isShow = !this.isShow

        },
        showDiv () {
          this.isShow = !this.isShow
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .wrapper
    width 100%
    height 100%
    background-color #F2F2F2
    .head-wrapper
      position fixed
      top 0
      left 0
      width 100%
      .header
        width 100%
        background rgb(137,190,72)
        p
          width 80%
          height 4rem
          margin 0 auto
          line-height 4rem
          font-size 20px
          color #fff
          text-align center
      .search-wrapper
        width 100%
        height 3rem
        background-color: #f2f2f2;
        padding: .5rem 0;
        .search
          width: 94%;
          height: 3rem;
          overflow: hidden;
          text-align center
          border-radius: 6px;
          margin: 0 auto;
          background-color white
          background-image url("./glass.png")
          background-repeat no-repeat
          background-position: 36% .5rem;
          background-size: auto 70%;
          z-index 100
          span
            position relative
            top 11px
            font-size 16px;
            font-weight 200
        .input
          input
            width 80%
            height 3rem
            outline none
            border-radius 6px
            background-image url("./glass.png")
            background-repeat no-repeat
          input::-ms-input-placeholder{text-align: center;}
          input::-webkit-input-placeholder{text-align: center;}
          span
            display: inline-block
            width: 15%;
            height: 3rem;
            margin auto 0
            font-size: 15px
            text-align right
            color: #83b842;

    .content-wrapper
      width 100%
      padding-top  8rem
      padding-bottom 5rem
      .content
        width 100%
        margin-top 2rem
        .content-name
          width 33.333%
          height 3rem
          margin auto
          text-align center
          font-size 20px
        .content-list
          overflow hidden
          background-color #F2F2F2
          li
            float: left;
            width: 33.3333%;
            height 138px
            text-align: center;
            border: 1px solid #f1f1f1;
            margin: 0 0 -1px -1px;
            box-sizing border-box
            background-color #fff
            img
              width: 60%!important;
              margin: auto;
              padding-top: 1rem;
            span
              display block
              height: 2rem;
              line-height: 2rem;
              padding-bottom: 1rem;
              padding-top: .5rem;
              font-size: 15px

</style>
