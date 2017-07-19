<template>
  <div class="toTop" v-show="isShow" @click="toTop">
    <a>&lt;</a>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isShow: false
      }
    },
    created () {
      document.body.addEventListener('touchmove',function () {
        if(document.body.scrollTop>=600){
          this.isShow = true
        }
      }.bind(this),false)
    },
    methods: {
      toTop () {
        var time = setInterval(()=>{
          document.body.scrollTop -= 150
          if(document.body.scrollTop===0){
            clearInterval(time)
            this.isShow = false
          }
        },10)
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .toTop
    width: 3rem;
    height: 3rem;
    line-height 3rem
    background rgba(51,51,51,.3)
    position fixed
    right 2rem
    bottom 6rem
    border-radius 50%
    text-align center
    a
      font-size 3rem
      font-weight bold
      color #ccc
      display block
      margin 0 auto
      transform rotate(90deg)
</style>
