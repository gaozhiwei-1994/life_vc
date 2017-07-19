<template>
  <div style="width: 100%;height: 1024px;position: fixed;z-index: 101;background-color: white">
    <div class="set-wrapper" v-show="!isLife">
      <header>
        <router-link to="/usercenter"><div class="set-back-btn"></div></router-link>
        <span class="set-span">设置</span>
      </header>
      <div class="set-container">
        <ul class="set-list">
          <li @click.stop="showMask">
            <span class="set-item-title">清理缓存</span>
            <span class="set-to-clear"></span>
          </li>
          <li @click="showLife(true)">
            <span class="set-item-title">关于LifeVc</span>
            <span class="set-to-clear"></span>
            <span class="set-item-v">平台: browser 版本：5.1.2 - 261</span>
          </li>
        </ul>
      </div>
    </div>

   <!-- <div class="clear-content" v-show="isShow" @click.stop="disMask">
    </div>-->

    <transition name="fade">
      <div class="about-life-wrapper" v-show="isLife">
        <header>
          <router-link to=""><div class="life-back-btn" @click="showLife(false)"></div></router-link>
          <span class="life-span">关于LifeVC</span>
        </header>
        <div class="about-content">
          <div class="img-wrapper">
            <div class="img-content">
              <div class="img-item item1"><img :src="imgs[0].url" alt=""></div>
              <div class="img-item item2"><img :src="imgs[1].url" alt=""></div>
            </div>
          </div>

          <div class="text-wrapper"></div>
        </div>
      </div>
    </transition>

  </div>

</template>

<script>
  import { MessageBox } from 'mint-ui';
  export default {
    data () {
      return {
        isShow: false,
        isLife: false
      }
    },
    created () {
      this.imgs = [
        {url: 'http://i1.lifevccdn.com/Images/m/AboutLifeVC/client.png'},
        {url: 'http://i1.lifevccdn.com/Images/m/AboutLifeVC/weixin825.png'}
      ]
    },
    methods: {
      showMask () {
        this.isShow = true
        MessageBox.confirm(`确定要清理缓存吗？`)
          .then(()=>{
            MessageBox('提示', '操作成功');
            this.isShow = false
          })
          .catch(()=>{
            this.isShow = false
          })
      },
      disMask () {
        this.isShow = false
      },
      showLife (lifeShow) {
        this.isLife = lifeShow
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .set-wrapper
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
        .set-back-btn
          float left
          height 46px
          width 37px
          background url("./sm-icon.png") no-repeat
          background-size 40%
          background-position 50% 50%
      .set-span
        font-size 22px
        width 80%
        display inline-block
        text-align center
        color #fff
    .set-container
      .set-list
        margin-top 48px
        margin-bottom 1rem
        li
          width: 100%;
          height: 5rem;
          overflow: hidden;
          background-color: #fff;
          border-bottom: 1px solid #eee;
          border-top: 1px solid #eee;
          margin: -1px auto 0;
          .set-item-title
            display: inline-block;
            line-height: 5rem;
            text-decoration: none;
            float: left;
            vertical-align: 0;
            font-size: 2rem;
            color: #585858;
            padding-left: 20px;
          .set-to-clear
            width: 10px;
            height: 10px;
            display: inline-block;
            float: right;
            border-right: 2px solid #bbb;
            border-top: 2px solid #bbb;
            margin: 25px 10px 0 0;
            transform: rotate(45deg);
          .set-item-v
            height: 5rem;
            display: inline-block;
            line-height: 5rem;
            text-decoration: none;
            float: right;
            text-align: right;
            font-size: 1.2rem;
            color: #ccc;
            padding-right: 5px;

  .clear-content
    width 100%
    z-index 2016
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    opacity: .5;
    background: #000

  .about-life-wrapper
    position relative
    header
      position absolute
      top -48px
      left 0
      right 0
      height 46px
      line-height 46px
      width 100%
      background-color #89BE48
      a
        .life-back-btn
          float left
          height 46px
          width 37px
          background url("./sm-icon.png") no-repeat
          background-size 40%
          background-position 50% 50%
      .life-span
        font-size 22px
        width 80%
        display inline-block
        text-align center
        color #fff

    .about-content
      width 100%
      height 100%
      padding-bottom 2rem
      .img-wrapper
        margin 48px auto 0
        width 100%
        height 38%
        .img-content
          padding-top 2rem
          margin 0 auto
          width 95%
          height 63%
          display flex
          .img-item
            flex 1
            width 40%
            height 164px
            border 1px solid
            text-align center
            vertical-align middle
            float left
            img
              width 92%
              height 92%

  .fade-enter-active, .fade-leave-active
    transition: all .2s linear

  .fade-enter, .fade-leave-to
    opacity: 0
    transform translate3d(100%,0,0)



</style>
