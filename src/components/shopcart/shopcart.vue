<template>
  <div class="cart-container">
    <header>
    <router-link to="/"><div class="cart-back-btn"></div></router-link>
    <span class="cart-span">购物车</span>
  </header>
    <div class="cart-content">
      <div class="cart-login-wrap">
        <div class="cart-login">
          <router-link to="/login"><div class="cart-login-btn">登录</div></router-link>
          <p class="cart-login-text">你可以在登录后同步电脑与手机购物车中的商品</p>
        </div>
      </div>
      <div class="cart-exchange-wrap">
        <div class="cart-exchange">
          <input type="text" maxlength="15" placeholder="礼品兑换处，请输入兑换码"
                 class="exch-ipt"
                 v-model="exchContent"><!--

          --><input type="button" value="兑换" class="exch-btn"
                       @click="exchange">
        </div>
      </div>
      <div class="wrap-nodata">
        <div class="cart-banner">
          <img src="./cartbanner.png" alt="购物车">
          <p>您的购物车还是空荡荡的</p>
          <router-link to="/stroll"><div class="cart-btn">赶紧去逛逛</div></router-link>
        </div>
      </div>
      <div class="cart-p">
        <p>Rico.S为你精心推荐</p>
      </div>
      <div class="cart-assem-list">
        <ul>
          <li>
            <img src="./cartpic-1.jpg" alt="">
            <p>水槽沥水置物架</p>
            <span>￥9</span>
          </li>
          <li>
            <img src="./cartpic-2.jpg" alt="">
            <p>舒适轻便家居拖鞋</p>
            <span>￥19</span>
          </li>
          <li>
            <img src="./cartpic-3.jpg" alt="">
            <p> 甲醛清除剂(3盒装)</p>
            <span>￥29</span>
          </li>
          <li>
            <img src="./cartpic-4.jpg" alt="">
            <p>加拿大原生木浆卷纸（8卷）</p>
            <span>￥19</span>
          </li>
          <li>
            <img src="./cartpic-5.jpg" alt="">
            <p>活氧除水垢片(6片装)</p>
            <span>￥9</span>
          </li>
          <li>
            <img src="./cartpic-6.jpg" alt="">
            <p>加厚食品保鲜袋</p>
            <span>￥9</span>
          </li>
          <li>
            <img src="./cartpic-7.jpg" alt="">
            <p>双球无死角清洁马桶刷</p>
            <span>￥19</span>
          </li>
          <li>
            <img src="./cartpic-8.jpg" alt="">
            <p>懒人清洁拖把(不脏手型Ⅱ代)</p>
            <span>￥9</span>
          </li>
          <li>
            <img src="./cartpic-9.jpg" alt="">
            <p>可挂式防尘防潮收纳袋</p>
            <span>￥19</span>
          </li>
          <li>
            <img src="./cartpic-10.jpg" alt="">
            <p>席梦思保护套(梦幻系列)</p>
            <span>￥109</span>
          </li>
          <li>
            <img src="./cartpic-1.jpg" alt="">
            <p>水槽沥水置物架</p>
            <span>￥9</span>
          </li>
          <li>
            <img src="./cartpic-2.jpg" alt="">
            <p>舒适轻便家居拖鞋</p>
            <span>￥19</span>
          </li>
          <li>
            <img src="./cartpic-3.jpg" alt="">
            <p> 甲醛清除剂(3盒装)</p>
            <span>￥29</span>
          </li>
          <li>
            <img src="./cartpic-4.jpg" alt="">
            <p>加拿大原生木浆卷纸（8卷）</p>
            <span>￥19</span>
          </li>
          <li>
            <img src="./cartpic-5.jpg" alt="">
            <p>活氧除水垢片(6片装)</p>
            <span>￥9</span>
          </li>
          <li>
            <img src="./cartpic-6.jpg" alt="">
            <p>加厚食品保鲜袋</p>
            <span>￥9</span>
          </li>
          <li>
            <img src="./cartpic-7.jpg" alt="">
            <p>双球无死角清洁马桶刷</p>
            <span>￥19</span>
          </li>
          <li>
            <img src="./cartpic-8.jpg" alt="">
            <p>懒人清洁拖把(不脏手型Ⅱ代)</p>
            <span>￥9</span>
          </li>
          <li>
            <img src="./cartpic-9.jpg" alt="">
            <p>可挂式防尘防潮收纳袋</p>
            <span>￥19</span>
          </li>
          <li>
            <img src="./cartpic-10.jpg" alt="">
            <p>席梦思保护套(梦幻系列)</p>
            <span>￥109</span>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui';
  export default {
    data () {
      return {
        exchContent: ''
      }
    },
    methods: {
      exchange () {
        if(this.exchContent==''){
          //alert('请填写正确的验证码')
          MessageBox('提示','请填写正确验证码')
        }else{
          this.exchContent = ''
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cart-container
    header
      position fixed
      top 0
      left 0
      right 0
      height 46px
      line-height 46px
      width 100%
      background-color #89BE48
      a
        .cart-back-btn
          float left
          height 46px
          width 37px
          background url("./sm-icon.png") no-repeat
          background-size 40%
          background-position 50% 50%
      .cart-span
        font-size 22px
        width 80%
        display inline-block
        text-align center
        color #fff
    .cart-content
      margin-top 46px
      .cart-login-wrap
        height 52px
        width 100%
        background-color #F0FAE6
        padding 0 10px
        box-sizing border-box
        .cart-login
          padding 10px 0
          .cart-login-btn
            width: 18%
            height: 33px
            display: inline-block
            background: #fff;
            border: 1px solid #8bc146
            text-align: center
            font-size: 16px
            color: #88c13e;
            line-height: 33px
            vertical-align middle
          .cart-login-text
            width 75%
            display inline-block
            vertical-align middle
            font-size 14px
      .cart-exchange-wrap
        height 53px
        width 100%
        .cart-exchange
          padding 10px
          .exch-ipt
            width: 80%;
            height: 35px
            line-height: 35px
            display: inline-block;
            border: 1px solid #e7e7e7;
            background: #fff
            font-size: 14px;
            outline none
          input::-ms-input-placeholder{text-align: center;}
          input::-webkit-input-placeholder{text-align: center;}
          .exch-btn
            width: 19%;
            height: 36px
            line-height: 36px
            display: inline-block;
            border-radius: 0;
            background: #fff;
            text-align: center;
            font-size: 16px
            color: #6fbd00;
            letter-spacing: 5px
            text-indent: 5px
            outline none
            border: 1px solid #6fbd00;
      .wrap-nodata
        background-color: #f2f2f2
        height 237px
        width 100%
        .cart-banner
          width 100%
          height 137px
          img
            display block
            width 40%
            margin 0 auto
          p
            padding 10px 0
            width 100%
            color rgb(102, 102, 102)
            text-align center
            font-size 20px
          .cart-btn
            width: 118px
            height: 34px
            line-height 34px
            border-radius 5px
            color #88c13e
            border 1px solid #88c13e
            text-align center
            margin 0 auto
      .cart-p
        width 100%
        height 44px
        padding 12px
        color #000
        font-weight 600
        box-sizing border-box
        border-bottom 1px solid #eee
      .cart-assem-list
        height 175px
        width 100%
        overflow hidden
        ul
          padding 15px 5px
          white-space nowrap
          overflow hidden
          overflow-x scroll
          li
            width 96px
            margin-right 10px
            font-size 12px
            display inline-block
            img
              width 96px
              height 96px
            p
              width 96px
              line-height 28px
              white-space nowrap
              overflow hidden
              text-overflow ellipsis

</style>
