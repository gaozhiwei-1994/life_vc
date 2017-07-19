<template>
   <div>
     <div class="home-wrapper" id="homeWrapper" ref="homeWrapper">
       <div class="swipe">
         <mt-swipe :auto="2000">
           <mt-swipe-item>
             <img src="./1.jpg" alt="">
           </mt-swipe-item>
           <mt-swipe-item>
             <img src="./2.jpg" alt="">
           </mt-swipe-item>
           <mt-swipe-item>
             <img src="./3.jpg" alt="">
           </mt-swipe-item>
           <mt-swipe-item>
             <img src="./4.jpg" alt="">
           </mt-swipe-item>
           <mt-swipe-item>
             <img src="./5.jpg" alt="">
           </mt-swipe-item>
           <mt-swipe-item>
             <img src="./6.jpg" alt="">
           </mt-swipe-item>
           <mt-swipe-item>
             <img src="./7.jpg" alt="">
           </mt-swipe-item>
           <mt-swipe-item>
             <img src="./8.jpg" alt="">
           </mt-swipe-item>
           <mt-swipe-item>
             <img src="./9.jpg" alt="">
           </mt-swipe-item>
         </mt-swipe>
       </div>
       <div class="activity-wrapper">
         <div class="combo" title="组合图活动">
           <img src="./item_combo.jpg" alt="组合图活动" usemap="#planetmap">
           <map name="planetmap" id="planetmap">
             <area shape="rect" coords="0,9,123,88" href ="#" title=限时/>
             <area shape="rect" coords="123,9,251,90" href ="#" title="送购"/>
             <area shape="rect" coords="251,9,375,89" href ="#" title="积分"/>
           </map>
         </div>
       </div>
       <div class="new-products-wrapper">
         <div class="combo">
           <img src="./new_products.jpg" alt="新品首发" usemap="#planetmap2">
           <map data-v-46782024="" name="planetmap2" id="planetmap2">
             <area shape="rect" coords="0,64,375,231" href="#">
             <area shape="rect" coords="0,240,375,407" href="#">
             <area shape="rect" coords="0,407,375,573" href="#">
             <area shape="rect" coords="0,573,123,749" href="#">
             <area shape="rect" coords="123,573,251,749" href="#">
             <area shape="rect" coords="251,573,375,749" href="#">
             <area shape="rect" coords="0,749,123,925" href="#">
             <area shape="rect" coords="123,749,251,925" href="#">
             <area shape="rect" coords="251,749,375,925" href="#">
           </map>
         </div>
       </div>
       <div class="point">
         <div class="combo">
           <img src="./point.jpg" alt="积分特价换购" usemap="#planetmap3">
           <map name="planetmap3" id="planetmap3">
             <area shape="rect" coords="0,26,371,235" href="#">
           </map>
         </div>
       </div>
       <div class="oldvip">
         <div class="combo">
           <img src="./oldvip.jpg" alt="老会员" usemap="#planetmap4">
           <map name="planetmap4" id="planetmap4">
             <area shape="rect" coords="3,46,86,158" href="#">
             <area shape="rect" coords="93,46,191,164" href="#">
             <area shape="rect" coords="191,46,281,164" href="#">
             <area shape="rect" coords="285,46,371,164" href="#">
             <area shape="rect" coords="3,170,90,294" href="#">
             <area shape="rect" coords="93,170,183,294" href="#">
             <area shape="rect" coords="187,170,281,294" href="#">
             <area shape="rect" coords="281,170,375,294" href="#">
           </map>
         </div>
       </div>
       <div class="fourtynine">
         <div class="combo">
           <img src="./fourtynine.jpg" alt="49元包年" usemap="#planetmap5">
           <map name="planetmap5" id="planetmap5">
             <area shape="rect" coords="0,2,375,101" href="#">
           </map>
         </div>
       </div>
       <div class="housework">
         <div class="combo">
           <img src="./housework.jpg" alt="家务" usemap="#planetmap6">
           <map data-v-46782024="" name="planetmap6" id="planetmap6">
             <area shape="rect" coords="0,0,375,151" href="#">
             <area shape="rect" coords="3,158,168,330" href="#">
             <area shape="rect" coords="187,158,367,330" href="#">
             <area shape="rect" coords="3,337,180,509" href="#">
             <area shape="rect" coords="183,337,367,509" href="#">
             <area shape="rect" coords="3,516,180,682" href="#">
             <area shape="rect" coords="187,516,367,675" href="#">
           </map>
         </div>
       </div>
       <div class="cook">
         <div class="combo">
           <img src="./cook.jpg" alt="下厨" usemap="#planetmap7">
           <map data-v-46782024="" name="planetmap7" id="planetmap7">
             <area shape="rect" coords="0,0,375,151" href="#">
             <area shape="rect" coords="7,165,183,330" href="#">
             <area shape="rect" coords="191,158,371,330" href="#">
             <area shape="rect" coords="7,330,183,503" href="#">
             <area shape="rect" coords="191,330,367,496" href="#">
             <area shape="rect" coords="7,503,183,675" href="#">
             <area shape="rect" coords="187,503,367,675" href="#">
           </map>
         </div>
       </div>
       <div class="bed">
         <div class="combo">
           <img src="./bed.jpg" alt="床品" usemap="#planetmap8">
           <map data-v-46782024="" name="planetmap8" id="planetmap8">
             <area shape="rect" coords="0,0,375,150" href="#">
             <area shape="rect" coords="11,164,127,314" href="#">
             <area shape="rect" coords="131,159,243,309" href="#">
             <area shape="rect" coords="247,164,360,309" href="#">
             <area shape="rect" coords="11,314,123,474" href="#">
             <area shape="rect" coords="127,314,243,469" href="#">
             <area shape="rect" coords="247,314,360,469" href="#">
           </map>
         </div>
       </div>
       <div class="jiajufu">
         <div class="combo">
           <img src="./jiajufu.jpg" alt="家居服" usemap="#planetmap9">
           <map data-v-46782024="" name="planetmap9" id="planetmap9">
             <area shape="rect" coords="0,0,375,151" href="#">
             <area shape="rect" coords="11,158,183,330" href="#">
             <area shape="rect" coords="187,158,371,337" href="#">
             <area shape="rect" coords="11,330,180,503" href="#">
             <area shape="rect" coords="183,330,371,503" href="#">
             <area shape="rect" coords="7,503,176,675" href="#">
             <area shape="rect" coords="183,503,367,675" href="#">
           </map>
         </div>
       </div>
       <div class="life">
         <div class="combo">
           <img src="./life.jpg" alt="生活" usemap="#planetmap10">
           <map data-v-46782024="" name="planetmap10" id="planetmap10">
             <area shape="rect" coords="0,0,375,151" href="#">
             <area shape="rect" coords="11,158,183,330" href="#">
             <area shape="rect" coords="187,158,371,337" href="#">
             <area shape="rect" coords="11,330,180,503" href="#">
             <area shape="rect" coords="183,330,371,503" href="#">
             <area shape="rect" coords="7,503,176,675" href="#">
             <area shape="rect" coords="183,503,367,675" href="#">
           </map>
         </div>
       </div>
       <div class="work">
         <div class="combo">
           <img src="./work.jpg" alt="工作和旅行" usemap="#planetmap11">
           <map name="planetmap11" id="planetmap11">
             <area shape="rect" coords="0,0,375,150" href="#">
             <area shape="rect" coords="11,164,123,314" href="#">
             <area shape="rect" coords="131,164,243,314" href="#">
             <area shape="rect" coords="247,164,360,314" href="#">
             <area shape="rect" coords="11,314,123,469" href="#">
             <area shape="rect" coords="131,314,243,469" href="#">
             <area shape="rect" coords="247,314,360,469" href="#">
           </map>
         </div>
       </div>
       <div class="juicer">
         <div class="combo">
           <img src="./juicer.jpg" alt="榨汁机" usemap="#planetmap12">
           <map name="planetmap12" id="planetmap12">
             <area shape="rect" coords="0,2,375,99" href="#">
           </map>
         </div>
       </div>
       <div class="promise">
         <div class="combo">
           <img src="./promise.jpg" alt="承诺6年" usemap="#planetmap13">
           <map name="planetmap13" id="planetmap13">
             <area shape="rect" coords="0,1,375,188" href="#">
           </map>
         </div>
       </div>
       <div class="hot">
         <div class="combo">
           <img src="./hot.jpg" alt="热卖精选" usemap="#planetmap14">
           <map name="planetmap14" id="planetmap14">
             <area shape="rect" coords="0,1,375,51" href="#">
           </map>
         </div>
       </div>
       <div class="hotsale hotsale1">
         <div class="combo">
           <img src="./hotsale1.jpg" alt="1" usemap="#planetmap15">
           <map name="planetmap15" id="planetmap15">
             <area shape="rect" coords="7,0,183,248" href="#">
             <area shape="rect" coords="191,0,367,226" href="#">
             <area shape="rect" coords="7,248,183,517" href="#">
             <area shape="rect" coords="191,269,367,539" href="#">
             <area shape="rect" coords="7,517,180,755" href="#">
             <area shape="rect" coords="195,539,367,809" href="#">
             <area shape="rect" coords="7,787,180,1057" href="#">
             <area shape="rect" coords="195,809,367,1079" href="#">
           </map>
         </div>
       </div>
       <div class="hotsale hotsale2">
         <div class="combo">
           <img src="./hotsale2.jpg" alt="2" usemap="#planetmap16">
           <map name="planetmap16" id="planetmap16">
             <area shape="rect" coords="7,0,183,248" href="#">
             <area shape="rect" coords="191,0,367,226" href="#">
             <area shape="rect" coords="7,248,183,517" href="#">
             <area shape="rect" coords="191,269,367,539" href="#">
             <area shape="rect" coords="7,517,180,755" href="#">
             <area shape="rect" coords="195,539,367,809" href="#">
             <area shape="rect" coords="7,787,180,1057" href="#">
             <area shape="rect" coords="195,809,367,1079" href="#">
           </map>
         </div>
       </div>
       <div class="hotsale hotsale3">
         <div class="combo">
           <img src="./hotsale3.jpg" alt="3" usemap="#planetmap17">
           <map name="planetmap17" id="planetmap17">
             <area shape="rect" coords="7,0,183,248" href="#">
             <area shape="rect" coords="191,0,367,226" href="#">
             <area shape="rect" coords="7,248,183,517" href="#">
             <area shape="rect" coords="191,269,367,539" href="#">
             <area shape="rect" coords="7,517,180,755" href="#">
             <area shape="rect" coords="195,539,367,809" href="#">
             <area shape="rect" coords="7,787,180,1057" href="#">
             <area shape="rect" coords="195,809,367,1079" href="#">
           </map>
         </div>
       </div>
       <div class="hotsale hotsale4">
         <div class="combo">
           <img src="./hotsale4.jpg" alt="4" usemap="#planetmap18">
           <map name="planetmap18" id="planetmap18">
             <area shape="rect" coords="7,0,183,248" href="#">
             <area shape="rect" coords="191,0,367,226" href="#">
             <area shape="rect" coords="7,248,183,517" href="#">
             <area shape="rect" coords="191,269,367,539" href="#">
             <area shape="rect" coords="7,517,180,755" href="#">
             <area shape="rect" coords="195,539,367,809" href="#">
             <area shape="rect" coords="7,787,180,1057" href="#">
             <area shape="rect" coords="195,809,367,1079" href="#">
           </map>
         </div>
       </div>
       <div class="hotsale hotsale5">
         <div class="combo">
           <img src="./hotsale5.jpg" alt="5" usemap="#planetmap19">
           <map name="planetmap19" id="planetmap19">
             <area shape="rect" coords="7,0,183,248" href="#">
             <area shape="rect" coords="191,0,367,226" href="#">
             <area shape="rect" coords="7,248,183,517" href="#">
             <area shape="rect" coords="191,269,367,539" href="#">
             <area shape="rect" coords="7,517,180,755" href="#">
             <area shape="rect" coords="195,539,367,809" href="#">
             <area shape="rect" coords="7,787,180,1057" href="#">
             <area shape="rect" coords="195,809,367,1079" href="#">
           </map>
         </div>
       </div>
       <toTop></toTop>
     </div>
   </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import { Swipe, SwipeItem } from 'mint-ui';
  import toTop from '../toTop/toTop.vue'
  export default {
    components: {
      'mt-swipe': Swipe,
      'mt-swipe-item': SwipeItem,
      'toTop': toTop
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .home-wrapper
    .swipe
      margin-top 8rem
      width 100%
      height 250px
      img
        width 100%

    .activity-wrapper
      width 100%
      img
        width 100%

    .new-products-wrapper
      width 100%
      height 925px
      img
        width 100%

    .point
      width 100%
      height 238px
      img
        width 100%

    .oldvip
      width 100%
      height 310px
      img
        width 100%

    .fourtynine
      width 100%
      height 100px
      img
        width 100%

    .housework
      width 100%
      height 689px
      img
        width 100%
    .cook
      width 100%
      height 689px
      img
        width 100%

    .bed
      width 100%
      height 484px
      img
        width 100%

    .jiajufu
      width 100%
      height 689px
      img
        width 100%

    .life
      width 100%
      height 689px
      img
        width 100%

    .work
      width 100%
      height 484px
      img
        width 100%

    .juicer
      width 100%
      height 101px
      img
        width 100%

    .promise
      width 100%
      height 190px
      img
        width 100%
    .hot
      width 100%
      height 54px
      img
        width 100%
    .hotsale1
      width 100%
      height 1079px
      img
        width 100%
    .hotsale2
      width 100%
      height 1103px
      img
        width 100%
    .hotsale3
      width 100%
      height 1105px
      img
        width 100%
    .hotsale4
      width 100%
      height 1105px
      img
        width 100%
    .hotsale5
      width 100%
      height 1106px
      img
        width 100%

</style>
