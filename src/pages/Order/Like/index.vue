<template>
  <!--猜你喜欢-->
  <div class="like">
    <h4 class="kt">猜你喜欢</h4>
    <ul class="like-list">
      <li class="likeItem">
        <div class="p-img">
          <img src="./images/itemlike01.png" />
        </div>
        <div class="attr">
          <em>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</em>
        </div>
        <div class="price">
          <em>¥</em>
          <i>3699.00</i>
        </div>
        <div class="commit">已有6人评价</div>
      </li>
      <li class="likeItem">
        <div class="p-img">
          <img src="./images/itemlike02.png" />
        </div>
        <div class="attr">Apple苹果iPhone 6s/6s Plus 16G 64G 128G</div>
        <div class="price">
          <em>¥</em>
          <i>4388.00</i>
        </div>
        <div class="commit">已有700人评价</div>
      </li>
      <li class="likeItem">
        <div class="p-img">
          <img src="./images/itemlike03.png" />
        </div>
        <div class="attr">DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</div>
        <div class="price">
          <em>¥</em>
          <i>4088.00</i>
        </div>
        <div class="commit">已有700人评价</div>
      </li>
      <li class="likeItem">
        <div class="p-img">
          <img src="./images/itemlike04.png" />
        </div>
        <div class="attr">DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</div>
        <div class="price">
          <em>¥</em>
          <i>4088.00</i>
        </div>
        <div class="commit">已有700人评价</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Like",
};
</script>

<style >
.like {
  border: 1px solid #ddd;
  margin: 15px 20px;
}
.like .kt {
  border-bottom: 1px solid #ddd;
  background: #f1f1f1;
  color: #666;
  margin: 0;
  padding: 12px;
  font-size: 15px;
}
.like .like-list {
  padding: 15px 11px;
  overflow: hidden;
}
.like .like-list .likeItem {
  width: 25%;
  float: left;
}

.like .like-list .likeItem .p-img {
  text-align: left;
}
.like .like-list .likeItem .p-img img {
  width: 167px;
  height: 123px;
}
.like .like-list .likeItem .attr {
  padding: 0 15px;
}
.like .like-list .likeItem .price {
  padding: 0 15px;
  font-size: 16px;
  color: #c81623;
  margin-bottom: 20px;
}
.like .like-list .likeItem .commit {
  padding: 0 15px;
}
</style>