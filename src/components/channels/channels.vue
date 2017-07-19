<template>
  <div class="housework-container">
    <div class="hw-content" v-if="filterType" v-show="!onlyKnowLife">
        <ul>
            <li class="hw-item" v-for="item in filterType.goodsList">
                <img :src="item.image" alt="家务工具">
                <br>
                {{item.name}}
            </li>
        </ul>
        <div class="hw-banner">
            <img :src="filterType.image">
        </div>
        <div class="hw-title">Rico.S的精心推荐：</div>
        <imgs :goods="goodsList"></imgs>
        <div class="hw-bottom"></div>
    </div>
    <transition name="fade">
      <div class="know-life" v-show="onlyKnowLife">
        <header class="only">
          <div class="header-content">
            <router-link to="/">
              <span class="back-btn"></span>
            </router-link>
            <p>了解LifeVC</p>
          </div>
        </header>
        <div class="know-life-content">
          <section class="sect">
            <h3>0.3%</h3>
            <h4>我们质量瑕疵退货率：0.3%</h4>
            <div class="cont">
              <p>我们的委托生产供应商，给欧美客户的外贸家居订单，产品质量瑕疵率标准，通常在1.5%左右，但我们对委托生产商的质量要求，是0.5%！而在过去一年的时间里，我们的产品，因为质量瑕疵的退货率，低至0.3% —— 即每售出100件商品，只有0.3件产品，会因为质量瑕疵而退货。我们像捍卫我们生命一样，在捍卫我们的产品质量。</p>
            </div>
          </section>
          <section class="sect">
            <h3>99.5%</h3>
            <h4>我们客服满意率：99.5%</h4>
            <div class="cont">
              <p>如果你拨打我们的服务热线，在通话结束时，我们都会邀请你“对本次服务打分，满意请按1，不满意请按0”。放心，这个电话评分不是摆设，如果你按了0，第二天，我们客户服务中心的高级经理，就会亲自打电话给你，向你致歉，为你解决问题。</p>
              <p>正是因为日复一日、年复一年的自我纠错，我们目前的客服电话评分满意率，已经达到了99.5%—— 每100个来电，只有0.5个消费者，对我们的服务表示不满意，这令我们非常自豪，当然我们还需要继续努力。</p>
            </div>
          </section>
          <section class="sect">
            <h3>第1个</h3>
            <h4>每一件产品，我都是第一个试用者。</h4>
            <div class="cont">
              <p>真的， 每一件新产品，我都是第一个试用者，当然，除了我以外，我们还有一个产品体验官部门，她们专门负责新品试用工作。“这件产品，我会用么？我会买么？我会满意么？”这三个问题，是我问的最多的问题。每一件新产品，我们既是设计者，也必须是第一个使用者，只有通过亲身试用，我们才能发现产品还不够完美的地方，并持续改进。对消费者负责，总归是对的！</p>
            </div>
          </section>
          <section class="sect">
            <h3>4级质检</h3>
            <h4>我们努力确保每一件产品0瑕疵</h4>
            <div class="cont">
              <p>每天，我们将近100人的质量团队，会对正在销售的产品，进行4轮严格的质量检查：原材料质检、生产GB/QB质检、产品入库全检，以及包裹出库AQZ质检，努力确保你拿到的每件产品，都没有任何瑕疵。在中国，我们把大部分的精力，都投在了产品研发和质量控制中，因为我们相信，好产品，就是最好的广告。</p>
            </div>
          </section>
          <div class="signature">
            <p><img src="http://i1.lifevccdn.com/Images/m/signature_trans@2x.png"></p>
            <p>LifeVC丽芙家居（中国）CEO：Rico.S</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
    import imgs from '../imgs/imgs.vue'
    export default {
      props: ['products','goods'],
      data () {
        return {
          details: [],
          /*allGoods:[
            {
              "id": 2860,
              "type": "家务",
              "goodsList": [
                {
                  "id": "2860_01",
                  "name": "家务工具",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/54079a754099447281e284d45a5c078b.jpg",
                  "products": [
                    {
                      "name": "懒人清洁喷水拖把",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/e8b8002b53f4441db53974e1caf6ac36_d1242x0.jpg",
                      "price": 69,
                      "oldPrice": "",
                      "commentCount": 2812,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "懒人清洁拖把(省力旋风拖III代)",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/f7d0debcc0604118ab9a3bed4b2c4960_d1242x0.jpg",
                      "price": 149,
                      "oldPrice": "",
                      "commentCount": 768,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "懒人清洁拖把(省力旋风拖Ⅱ代)",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/3f41c4ff951a4a77bdde91357130d7be_d1242x0.jpg",
                      "price": 129,
                      "oldPrice": "",
                      "commentCount": 11735,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "懒人清洁拖把(不脏手型Ⅱ代)",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/c7ac241a6adf4cb2b826dc85b6c65069_d1242x0.jpg",
                      "price": 49,
                      "oldPrice": "",
                      "commentCount": 8184,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "懒人清洁扫把(地砖专用)",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/f92704c9e1aa4856943e14de471e8cb6_d1242x0.jpg",
                      "price": 19,
                      "oldPrice": "",
                      "commentCount": 21452,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": " 浴室清洁刷",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/e07930d58f274c83bf69be9e7db2d449_d1242x0.jpg",
                      "price": 19,
                      "oldPrice": "",
                      "commentCount": 1295,
                      "promotion": "",
                      "active":  "任选2件8折"
                    },
                    {
                      "name": "静电除尘地板干巾(20片装)",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/d6f5799c7d5b4500be34b13e90547095_d1242x0.jpg",
                      "price": 10,
                      "oldPrice": "",
                      "commentCount": 4821,
                      "promotion": "",
                      "active": "任选2件8折"
                    }
                  ]
                },
                {
                  "id": "2860_02",
                  "name": "家庭清洁剂",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/04597da396224b39a5184c7b031c507d.jpg",
                  "products": [
                    {
                      "name": "卫浴清洁剂",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/0c37fa217d9241269857f679567deae1_d1242x0.jpg",
                      "price": 15,
                      "oldPrice": "",
                      "commentCount": 390,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "马桶除菌去污剂（省心型）",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/3cfe4481aa684466aa50a061f530e471_d1242x0.jpg",
                      "price": 19,
                      "oldPrice": "",
                      "commentCount": 4456,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "马桶除菌去污剂（3瓶装）",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/154a51185b5848748ab86a00ddcdab6a_d1242x0.jpg",
                      "price": 29,
                      "oldPrice": "",
                      "commentCount": 970,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "马桶除菌喷雾",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/3a655b6cb2894562b1a8abaeabe5690a_d1242x0.jpg",
                      "price": 19,
                      "oldPrice": "",
                      "commentCount": 8959,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "马桶强力去污除臭剂(8只装)",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/8a00183e6c9e4edf96fcb39b8afb0c73_d1242x0.jpg",
                      "price": 19,
                      "oldPrice": "",
                      "commentCount": 467,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "抑菌免洗洗手凝露（3瓶装）",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/3832971a7d7242c4a6e7c0611a411006_d1242x0.jpg",
                      "price": 19,
                      "oldPrice": "",
                      "commentCount": 123,
                      "promotion": "",
                      "active": "第二件半价"
                    },
                    {
                      "name": "",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/7d6bf21b5cd14c4a96d2a9a98c84cf1c_d1242x0.jpg",
                      "price": 12,
                      "oldPrice": "",
                      "commentCount": 11774,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "除菌泡沫洗手液",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/54cf7193cc3b44ae8fd2a5cff50b658a_d1242x0.jpg",
                      "price": 9,
                      "oldPrice": "",
                      "commentCount": 36242,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "植物精粹除菌洗手皂",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/a1aa8581af3c4341902759b228b08363_d1242x0.jpg",
                      "price": 15,
                      "oldPrice": "",
                      "commentCount": 3826,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "苏打洗洁精",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/d25e16116b894c54990544d62e04f551_d1242x0.jpg",
                      "price": 15,
                      "oldPrice": "",
                      "commentCount": 1175,
                      "promotion": "",
                      "active": "第二件半价"
                    }
                  ]
                },
                {
                  "id": "2860_03",
                  "name": "防霉除菌",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/f14c5afd18a74be197bbef999e58387e.jpg",
                  "products": [
                    {
                      "name": "电蚊香",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/241a9eaf06c1405c9f8d5b4c327c700a_d1242x0.jpg",
                      "price": 29,
                      "oldPrice": "",
                      "commentCount": 2873,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "冰箱除异味竹炭盒(2只装)",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/239c72f3f4af40908666597acbbaf86a_d1242x0.jpg",
                      "price": 15,
                      "oldPrice": "",
                      "commentCount": 29406,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "冰箱除味消臭剂",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/6d31a783244249b4bc22984c9593ee29_d1242x0.jpg",
                      "price": 12,
                      "oldPrice": 15,
                      "commentCount": 1374,
                      "promotion": "限时优惠",
                      "active": ""
                    },
                    {
                      "name": "甲醛清除喷雾",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/d147d93acaf847779675e9496bbeb55e_d1242x0.jpg",
                      "price": 19,
                      "oldPrice": "",
                      "commentCount": 730,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "甲醛清除剂(3盒装)",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/77be97986c0f4cf0a073ed2222306380_d1242x0.jpg",
                      "price": 29,
                      "oldPrice": "",
                      "commentCount": 8034,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "卫浴除异味芳香膏",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/55b938a837074151a196e70a668759b4_d1242x0.jpg",
                      "price": 29,
                      "oldPrice": "",
                      "commentCount": 2032,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "卫浴芳香剂",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/15996283cca347ce8260ac098365f820_d1242x0.jpg",
                      "price": 19,
                      "oldPrice": "",
                      "commentCount": 7703,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "鞋柜消臭剂",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/f3a2d55dc9704a52917ceba270836967_d1242x0.jpg",
                      "price": 19,
                      "oldPrice": "",
                      "commentCount": 5076,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "空气净化竹炭包(加量10袋装)",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/7e61e469386b47aeb1dd5de3b59867da_d1242x0.jpg",
                      "price": 29,
                      "oldPrice": "",
                      "commentCount": 9196,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "可挂式防潮除湿剂(8袋装)",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/56d03338191842fcabe0088be855de05_d1242x0.jpg",
                      "price": 30,
                      "oldPrice": "",
                      "commentCount": 2469,
                      "promotion": "",
                      "active": ""
                    }
                  ]
                },
                {
                  "id": "2860_04",
                  "name": "百纳箱",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/4f4dc02735f74e568d7adbe6ac1522f2.jpg"
                },
                {
                  "id": "2860_05",
                  "name": "衣物收纳",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/33daaf6cfaa345e8a475ce8ea932a393.jpg"
                },
                {
                  "id": "2860_06",
                  "name": "酵素洗衣液",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/9bbb1b97d5c04460a76fde006f08c6ea.jpg"
                },
                {
                  "id": "2860_07",
                  "name": "魔力挂钩",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/4a8a241b4f7041b2b6bd9bfa1d24a87c.jpg"
                },
                {
                  "id": "2860_08",
                  "name": "生活必备",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/6f88e8a13af944019d6b8cee8c723b7e.jpg"
                },
                {
                  "id": "2860_09",
                  "name": "地毯地垫",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/eef70d4649914a2c9323e16c9907d62d.jpg"
                }
              ],
              "image": "http://i.lifevccdn.com/upload/DesignerMessageImg/9203af2fbef145daa142dd97bb84fae3.jpg",
              "detailProducts": [
                {
                  "id":0,
                  "type": "家务工具",
                  "products": [
                    {
                      "name": "懒人清洁喷水拖把",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/e8b8002b53f4441db53974e1caf6ac36_d1242x0.jpg",
                      "price": 69,
                      "oldPrice": "",
                      "commentCount": 2812,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "懒人清洁拖把(省力旋风拖III代)",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/f7d0debcc0604118ab9a3bed4b2c4960_d1242x0.jpg",
                      "price": 149,
                      "oldPrice": "",
                      "commentCount": 768,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "懒人清洁拖把(省力旋风拖Ⅱ代)",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/3f41c4ff951a4a77bdde91357130d7be_d1242x0.jpg",
                      "price": 129,
                      "oldPrice": "",
                      "commentCount": 11735,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "懒人清洁拖把(不脏手型Ⅱ代)",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/c7ac241a6adf4cb2b826dc85b6c65069_d1242x0.jpg",
                      "price": 49,
                      "oldPrice": "",
                      "commentCount": 8184,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "懒人清洁扫把(地砖专用)",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/f92704c9e1aa4856943e14de471e8cb6_d1242x0.jpg",
                      "price": 19,
                      "oldPrice": "",
                      "commentCount": 21452,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": " 浴室清洁刷",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/e07930d58f274c83bf69be9e7db2d449_d1242x0.jpg",
                      "price": 19,
                      "oldPrice": "",
                      "commentCount": 1295,
                      "promotion": "",
                      "active":  "任选2件8折"
                    },
                    {
                      "name": "静电除尘地板干巾(20片装)",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/d6f5799c7d5b4500be34b13e90547095_d1242x0.jpg",
                      "price": 10,
                      "oldPrice": "",
                      "commentCount": 4821,
                      "promotion": "",
                      "active": "任选2件8折"
                    }
                  ]
                },
                {
                  "id":1,
                  "type": "家庭清洁剂",
                  "products": [
                    {
                      "name": "卫浴清洁剂",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/0c37fa217d9241269857f679567deae1_d1242x0.jpg",
                      "price": 15,
                      "oldPrice": "",
                      "commentCount": 390,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "马桶除菌去污剂（省心型）",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/3cfe4481aa684466aa50a061f530e471_d1242x0.jpg",
                      "price": 19,
                      "oldPrice": "",
                      "commentCount": 4456,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "马桶除菌去污剂（3瓶装）",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/154a51185b5848748ab86a00ddcdab6a_d1242x0.jpg",
                      "price": 29,
                      "oldPrice": "",
                      "commentCount": 970,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "马桶除菌喷雾",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/3a655b6cb2894562b1a8abaeabe5690a_d1242x0.jpg",
                      "price": 19,
                      "oldPrice": "",
                      "commentCount": 8959,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "马桶强力去污除臭剂(8只装)",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/8a00183e6c9e4edf96fcb39b8afb0c73_d1242x0.jpg",
                      "price": 19,
                      "oldPrice": "",
                      "commentCount": 467,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "抑菌免洗洗手凝露（3瓶装）",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/3832971a7d7242c4a6e7c0611a411006_d1242x0.jpg",
                      "price": 19,
                      "oldPrice": "",
                      "commentCount": 123,
                      "promotion": "",
                      "active": "第二件半价"
                    },
                    {
                      "name": "",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/7d6bf21b5cd14c4a96d2a9a98c84cf1c_d1242x0.jpg",
                      "price": 12,
                      "oldPrice": "",
                      "commentCount": 11774,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "除菌泡沫洗手液",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/54cf7193cc3b44ae8fd2a5cff50b658a_d1242x0.jpg",
                      "price": 9,
                      "oldPrice": "",
                      "commentCount": 36242,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "植物精粹除菌洗手皂",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/a1aa8581af3c4341902759b228b08363_d1242x0.jpg",
                      "price": 15,
                      "oldPrice": "",
                      "commentCount": 3826,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "苏打洗洁精",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/d25e16116b894c54990544d62e04f551_d1242x0.jpg",
                      "price": 15,
                      "oldPrice": "",
                      "commentCount": 1175,
                      "promotion": "",
                      "active": "第二件半价"
                    }
                  ]
                },
                {
                  "id":2,
                  "type": "防霉除菌",
                  "products": [
                    {
                      "name": "电蚊香",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/241a9eaf06c1405c9f8d5b4c327c700a_d1242x0.jpg",
                      "price": 29,
                      "oldPrice": "",
                      "commentCount": 2873,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "冰箱除异味竹炭盒(2只装)",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/239c72f3f4af40908666597acbbaf86a_d1242x0.jpg",
                      "price": 15,
                      "oldPrice": "",
                      "commentCount": 29406,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "冰箱除味消臭剂",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/6d31a783244249b4bc22984c9593ee29_d1242x0.jpg",
                      "price": 12,
                      "oldPrice": 15,
                      "commentCount": 1374,
                      "promotion": "限时优惠",
                      "active": ""
                    },
                    {
                      "name": "甲醛清除喷雾",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/d147d93acaf847779675e9496bbeb55e_d1242x0.jpg",
                      "price": 19,
                      "oldPrice": "",
                      "commentCount": 730,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "甲醛清除剂(3盒装)",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/77be97986c0f4cf0a073ed2222306380_d1242x0.jpg",
                      "price": 29,
                      "oldPrice": "",
                      "commentCount": 8034,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "卫浴除异味芳香膏",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/55b938a837074151a196e70a668759b4_d1242x0.jpg",
                      "price": 29,
                      "oldPrice": "",
                      "commentCount": 2032,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "卫浴芳香剂",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/15996283cca347ce8260ac098365f820_d1242x0.jpg",
                      "price": 19,
                      "oldPrice": "",
                      "commentCount": 7703,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "鞋柜消臭剂",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/f3a2d55dc9704a52917ceba270836967_d1242x0.jpg",
                      "price": 19,
                      "oldPrice": "",
                      "commentCount": 5076,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "空气净化竹炭包(加量10袋装)",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/7e61e469386b47aeb1dd5de3b59867da_d1242x0.jpg",
                      "price": 29,
                      "oldPrice": "",
                      "commentCount": 9196,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "可挂式防潮除湿剂(8袋装)",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/56d03338191842fcabe0088be855de05_d1242x0.jpg",
                      "price": 30,
                      "oldPrice": "",
                      "commentCount": 2469,
                      "promotion": "",
                      "active": ""
                    }
                  ]
                }
              ]
            },
            {
              "id": 2859,
              "type": "下厨",
              "goodsList": [
                {
                  "id": "2859_01",
                  "name": "不粘锅",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/a3628c4600c74cf2b2cce44eff7ffcf7.jpg",
                  "products": [
                    {
                      "name": "电蚊香",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/241a9eaf06c1405c9f8d5b4c327c700a_d1242x0.jpg",
                      "price": 29,
                      "oldPrice": "",
                      "commentCount": 2873,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "冰箱除异味竹炭盒(2只装)",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/239c72f3f4af40908666597acbbaf86a_d1242x0.jpg",
                      "price": 15,
                      "oldPrice": "",
                      "commentCount": 29406,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "冰箱除味消臭剂",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/6d31a783244249b4bc22984c9593ee29_d1242x0.jpg",
                      "price": 12,
                      "oldPrice": 15,
                      "commentCount": 1374,
                      "promotion": "限时优惠",
                      "active": ""
                    },
                    {
                      "name": "甲醛清除喷雾",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/d147d93acaf847779675e9496bbeb55e_d1242x0.jpg",
                      "price": 19,
                      "oldPrice": "",
                      "commentCount": 730,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "甲醛清除剂(3盒装)",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/77be97986c0f4cf0a073ed2222306380_d1242x0.jpg",
                      "price": 29,
                      "oldPrice": "",
                      "commentCount": 8034,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "卫浴除异味芳香膏",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/55b938a837074151a196e70a668759b4_d1242x0.jpg",
                      "price": 29,
                      "oldPrice": "",
                      "commentCount": 2032,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "卫浴芳香剂",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/15996283cca347ce8260ac098365f820_d1242x0.jpg",
                      "price": 19,
                      "oldPrice": "",
                      "commentCount": 7703,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "鞋柜消臭剂",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/f3a2d55dc9704a52917ceba270836967_d1242x0.jpg",
                      "price": 19,
                      "oldPrice": "",
                      "commentCount": 5076,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "空气净化竹炭包(加量10袋装)",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/7e61e469386b47aeb1dd5de3b59867da_d1242x0.jpg",
                      "price": 29,
                      "oldPrice": "",
                      "commentCount": 9196,
                      "promotion": "",
                      "active": ""
                    },
                    {
                      "name": "可挂式防潮除湿剂(8袋装)",
                      "image": "http://i.lifevccdn.com/upload/AppItemInfoImage/56d03338191842fcabe0088be855de05_d1242x0.jpg",
                      "price": 30,
                      "oldPrice": "",
                      "commentCount": 2469,
                      "promotion": "",
                      "active": ""
                    }
                  ]
                },
                {
                  "id": "2859_02",
                  "name": "多功能锅",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/f372190e2e8543afafff1735da48a871.jpg"
                },
                {
                  "id": "2859_03",
                  "name": "水壶水杯",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/d20af14942824632a588b5253e0123c4.jpg"
                },
                {
                  "id": "2859_04",
                  "name": "厨房电器",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/9bb5047d7ea84fa48992939c6c64c123.jpg"
                },
                {
                  "id": "2859_05",
                  "name": "厨房小帮手",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/96079b6d4fcf4c45b972f815dbe27fcb.jpg"
                },
                {
                  "id": "2859_06",
                  "name": "刀具",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/4fada1bbc1ef4f1288c123044dc1a69a.jpg"
                },
                {
                  "id": "2859_07",
                  "name": "餐具",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/16d5b0459ee34b9c9ca7ccd16ff7561a.jpg"
                },
                {
                  "id": "2859_08",
                  "name": "净水器",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/d0e01200cefd4b658be736f064507fad.jpg"
                },
                {
                  "id": "2859_09",
                  "name": "保温杯",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/726881bfc9ad4874a658683a72f4910c.jpg"
                },
                {
                  "id": "2859_10",
                  "name": "焖烧罐",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/70e0e1ec4d274b77bd27e8c306409063.jpg"
                }
              ],
              "image": "http://i.lifevccdn.com/upload/DesignerMessageImg/6d2115bb205649fd81a5a028a3142354.jpg"
            },
            {
              "id": 2865,
              "type": "家居服",
              "goodsList": [
                {
                  "id": "2865_01",
                  "name": "内衣内裤",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/df44f691be0144aab7d8d06e53883f03.jpg"
                },
                {
                  "id": "2865_02",
                  "name": "夏凉拖鞋",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/59d3fd2e47874f608f37089f6f8fd49e.jpg"
                },
                {
                  "id": "2865_03",
                  "name": "起居拖鞋",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/bd59ff440fbc40598f4ba826c974fe26.jpg"
                },
                {
                  "id": "2865_04",
                  "name": "袜子",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/132f105e964f449790f74c45c45a0c60.jpg"
                },
                {
                  "id": "2865_05",
                  "name": "起居服",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/9de506e17a824525821025e7af063329.jpg"
                },
                {
                  "id": "2865_06",
                  "name": "婴童服",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/7cd02f0788d342f39213f1fc6085476a.jpg"
                },
                {
                  "id": "2865_07",
                  "name": "保暖家居服",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/0fec324684b542ae9b068289f82d87b9.jpg"
                }
              ],
              "image":"http://i.lifevccdn.com/upload/DesignerMessageImg/58d839f68192413ab123605b6263be31.jpg"
            },
            {
              "id": 2861,
              "type": "生活",
              "goodsList": [
                {
                  "id": "2861_01",
                  "name": "进口纸巾",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/40c06e250ac3486d87933161f8f442df.jpg"
                },
                {
                  "id": "2861_02",
                  "name": "毛浴巾",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/38bfd7822f924182b18c3ceb471fc65b.jpg"
                },
                {
                  "id": "2861_03",
                  "name": "LifeVC/Beauty",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/8b35f746a96b4a40879138ed7883a108.jpg"
                },
                {
                  "id": "2861_04",
                  "name": "美妆沐浴",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/089825ab05eb4e05b8ec55e384424fc5.jpg"
                },
                {
                  "id": "2861_05",
                  "name": "美妆电器",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/5572ce7af23b40e4960af238ce2b5683.jpg"
                },
                {
                  "id": "2861_06",
                  "name": "生活电器",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/810a448c381543789558aac80aae363a.jpg"
                },
                {
                  "id": "2861_07",
                  "name": "下午茶",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/1b16baf24a08491ebf7852b927833457.jpg"
                },
                {
                  "id": "2861_08",
                  "name": "家庭健身",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/ccf97f4791cb448a8654aad8fd4386f8.jpg"
                }
              ],
              "image":"http://i.lifevccdn.com/upload/DesignerMessageImg/5b736b5867c8441cb46d15af2cd88db0.jpg"
            },
            {
              "id": 3260,
              "type": "软装",
              "goodsList": [
                {
                  "id": "3260_01",
                  "name": "靠垫抱枕",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/6cb76533a350420ab73ec5ed8b0b77d9.jpg"
                },
                {
                  "id": "3260_02",
                  "name": "墙纸地板",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/eaecaa20c8e746ba94a38c1a9a5fc94a.jpg"
                },
                {
                  "id": "3260_03",
                  "name": "小家具",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/2e66951bfd8b469590610297a160f3f0.jpg"
                },
                {
                  "id": "3260_04",
                  "name": "香氛",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/2de82f6d917a481cbcc4ddca2bcdd33b.jpg"
                },
                {
                  "id": "3260_05",
                  "name": "花艺摆件",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/c46996f369da4aa79aa3ee1f1cdbcd32.jpg"
                },
                {
                  "id": "3260_06",
                  "name": "窗帘桌布",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/8519676306ea427aae00f48e0f00fb68.jpg"
                },
                {
                  "id": "3260_07",
                  "name": "椅垫沙发垫",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/27d3a0a21b9f40169b58cc99f8eecb40.jpg"
                },
                {
                  "id": "3260_08",
                  "name": "沙发",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/04215dfc9ab44b90849ebb19b0b84ac5.jpg"
                }
              ],
              "image":"http://i.lifevccdn.com/upload/DesignerMessageImg/a04de40cbe064c8d808b047388715c44.jpg"
            },
            {
              "id": 2862,
              "type": "床品",
              "goodsList": [
                {
                  "id": "2862_01",
                  "name": "凉席",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/2784bcf0fbec40d0a8925ab008471c8d.jpg"
                },
                {
                  "id": "2862_02",
                  "name": "夏被盖毯",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/9391668ef0f14f54b8a184461add26d8.jpg"
                },
                {
                  "id": "2862_03",
                  "name": "安睡枕",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/92ae4999472f4bcf97e77a76065ee7b3.jpg"
                },
                {
                  "id": "2862_04",
                  "name": "席梦思保护套",
                  "image": "http://i.lifevccdn.com/upload/Category_Img/13b9de39a23046f0b50feaeea57e1afe.jpg"
                },
                {
                  "id": "2862_05",
                  "name": "床垫",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/93b61e86c9fc4cd6993e99463455dc19.jpg"
                },
                {
                  "id": "2862_06",
                  "name": "北欧简约床品",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/90f6853459f0497d8feed715b7a6bdf3.jpg"
                },
                {
                  "id": "2862_07",
                  "name": "轻奢床品",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/80c8aca75e3a4b8a927d2555f1ca5e14.jpg"
                },
                {
                  "id": "2862_08",
                  "name": "美式田园床品",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/cbf975e295e64b18892b066d4950ba41.jpg"
                },
                {
                  "id": "2862_09",
                  "name": "婚庆床品",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/36b06023ae41481eb759b02d6f77de41.jpg"
                },
                {
                  "id": "2862_10",
                  "name": "四季被",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/1a8f95074fe0404e93affb35556e4c55.jpg"
                }
              ],
              "image":"http://i.lifevccdn.com/upload/DesignerMessageImg/ab8ddf2603fe46488af3da11dfce40ac.jpg"
            },
            {
              "id": 2863,
              "type": "工作和旅行",
              "goodsList": [
                {
                  "id": "2863_01",
                  "name": "晴雨伞",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/3378150865dc471ca657773eabda8b5a.jpg"
                },
                {
                  "id": "2863_02",
                  "name": "白领水杯",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/765fe4818f44433d82a96dd3ff02d844.jpg"
                },
                {
                  "id": "2863_03",
                  "name": "旅行箱",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/09e2f6447e0145eaaaf42960cbe4ec60.jpg"
                },
                {
                  "id": "2863_04",
                  "name": "差旅必备",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/961da7ce03fc4a55b07fb94960d77f5f.jpg"
                },
                {
                  "id": "2863_05",
                  "name": "双肩包",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/f51177f2663744c1808ed7f3be30e2e7.jpg"
                },
                {
                  "id": "2863_06",
                  "name": "腰托颈托",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/5aa5b2c47b654d4294a3beb169c85bd3.jpg"
                },
                {
                  "id": "2863_07",
                  "name": "文具",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/7b24965e24c44c61a0f8e777f7343ab3.jpg"
                },
                {
                  "id": "2863_08",
                  "name": "工作台灯",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/6abf13a084b54af4bb37d3fbc7334e24.jpg"
                },
                {
                  "id": "2863_09",
                  "name": "电脑椅",
                  "image": "http://i.lifevccdn.com/upload/AppIndexIcon/eb4e13d5509840fbb8f8ebb2a966a24f.jpg"
                }
              ],
              "image":"http://i.lifevccdn.com/upload/DesignerMessageImg/4d478431509042178c4be5c6d6c3a1e1.jpg"
            },
            {
              "id": 2864,
              "type": "了解LifeVC",
              "goodsList": [
                {
                  "id": "",
                  "name": "",
                  "image": ""
                }
              ],
              "image":"",
              "isShow": true
            }
          ]*/
        }
      },
      computed: {
        filterType () {
          return this.products.find(type=>{
            return type.id === +this.$route.params.id
          })
        },
        goodsList () {
          var goods = []
          const filterType = this.products.find(type=>{
            return type.id === +this.$route.params.id
          })
          //console.log(filterType)
          filterType.goodsList.forEach(item=>{
            if(item.products) {
              filterType.isHaveProducts = true
              item.products.forEach(good=>{
                goods.push(good)
              })
            }
          })
          return goods
        },
        onlyKnowLife () {
          if(this.$route.params.id == 2864){
            return true
          }else{
            return false
          }
        }
      },
      components: {
          imgs
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .housework-container
    background-color #f1f1f1
    overflow hidden
    .hw-content
      margin-top 97px
      ul
        overflow hidden
        background-color #fff
        .hw-item
          margin 12px 0
          float left
          width 25%
          height 99px
          font-size 14px
          text-align center
          background-color #fff
          img
            width 75px
            height 75px
      .hw-banner
        margin-top 15px
        img
          height: 150px
      .hw-title
        margin 15px 0
        width 100%
        text-align center
        font-size 20px
        line-height 20px
      .hw-bottom
        height 50px

    .know-life
      background-color white
      position relative
      z-index 999
      .only
        padding 0
        width 100%
        height 50px
        line-height 50px
        text-align center
        font-size 20px
        color white
        background #89be48
        position: fixed
        top: 0
        z-index 999
        .header-content
          position relative
          .back-btn
            background: url('./sm-icon.png') no-repeat
            -webkit-background-size 16px 21px
            background-size 16px 21px
            position absolute
            display block
            width 16px
            height 21px
            left 5px
            top 16px
      .know-life-content
        margin-top 60px
        .sect
          width: 92%;
          text-align: left;
          border-bottom: 1px solid #d9d9d9;
          margin: 0 auto;
          padding: 1.5em 0 0;
          h3
            display: block;
            text-align: left;
            font-size: 3em;
            color: #333333;
            line-height: 1.2em;
            font-weight: normal;
            margin: 0;
            padding: 0;
          h4
            display: block;
            text-align: left;
            font-size: 2.2em;
            color: #666666;
            line-height: 1.6em;
            font-weight: bold;
            margin: 0;
            padding: 0 0 0.2em;
          .cont
            width: 96%;
            overflow: hidden;
            font-size: 2em;
            color: #666666;
            line-height: 1.7em;
            padding: 0;
            p
              display: block;
              overflow: hidden;
              padding-bottom: 1.5em;
        .signature
          width: 92%;
          overflow: hidden;
          display: block;
          text-align: right;
          font-size: 2.2em;
          color: #333333;
          line-height: 26px
          padding: 0 0 16px
          img
            width: 38%;
            display: block;
            float: right;
          p
            width: 100%;
            display: block;
            overflow: hidden;
            text-align: right;

    .fade-enter-active,.fade-leave-active
      transition all .3s linear
    .fade-enter,.fade-leave-to
      transform translate3d(100%,0,0)
</style>
