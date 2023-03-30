<template>
  <div class="detail">
    <!-- 商品分类导航 -->
    <!-- <TypeNav/> -->

    <!-- 主要内容区域 -->
    <section class="con">
      <!-- 导航路径区域 -->
      <div class="conPoin">
        <span>{{ categoryView.category1Name }}</span> >
        <span>{{ categoryView.category2Name }}</span> >
        <span>{{ categoryView.category3Name }}</span>
        <!-- <span>iphone 6S系类</span> -->
      </div>
      <!-- 主要内容区域 -->
      <div class="mainCon">
        <!-- 左侧放大镜区域 -->
        <div class="previewWrap">
          <!--放大镜效果-->
          <Zoom :skuImageList="imgList"/>
          <!-- 小图列表 -->
          <ImageList :skuImageList="imgList"/>
        </div>
        <!-- 右侧选择区域布局 -->
        <div class="InfoWrap">
          <div class="goodsDetail">
            <h3 class="InfoName">{{ skuInfo.skuName }}</h3>
            <p class="news">{{ skuInfo.skuDesc }}</p>
            <div class="priceArea">
              <div class="priceArea1">
                <div class="title">
                  价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格
                </div>
                <div class="price">
                  <i>¥</i>
                  <em>{{ skuInfo.price }}</em>
                  <span>降价通知</span>
                </div>
                <div class="remark">
                  <i>累计评价</i>
                  <em>65545</em>
                </div>
              </div>
              <div class="priceArea2">
                <div class="title">
                  <i>促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</i>
                </div>
                <div class="fixWidth">
                  <i class="red-bg">加价购</i>
                  <em class="t-gray">
                    满999.00另加20.00元，或满1999.00另加30.00元，或满2999.00另加40.00元，即可在购物车换购热销商品
                  </em>
                </div>
              </div>
            </div>
            <div class="support">
              <div class="supportArea">
                <div class="title">
                  支&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;持
                </div>
                <div class="fixWidth">
                  以旧换新，闲置手机回收 4G套餐超值抢 礼品购
                </div>
              </div>
              <div class="supportArea">
                <div class="title">配 送 至</div>
                <div class="fixWidth">广东省 深圳市 宝安区</div>
              </div>
            </div>
          </div>

          <div class="choose">
            <div class="chooseArea">
              <div class="choosed"></div>
              <dl v-for="types in spuSaleAttrList" :key="types.id">
                <dt class="title">{{ types.saleAttrName }}</dt>
                <dd v-for="property in types.spuSaleAttrValueList" 
                    :class="{active: property.isChecked === 1}">
                  {{ property.saleAttrValueName }}
                </dd>
                <!-- <dd changepirce="0" class="active">金色</dd>
                <dd changepirce="40">银色</dd>
                <dd changepirce="90">黑色</dd> -->
              </dl>
            </div>
            <div class="cartWrap">
              <div class="controls">
                <input autocomplete="off" class="itxt" v-model="quantity" @change="isLegal"/>
                <button class="plus" @click="quantity++">+</button>
                <button class="mins" @click="quantity--" :disabled="quantity<= 1">-</button>
              </div>
              <div class="add">
                <a @click="addToCart">加入购物车</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 内容详情页 -->
    <section class="product-detail">
      <aside class="aside">
        <div class="tabWraped">
          <h4 class="active">相关分类</h4>
          <h4>推荐品牌</h4>
        </div>
        <div class="tabContent">
          <div class="tab-pane active">
            <ul class="partList">
              <li>手机</li>
              <li>手机壳</li>
              <li>内存卡</li>
              <li>Iphone配件</li>
              <li>贴膜</li>
              <li>手机耳机</li>
              <li>移动电源</li>
              <li>平板电脑</li>
            </ul>
            <ul class="goodsList">
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/part01.png" />
                  </div>
                  <div class="attr">Apple苹果iPhone 6s (A1699)</div>
                  <div class="price">
                    <em>¥</em>
                    <i>6088.00</i>
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">加入购物车</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/part02.png" />
                  </div>
                  <div class="attr">
                    <em>Apple苹果iPhone 6s (A1699)</em>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">加入购物车</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/part03.png" />
                  </div>
                  <div class="attr">
                    <em>Apple苹果iPhone 6s (A1699)</em>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">加入购物车</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/part02.png" />
                  </div>
                  <div class="attr">
                    <em>Apple苹果iPhone 6s (A1699)</em>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">加入购物车</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/part03.png" />
                  </div>
                  <div class="attr">
                    <em>Apple苹果iPhone 6s (A1699)</em>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">加入购物车</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="tab-pane">
            <p>推荐品牌</p>
          </div>
        </div>
      </aside>
      <div class="detail">
        <div class="fitting">
          <h4 class="kt">选择搭配</h4>
          <div class="good-suits">
            <div class="master">
              <img src="./images/l-m01.png" />
              <p>￥5299</p>
              <i>+</i>
            </div>
            <ul class="suits">
              <li class="suitsItem">
                <img src="./images/dp01.png" />
                <p>Feless费勒斯VR</p>
                <label>
                  <input type="checkbox" value="39" />
                  <span>39</span>
                </label>
              </li>
              <li class="suitsItem">
                <img src="./images/dp02.png" />
                <p>Feless费勒斯VR</p>
                <label>
                  <input type="checkbox" value="50" />
                  <span>50</span>
                </label>
              </li>
              <li class="suitsItem">
                <img src="./images/dp03.png" />
                <p>Feless费勒斯VR</p>
                <label>
                  <input type="checkbox" value="59" />
                  <span>59</span>
                </label>
              </li>
              <li class="suitsItem">
                <img src="./images/dp04.png" />
                <p>Feless费勒斯VR</p>
                <label>
                  <input type="checkbox" value="99" />
                  <span>99</span>
                </label>
              </li>
            </ul>
            <div class="result">
              <div class="num">已选购0件商品</div>
              <div class="price-tit">套餐价</div>
              <div class="price">￥5299</div>
              <button class="addshopcar">加入购物车</button>
            </div>
          </div>
        </div>
        <div class="intro">
          <ul class="tab-wraped">
            <li class="active">
              <a href="###"> 商品介绍 </a>
            </li>
            <li>
              <a href="###"> 规格与包装 </a>
            </li>
            <li>
              <a href="###"> 售后保障 </a>
            </li>
            <li>
              <a href="###"> 商品评价 </a>
            </li>
            <li>
              <a href="###"> 手机社区 </a>
            </li>
          </ul>
          <div class="tab-content">
            <div id="one" class="tab-pane active">
              <ul class="goods-intro">
                <li>分辨率：1920*1080(FHD)</li>
                <li>后置摄像头：1200万像素</li>
                <li>前置摄像头：500万像素</li>
                <li>核 数：其他</li>
                <li>频 率：以官网信息为准</li>
                <li>品牌： Apple</li>
                <li>商品名称：APPLEiPhone 6s Plus</li>
                <li>商品编号：1861098</li>
                <li>商品毛重：0.51kg</li>
                <li>商品产地：中国大陆</li>
                <li>热点：指纹识别，Apple Pay，金属机身，拍照神器</li>
                <li>系统：苹果（IOS）</li>
                <li>像素：1000-1600万</li>
                <li>机身内存：64GB</li>
              </ul>
              <div class="intro-detail">
                <img src="./images/intro01.png" />
                <img src="./images/intro02.png" />
                <img src="./images/intro03.png" />
              </div>
            </div>
            <div id="two" class="tab-pane">
              <p>规格与包装</p>
            </div>
            <div id="three" class="tab-pane">
              <p>售后保障</p>
            </div>
            <div id="four" class="tab-pane">
              <p>商品评价</p>
            </div>
            <div id="five" class="tab-pane">
              <p>手机社区</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ImageList from "./ImageList/ImageList";
import Zoom from "./Zoom/Zoom";

export default {
  name: "Detail",
  components: {
    ImageList,
    Zoom,
  },
  data(){
    return {
      quantity: 1,
    }
  },
  mounted(){
    this.$store.dispatch('gd/goodDetail', this.$route.params.skuid);
  },
  computed: {
    ...mapGetters('gd', ['categoryView', 'spuSaleAttrList', 'skuInfo']),
    imgList(){
      // 如果服务器数据没有返回，skuInfo对象为空
      return this.skuInfo.skuImageList || [];
    }
  },
  methods: {
    isLegal({target}){
      this.quantity = target.value.replace(/[^\d]/g, '');
      if(this.quantity*1 === 0) this.quantity = 1;
    },
    addToCart(){
      let res = this.$store.dispatch('atc/addtoCart', {skuId: this.$route.params.skuid, skuNum: this.quantity});
      // 加入购物车成功，进行路由跳转
      res.then(reslove => {
        // console.log(this.skuInfo);
        sessionStorage.setItem('skuinfo', JSON.stringify(this.skuInfo));
        this.$router.push({
          name: 'addtocart',
          query: {
            skuNum: this.quantity,
          }
        });
      }, reject => {
        alert('Add to cart failed!');
      })
    }
  }

};
</script>

<style lang="css" scoped>
.con {
  width: 1200px;
  margin: 15px auto 0;
}
.con .conPoin {
  padding: 9px 15px 9px 0;
}
.con .conPoin > a + a:before {
  content: "/\00a0";
  padding: 0 5px;
  color: #ccc;
}
.con .mainCon {
  overflow: hidden;
  margin: 5px 0 15px;
}
.con .mainCon .previewWrap {
  float: left;
  width: 400px;
  position: relative;
}
.con .mainCon .previewWrap .preview {
  width: 400px;
  height: 400px;
  border: 1px solid #dfdfdf;
}
.con .mainCon .previewWrap .preview .jqzoom {
  cursor: pointer;
  width: 400px;
  height: 400px;
  position: relative;
}
.con .mainCon .previewWrap .preview .jqzoom img {
  width: 100%;
}
.con .mainCon .previewWrap .preview .jqzoom .mask {
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.5);
  position: absolute;
  left: 0;
  top: 0;
  border: 1px solid #ddd;
}
.con .mainCon .previewWrap .preview .maxbox {
  width: 400px;
  height: 400px;
  position: absolute;
  left: 420px;
  top: 0px;
  overflow: hidden;
  z-index: 20;
  border: 1px solid #ddd;
}
.con .mainCon .previewWrap .preview .maxbox img {
  width: 800px;
  height: 800px;
  display: block;
}
.con .mainCon .previewWrap .specScroll {
  margin-top: 5px;
  width: 400px;
  overflow: hidden;
}
.con .mainCon .previewWrap .specScroll .prev,
.con .mainCon .previewWrap .specScroll .next {
  text-align: center;
  width: 10px;
  height: 54px;
  line-height: 54px;
  border: 1px solid #ccc;
  background: #ebebeb;
  cursor: pointer;
}
.con .mainCon .previewWrap .specScroll .prev {
  float: left;
  margin-right: 4px;
}
.con .mainCon .previewWrap .specScroll .next {
  float: right;
}
.con .mainCon .previewWrap .specScroll .items {
  float: left;
  position: relative;
  width: 372px;
  height: 56px;
  overflow: hidden;
}
.con .mainCon .previewWrap .specScroll .items .itemsCon {
  position: absolute;
  width: 9999px;
  height: 56px;
  left: 0;
}
.con .mainCon .previewWrap .specScroll .items .itemsCon img {
  float: left;
  text-align: center;
  border: 1px solid #ccc;
  padding: 2px;
  width: 50px;
  height: 50px;
  margin-right: 20px;
}
.con .mainCon .InfoWrap {
  width: 700px;
  float: right;
}
.con .mainCon .InfoWrap .InfoName {
  font-size: 14px;
  line-height: 21px;
  margin-top: 15px;
}
.con .mainCon .InfoWrap .news {
  color: #e12228;
  margin-top: 15px;
}
.con .mainCon .InfoWrap .priceArea {
  background: #fee9eb;
  padding: 7px;
  margin: 13px 0;
}
.con .mainCon .InfoWrap .priceArea .priceArea1 {
  overflow: hidden;
  line-height: 28px;
  margin-top: 10px;
}
.con .mainCon .InfoWrap .priceArea .priceArea1 .title {
  float: left;
  margin-right: 15px;
}
.con .mainCon .InfoWrap .priceArea .priceArea1 .price {
  float: left;
  color: #c81623;
}
.con .mainCon .InfoWrap .priceArea .priceArea1 .price i {
  font-size: 16px;
}
.con .mainCon .InfoWrap .priceArea .priceArea1 .price em {
  font-size: 24px;
  font-weight: 700;
}
.con .mainCon .InfoWrap .priceArea .priceArea1 .price span {
  font-size: 12px;
}
.con .mainCon .InfoWrap .priceArea .priceArea1 .remark {
  float: right;
}
.con .mainCon .InfoWrap .priceArea .priceArea2 {
  overflow: hidden;
  line-height: 28px;
  margin-top: 10px;
}
.con .mainCon .InfoWrap .priceArea .priceArea2 .title {
  margin-right: 15px;
  float: left;
}
.con .mainCon .InfoWrap .priceArea .priceArea2 .fixWidth {
  width: 520px;
  float: left;
}
.con .mainCon .InfoWrap .priceArea .priceArea2 .fixWidth .red-bg {
  background: #c81623;
  color: #fff;
  padding: 3px;
}
.con .mainCon .InfoWrap .priceArea .priceArea2 .fixWidth .t-gray {
  color: #999;
}
.con .mainCon .InfoWrap .support {
  border-bottom: 1px solid #ededed;
  padding-bottom: 5px;
}
.con .mainCon .InfoWrap .support .supportArea {
  overflow: hidden;
  line-height: 28px;
  margin-top: 10px;
}
.con .mainCon .InfoWrap .support .supportArea .title {
  margin-right: 15px;
  float: left;
}
.con .mainCon .InfoWrap .support .supportArea .fixWidth {
  width: 520px;
  float: left;
  color: #999;
}
.con .mainCon .InfoWrap .choose .chooseArea {
  overflow: hidden;
  line-height: 28px;
  margin-top: 10px;
}
.con .mainCon .InfoWrap .choose .chooseArea .choosed mark {
  height: 30px;
  display: inline-block;
  line-height: 30px;
  background-color: snow;
  border: 1px solid #ddd;
  padding: 0 20px;
  margin-right: 20px;
}
.con .mainCon .InfoWrap .choose .chooseArea .choosed mark a {
  font-size: 12px;
  color: red;
  margin-left: 20px;
  cursor: pointer;
}
.con .mainCon .InfoWrap .choose .chooseArea dl {
  overflow: hidden;
  margin: 13px 0;
}
.con .mainCon .InfoWrap .choose .chooseArea dl dt {
  margin-right: 15px;
  float: left;
}
.con .mainCon .InfoWrap .choose .chooseArea dl dd {
  float: left;
  margin-right: 5px;
  color: #666;
  line-height: 24px;
  padding: 2px 14px;
  border-top: 1px solid #eee;
  border-right: 1px solid #bbb;
  border-bottom: 1px solid #bbb;
  border-left: 1px solid #eee;
}
.con .mainCon .InfoWrap .choose .chooseArea dl dd:nth-of-type(1) {
  color: red;
}
.con .mainCon .InfoWrap .choose .cartWrap .controls {
  width: 48px;
  position: relative;
  float: left;
  margin-right: 15px;
}
.con .mainCon .InfoWrap .choose .cartWrap .controls .itxt {
  width: 38px;
  height: 37px;
  border: 1px solid #ddd;
  color: #555;
  float: left;
  border-right: 0;
  text-align: center;
}
.con .mainCon .InfoWrap .choose .cartWrap .controls .plus,
.con .mainCon .InfoWrap .choose .cartWrap .controls .mins {
  width: 15px;
  text-align: center;
  height: 17px;
  line-height: 17px;
  background: #f1f1f1;
  color: #666;
  position: absolute;
  right: -8px;
  border: 1px solid #ccc;
}
.con .mainCon .InfoWrap .choose .cartWrap .controls .mins {
  right: -8px;
  top: 19px;
  border-top: 0;
}
.con .mainCon .InfoWrap .choose .cartWrap .controls .plus {
  right: -8px;
}
.con .mainCon .InfoWrap .choose .cartWrap .add {
  float: left;
}
.con .mainCon .InfoWrap .choose .cartWrap .add a {
  text-decoration: none;
  background-color: #e1251b;
  padding: 0 25px;
  font-size: 16px;
  color: #fff;
  height: 36px;
  line-height: 36px;
  display: block;
  cursor: pointer;
}
.product-detail {
  width: 1200px;
  margin: 30px auto 0;
  overflow: hidden;
}
.product-detail .aside {
  width: 210px;
  float: left;
  border: 1px solid #ccc;
}
.product-detail .aside .tabWraped {
  height: 40px;
}
.product-detail .aside .tabWraped h4 {
  border-top: 3px solid #fff;
  float: left;
  line-height: 37px;
  width: 105px;
  text-align: center;
  border-bottom: 1px solid #ccc;
}
.product-detail .aside .tabWraped h4.active {
  border-top: 3px solid #e1251b;
  border-bottom: 0;
  font-weight: normal;
}
.product-detail .aside .tabContent {
  padding: 10px;
}
.product-detail .aside .tabContent .tab-pane {
  display: none;
}
.product-detail .aside .tabContent .tab-pane.active {
  display: block;
}
.product-detail .aside .tabContent .tab-pane:nth-child(1) .partList {
  overflow: hidden;
}
.product-detail .aside .tabContent .tab-pane:nth-child(1) .partList li {
  width: 50%;
  float: left;
  border-bottom: 1px dashed #ededed;
  line-height: 28px;
}
.product-detail .aside .tabContent .tab-pane:nth-child(1) .goodsList > li {
  margin: 5px 0 15px;
  border-bottom: 1px solid #ededed;
  padding-bottom: 5px;
}
.product-detail
  .aside
  .tabContent
  .tab-pane:nth-child(1)
  .goodsList
  > li
  .list-wrap
  .p-img {
  text-align: center;
}
.product-detail
  .aside
  .tabContent
  .tab-pane:nth-child(1)
  .goodsList
  > li
  .list-wrap
  .p-img
  img {
  width: 152px;
}
.product-detail
  .aside
  .tabContent
  .tab-pane:nth-child(1)
  .goodsList
  > li
  .list-wrap
  .price {
  font-size: 16px;
  color: #c81623;
}
.product-detail
  .aside
  .tabContent
  .tab-pane:nth-child(1)
  .goodsList
  > li
  .list-wrap
  .operate {
  text-align: center;
  margin: 5px 0;
}
.product-detail
  .aside
  .tabContent
  .tab-pane:nth-child(1)
  .goodsList
  > li
  .list-wrap
  .operate
  a {
  background-color: transparent;
  border: 1px solid #8c8c8c;
  color: #8c8c8c;
  display: inline-block;
  padding: 2px 14px;
  line-height: 18px;
}
.product-detail .detail {
  width: 980px;
  float: right;
}
.product-detail .detail .fitting {
  border: 1px solid #ddd;
  margin-bottom: 15px;
}
.product-detail .detail .fitting .kt {
  border-bottom: 1px solid #ddd;
  background: #f1f1f1;
  color: #333;
  padding: 5px 0 5px 15px;
}
.product-detail .detail .fitting .good-suits {
  height: 170px;
  padding-top: 10px;
}
.product-detail .detail .fitting .good-suits .master {
  width: 127px;
  height: 165px;
  text-align: center;
  position: relative;
  float: left;
}
.product-detail .detail .fitting .good-suits .master img {
  width: 87px;
}
.product-detail .detail .fitting .good-suits .master p {
  color: #c81623;
  font-size: 16px;
  font-weight: 700;
}
.product-detail .detail .fitting .good-suits .master i {
  position: absolute;
  top: 48px;
  right: -25px;
  font-size: 16px;
}
.product-detail .detail .fitting .good-suits .suits {
  width: 668px;
  height: 165px;
  float: left;
}
.product-detail .detail .fitting .good-suits .suits .suitsItem {
  float: left;
  width: 127px;
  padding: 0 20px;
  text-align: center;
}
.product-detail .detail .fitting .good-suits .suits .suitsItem img {
  width: 120px;
  height: 130px;
}
.product-detail .detail .fitting .good-suits .suits .suitsItem p {
  font-size: 12px;
}
.product-detail .detail .fitting .good-suits .suits .suitsItem label {
  display: block;
  position: relative;
}
.product-detail .detail .fitting .good-suits .suits .suitsItem label input {
  vertical-align: middle;
}
.product-detail .detail .fitting .good-suits .suits .suitsItem label span {
  vertical-align: middle;
}
.product-detail .detail .fitting .good-suits .result {
  border-left: 1px solid #ddd;
  width: 153px;
  height: 165px;
  padding-left: 20px;
  float: left;
}
.product-detail .detail .fitting .good-suits .result .num {
  font-size: 14px;
  margin-bottom: 10px;
  margin-top: 10px;
}
.product-detail .detail .fitting .good-suits .result .price-tit {
  font-weight: bold;
  margin-bottom: 10px;
}
.product-detail .detail .fitting .good-suits .result .price {
  color: #b1191a;
  font-size: 16px;
  margin-bottom: 10px;
}
.product-detail .detail .fitting .good-suits .result .addshopcar {
  background-color: #e1251b;
  border: 1px solid #e1251b;
  padding: 10px 25px;
  font-size: 16px;
  color: #fff;
  display: inline-block;
  box-sizing: border-box;
}
.product-detail .detail .intro .tab-wraped {
  background: #ededed;
  overflow: hidden;
}
.product-detail .detail .intro .tab-wraped li {
  float: left;
}
.product-detail .detail .intro .tab-wraped li + li > a {
  border-left: 1px solid #ddd;
}
.product-detail .detail .intro .tab-wraped li.active a {
  background: #e1251b;
  color: #fff;
}
.product-detail .detail .intro .tab-wraped li a {
  display: block;
  height: 40px;
  line-height: 40px;
  padding: 0 11px;
  text-align: center;
  color: #666;
  background: #fcfcfc;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}
.product-detail .detail .intro .tab-content .tab-pane {
  display: none;
}
.product-detail .detail .intro .tab-content .tab-pane.active {
  display: block;
}
.product-detail
  .detail
  .intro
  .tab-content
  .tab-pane:nth-child(1)
  .goods-intro {
  padding-left: 10px;
}
.product-detail
  .detail
  .intro
  .tab-content
  .tab-pane:nth-child(1)
  .goods-intro
  li {
  margin: 10px 0;
}
.product-detail
  .detail
  .intro
  .tab-content
  .tab-pane:nth-child(1)
  .intro-detail
  img {
  width: 100%;
}
</style>