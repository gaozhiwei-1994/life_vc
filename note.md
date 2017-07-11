
##   mint ui
1. 下载包  npm i mint-ui -S
2. 
   import Vue from 'vue';
   import Mint from 'mint-ui';
   import 'mint-ui/lib/style.css';
   
   Vue.use(Mint);
   
3. import { Swipe, SwipeItem } from 'mint-ui';
       export default {
         components: {
           'mt-swipe': Swipe,
           'mt-swipe-item': SwipeItem
         }
       }
       
4. eg: 
  <mt-swipe :auto="4000">
    <mt-swipe-item>
      <img src="./1.jpg" alt="">
    </mt-swipe-item>
  </mt-swipe>        
