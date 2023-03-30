<template>
  <div class="order-right">
    <div class="order-content">
      <div class="title">
        <h3>我的订单</h3>
      </div>
      <div class="chosetype">
        <table>
          <thead>
            <tr>
              <th width="29%">商品</th>
              <th width="31%">订单详情</th>
              <th width="13%">收货人</th>
              <th>金额</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="orders">
        <table class="order-item" v-for="order in myOrder.records" :key="order.id">
          <thead>
            <tr>
              <th colspan="5">
                <span class="ordertitle">{{ order.createTime }}　订单编号：{{ order.outTradeNo }}
                  <span class="pull-right delete">
                    <img src="./images/delete.png" />
                  </span>
              </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(list, index) in order.orderDetailList" :key="list.id">
              <td width="60%">
                <div class="typographic">
                  <img :src="list.imgUrl" />
                  <a href="#" class="block-text">{{ list.skuName }}</a>
                  <span>x{{ list.skuNum }}</span>
                  <a href="#" class="service">售后申请</a>
                </div>
              </td>
              <td :rowspan="order.orderDetailList.length" v-if="index == 0" width="8%" class="center">{{ order.consignee }}</td>
              <td :rowspan="order.orderDetailList.length" v-if="index == 0" width="13%" class="center">
                <ul class="unstyled">
                  <li>总金额¥{{ order.totalAmount }}.00</li>
                  <li>在线支付</li>
                </ul>
              </td>
              <td :rowspan="order.orderDetailList.length" v-if="index == 0" width="8%" class="center">
                <a href="#" class="btn">{{ order.orderStatusName }}</a>
              </td>
              <td :rowspan="order.orderDetailList.length" v-if="index == 0" width="13%" class="center">
                <ul class="unstyled">
                  <li>
                    <a href="mycomment.html" target="_blank">评价|晒单</a>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="choose-order">
        <Pagination :page="pageInfo" @getPageNo="getPageNo"></Pagination>
      </div>
    </div>
    <Like></Like>
  </div>
</template>

<script>
import Like from '@/pages/Order/Like'
import Pagination from '@/components/Pagination'
export default {
  name: "MyOrder",
  components: {
    Pagination,
    Like
  },
  data(){
    return {
      page: 1,
      limit: 3,
      myOrder: {},
    }
  },
  computed: {
    pageInfo(){
      return {
        current: this.page,
        size: this.limit,
        total: this.myOrder.total,
        continues: 3,
      }
    },
  },
  watch: {
    page: {
      handler(){
        this.getMyOrder();
      }
    }
  },
  mounted(){
    this.getMyOrder();
    this.$bus.$on('getPageNo', this.getPageNo);
  },
  methods: {
    async getMyOrder(){
      let {page, limit} = this;
      let result = await this.$API.reqMyOrderList(page, limit);
      if(result.code == 200){
        this.myOrder = result.data;
      }
    },
    getPageNo(page){
      this.page = page;
    }
  }
};
</script>

<style lang="css" scoped>
.order-right {
  float: right;
  width: 83.33%;
}
.order-right .order-content {
  margin: 0 20px;
  color: #666;
}
.order-right .order-content .title {
  margin-bottom: 22px;
  border: 1px solid #ddd;
}
.order-right .order-content .title h3 {
  padding: 12px 10px;
  font-size: 15px;
  background-color: #f1f1f1;
}
.order-right .order-content .chosetype {
  margin-bottom: 15px;
  color: #666;
}
.order-right .order-content .chosetype table {
  border: 1px solid #e6e6e6;
  border-collapse: separate;
  border-radius: 2px;
  width: 100%;
  max-width: 100%;
  border-spacing: 0;
}
.order-right .order-content .chosetype table th {
  padding: 6px 8px;
  color: #666;
  font-weight: 700;
  vertical-align: bottom;
  background-color: #f4f4f4;
  line-height: 18px;
  border-bottom: 1px solid #e6e6e6;
  font-size: 12px;
  text-align: left;
}
.order-right .order-content .orders {
  font-size: 12px;
}
.order-right .order-content .orders a:hover {
  color: #4cb9fc;
}
.order-right .order-content .orders table {
  border: 1px solid #e6e6e6;
  border-collapse: collapse;
  border-radius: 2px;
  width: 100%;
  margin-bottom: 18px;
  max-width: 100%;
}
.order-right .order-content .orders table th {
  padding: 6px 8px;
  line-height: 18px;
  text-align: left;
  vertical-align: bottom;
  background-color: #f4f4f4;
  font-size: 12px;
  color: #666;
}

.order-right .order-content .orders table th .pull-right {
  float: right;
  cursor: pointer;
}

.order-right .order-content .orders table th .pull-right img {
  margin-right: 10px;
  vertical-align: middle;
}

.order-right .order-content .orders table td {
  font-size: 12px;
  color: #666;
  padding: 6px 8px;
  line-height: 18px;
  text-align: left;
  vertical-align: middle;
  border: 1px solid #e6e6e6;
}

.order-right .order-content .orders table td.center {
  text-align: center;
}

.order-right .order-content .orders table td .typographic img {
  width: 60px;
  height: 60px;
  float: left;
  margin-right: 10px;
}

.order-right .order-content .orders table td .typographic a {
  float: left;
  min-width: 80px;
  max-width: 250px;
  color: #e1251b;
}

.order-right .order-content .orders table td .typographic a.service {
  color: #666;
}

.order-right .order-content .orders table td .typographic span {
  float: left;
  min-width: 80px;
  max-width: 250px;
  text-align: center;
}

.order-right .order-content .choose-order{
  /* margin: 38px 0; */
  height: 70px;
}

</style>