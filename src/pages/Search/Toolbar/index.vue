<template>
  <div class="toolbar toolbar-wrap">
    <div class="content"></div>
    <div class="but list"></div>
    <div class="toolist">
      <div class="pull">
        <i class="tab-ico vip"></i>
        <em class="tab-text">商品会员</em>
      </div>
      <div class="pull">
        <i class="tab-ico cart"></i>
        <em class="tab-text">购物车</em>
      </div>
      <div class="pull">
        <i class="tab-ico follow"></i>
        <em class="tab-text">我的关注</em>
      </div>
      <div class="pull">
        <i class="tab-ico history"></i>
        <em class="tab-text">我的足迹</em>
      </div>
      <div class="pull">
        <i class="tab-ico message"></i>
        <em class="tab-text">我的消息</em>
      </div>
      <div class="pull">
        <i class="tab-ico jimi"></i>
        <em class="tab-text">咨询</em>
      </div>
    </div>
    <div class="back pull">
      <i class="tab-ico top"></i>
      <em class="tab-text">顶部</em>
    </div>
  </div>
</template>

<script>
export default {
  name: "Toolbar",
};
</script>

<style lang="css" scoped>
.toolbar {
  position: fixed;
  z-index: 999;
  width: 300px;
  height: 100%;
  background-color: #7a6e6e;
  transition: right 0.3s ease-in-out 0s;
}
.toolbar.toolbar-out {
  top: 0px;
  right: 0px;
}
.toolbar.toolbar-wrap {
  top: 0px;
  right: -294px;
}
.toolbar .content {
  position: relative;
  left: 6px;
  width: 294px;
  background-color: bisque;
  height: 100%;
  z-index: 99;
}
.toolbar .but {
  position: relative;
  width: 35px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  margin-bottom: 1px;
  cursor: pointer;
  background-color: #7a6e6e;
  border-radius: 3px 0 0 3px;
  position: absolute;
  top: 0;
  /*right: -6px;*/
  left: -29px;
}
.toolbar .but.list {
  background-image: url(./images/list.png);
  background-repeat: no-repeat;
  background-size: cover;
}
.toolbar .but.pull-wrap {
  background-image: url(./images/cross.png);
  background-repeat: no-repeat;
  background-size: cover;
}
.toolbar .toolist {
  position: absolute;
  top: 50%;
  left: -29px;
  width: 35px;
  margin-top: -80px;
  /*background-color: cadetblue;*/
}
.toolbar .toolist .pull {
  position: relative;
  width: 35px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  margin-bottom: 1px;
  cursor: pointer;
  background-color: #7a6e6e;
  border-radius: 3px 0 0 3px;
  z-index: 66;
}
.toolbar .toolist .pull .vip {
  background-image: url(./images/toolbars.png);
  background-position: -88px -175px;
}
.toolbar .toolist .pull .cart {
  background-image: url(./images/toolbars.png);
  background-position: -50px 0;
}
.toolbar .toolist .pull .follow {
  background-image: url(./images/toolbars.png);
  background-position: -50px -50px;
}
.toolbar .toolist .pull .history {
  background-image: url(./images/toolbars.png);
  background-position: -50px -100px;
}
.toolbar .toolist .pull .message {
  background-image: url(./images/toolbars.png);
  background-position: -190px -150px;
}
.toolbar .toolist .pull .jimi {
  background-image: url(./images/toolbars.png);
  background-position: -50px -150px;
}
.toolbar .toolist .pull .top {
  background-image: url(./images/toolbars.png);
  background-position: -50px -250px;
}
.toolbar .toolist .pull .tab-text {
  width: 62px;
  height: 35px;
  line-height: 35px;
  color: #fff;
  text-align: center;
  font-family: 微软雅黑;
  position: absolute;
  /*position: relative;*/
  z-index: 1;
  left: 35px;
  top: 0;
  background-color: #7a6e6e;
  border-radius: 3px 0 0 3px;
  font-style: normal;
  -webkit-transition: left 0.3s ease-in-out 0.1s;
  transition: left 0.3s ease-in-out 0.1s;
}
.toolbar .toolist .pull .tab-ico {
  display: inline-block;
  position: relative;
  /*background-image: url(img/toolbars.png);*/
  background-color: #7a6e6e;
  border-radius: 3px 0 0 3px;
  z-index: 2;
  width: 35px;
  height: 35px;
}
.toolbar > .pull {
  position: relative;
  width: 35px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  margin-bottom: 1px;
  cursor: pointer;
  background-color: #7a6e6e;
  border-radius: 3px 0 0 3px;
  z-index: 66;
}
.toolbar > .pull .tab-ico {
  display: inline-block;
  position: relative;
  /*background-image: url(img/toolbars.png);*/
  background-color: #7a6e6e;
  border-radius: 3px 0 0 3px;
  z-index: 2;
  width: 35px;
  height: 35px;
}
.toolbar > .pull .top {
  background-image: url(./images/toolbars.png);
  background-position: -50px -250px;
}
.toolbar > .pull .tab-text {
  width: 62px;
  height: 35px;
  line-height: 35px;
  color: #fff;
  text-align: center;
  font-family: 微软雅黑;
  position: absolute;
  /*position: relative;*/
  z-index: 1;
  left: 35px;
  top: 0;
  background-color: #7a6e6e;
  border-radius: 3px 0 0 3px;
  font-style: normal;
  -webkit-transition: left 0.3s ease-in-out 0.1s;
  transition: left 0.3s ease-in-out 0.1s;
}
.toolbar > .back {
  position: absolute;
  bottom: 0;
  /*right: -6px;*/
  left: -29px;
  display: inline-block;
  background-image: url(./images/toolbars.png);
}
</style>