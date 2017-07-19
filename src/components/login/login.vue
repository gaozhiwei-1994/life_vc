<template>
    <div>
      <div class="wrapper">
        <div class="top">
          <div class="goback" @click="reset"></div>
          <!--<router-link to="/usercenter">
            <div class="goback" @click="reset"></div>
          </router-link>-->
        </div>
        <div class="bottom">
          <div class="register-wrapper" v-show="isShow">
            <h1>新用户注册</h1>
            <div class="register-content">
              <form action="">
                <ul class="register-list">
                  <li>
                    <input type="text" placeholder="请输入手机号">
                  </li>
                  <li>
                    <input type="text" placeholder="请设置6-20位密码,包含字母、数字或符号">
                  </li>
                  <li>
                    <input class="img-pas" type="text" placeholder="请输入图形验证码">
                    <div class="code-content">
                      <img class="img-code" src="./code.jpg" alt="">
                      <img class="img-refresh" src="./refresh.png" alt="">
                    </div>
                  </li>
                  <li>
                    <input class="mob-pas" type="text" placeholder="请输入手机验证码">
                    <a href="#">获取验证码</a>
                  </li>
                </ul>
                <p>遇到问题？请 <a href="javascript:;">联系客服</a></p>
                <input class="btn-re" type="submit" value="注册">
                <input class="btn-log" type="submit" value="登录" @click="show">
              </form>
            </div>
          </div>

          <div class="login-wrapper" v-show="!isShow">
            <h1>老用户登录</h1>
            <div class="register-content">
              <form action="">
                <ul class="register-list">
                  <li>
                    <input type="text" placeholder="请输入手机号">
                  </li>
                  <li>
                    <input class="mob-pas" type="text" placeholder="请输入登录密码">
                    <a href="#">忘记密码</a>
                  </li>
                </ul>
                <div class="quick">
                  <a href="#">
                    <span>手机号快捷登录</span>
                  </a>
                </div>
                <input class="btn-log" type="submit" value="登录">
                <input class="btn-re" type="submit" value="注册" @click="show">
              </form>
            </div>

          </div>
        </div>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
  export default {
    data () {
      return{
        isShow: false
      }
    },
    methods: {
      show (event) {
        event.preventDefault()
        this.isShow = !this.isShow
      },
      reset () {
        this.isShow = false
        history.back()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .wrapper
    width 100%
    height 100%
    position fixed
    z-index 200
    .top
      position fixed
      left 0
      top 0
      width: 100%;
      height: 22%
      background-image url("./top.png")
      background-size 33.3333% 33.33333%
      background-repeat no-repeat
      background-position center
      .goback
        width: 26px;
        height: 26px;
        display: block;
        border-radius: 50%;
        position: absolute;
        left: 1.5rem;
        top: 46px;
        border: 1px solid #3aad36
        &:after
          content:''
          width 14px
          height 14px
          display: block;
          border-left: 1px solid #3aad36;
          border-top: 1px solid #3aad36;
          position: absolute;
          left: 10px;
          top: 5px;
          transform: rotate(-45deg);
    .bottom
      position fixed
      left 0
      bottom 0
      width 100%
      height 78%
      background-image url("./bottom.jpg")
      background-size 100% 100%
      background-repeat no-repeat
      background-position center
      .register-wrapper
        width 100%
        height 72.5%
        text-align center
        h1
          width: 100%;
          height: 15%
          color: #037049;
          font-size: 20px;
          line-height: 6rem;
          box-sizing: border-box
        .register-content
          width 100%
          height 85%
          .register-list
            box-sizing: border-box;
            margin-bottom: .2rem;
            li
              width: 90%;
              margin: 0 auto;
              height: 51px;
              border-bottom: 1px solid #dbdbdb;
              position: relative;
              input
                width 100%
                height 100%
                outline none
                font-size: 16px;
                background: transparent;
                position: absolute;
                left: 0;
                top: 0;
                box-sizing: border-box;
              .img-pas,.mob-pas
                width 70%
                height 100%
              .code-content
                width 30%
                height 100%
                position absolute
                right 0
                top 0
                vertical-align middle
                padding 11px 0
                box-sizing border-box
                .img-code
                  width 70%

                .img-refresh
                  width 15%
                  position relative
                  left 7px
                  top -4px

              a
                width 30%
                height 52%
                line-height 25px
                display: inline-block;
                float: right;
                text-align: right;
                font-size: 16px;
                color: #3aad36;
                text-decoration: none;
                border: 1px solid #3aad36;
                border-radius: 4px;
                padding: .08rem .3rem;
                text-align: center;
                position: absolute;
                right: 0;
                top: 19%
          p
            font-size: 14px;
            color: #666;
            width: 100%;
            text-align: center;
            margin-bottom: .1rem;
            a
              color #037049

          .btn-re,.btn-log
            width: 80%;
            height 3.2rem
            margin 10px auto 0
            color: #fff
            overflow: hidden;
            display: block;
            outline: none;
            text-align: center;
            font-size: 19px;
            line-height: .72rem;
            letter-spacing: 20px;
            text-indent: 20px;
            background: transparent;
            border-radius 8px
            box-sizing: border-box;
          .btn-re
            background-color green
          .btn-log
            background-color #8a8a8a
            opacity 0.5

      .login-wrapper
        width 100%
        height 72.5%
        text-align center
        h1
          width: 100%;
          height: 24%
          color: #037049;
          font-size: 20px;
          line-height: 6rem;
          box-sizing: border-box
        .register-content
          width 100%
          height 85%
          .register-list
            box-sizing: border-box;
            margin-bottom: .2rem;

            li
              width: 90%;
              margin: 0 auto;
              height: 51px;
              border-bottom: 1px solid #dbdbdb;
              position: relative;
              input
                width 100%
                height 100%
                outline none
                font-size: 16px;
                background: transparent;
                position: absolute;
                left: 0;
                top: 0;
                box-sizing: border-box;
              .mob-pas
                width 70%
                height 100%

              a
                width 30%
                height 52%
                line-height 25px
                display: inline-block;
                float: right;
                text-align: right;
                font-size: 16px;
                color: #3aad36;
                text-decoration: none;
                border: 1px solid #3aad36;
                border-radius: 4px;
                padding: .08rem .3rem;
                text-align: center;
                position: absolute;
                right: 0;
                top: 19%
            a
              color #037049

          .btn-re,.btn-log
            width: 80%;
            height 3.2rem
            margin 10px auto 0
            color: #fff
            overflow: hidden;
            display: block;
            outline: none;
            text-align: center;
            font-size: 19px;
            line-height: .72rem;
            letter-spacing: 20px;
            text-indent: 20px;
            background: transparent;
            border-radius 8px
            box-sizing: border-box;
          .btn-re
            background-color #8a8a8a
            opacity 0.5
          .btn-log
            background-color #3aad36

          .quick
            padding: .18rem 0 .4rem;
            text-align: right;
            height: 1rem;
            width: 90%;
            margin: 15px auto 25px
            font-size: 16px;
            box-sizing: border-box;
            position: relative;
            a
              color: #3aad36;
              letter-spacing: 1px;
              font-size: 15px;
              margin: 0 0 .8rem;
              span
                float: right;
                line-height: .4rem;
                margin-right: .14rem;
</style>
