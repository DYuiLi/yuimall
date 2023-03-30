<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <p v-if="!userName">
            <!-- <router-link to="/login">请登录</router-link> -->
            <a @click="toLogin">请登录</a>
            <router-link class="register" to="/register">免费注册</router-link>
          </p>
          <p v-else>
            <span>{{ userName }}</span>
            <a @click="logout" class="register">退出登录</a>
          </p>
          
        </div>
        <div class="typeList">
          <router-link to="/order">我的订单</router-link>
          <router-link to="/shopcart">我的购物车</router-link>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom" v-if="isShow">
      <h1 class="logoArea">
        <a class="logo" title="尚品汇" href="###" target="_blank">
          <img src="./images/logo.png" alt="" />
        </a>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            @keyup.enter="toSearch"
            v-model="keyword"
          />
          <button
            class="sui-btn btn-xlarge btn-danger"
            type="button"
            @click="toSearch"
          >
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
import Search from "@/pages/Search";
import { showHeaderandFooter } from "@/mixin";

export default {
  name: "Header",
  components: { Search },
  data() {
    return {
      keyword: "",
    };
  },
  mounted(){
    // this.$store.dispatch('userLog/userToken');
    // console.log('Header加载完成');
  },
  computed: {
    isShow: function () {
      return showHeaderandFooter(this.$route.path);
    },
    // checkLogin,
    userName(){
      return this.$store.state.userLog.userInfo.name;
    },
  },
  methods: {
    toSearch() {
      // const input = document.getElementById('autocomplete');
      let location = {
        name: "searchGoods",
        params: {
          keyword: this.keyword,
        },
      };
      if (this.$route.query) {
        // 若已存在query数据，进行数据合并
        location.query = this.$route.query;
      }
      this.$router.replace(location);
      this.keyword = "";
    },

    Search() {
      console.log("enter key pressed");
    },

    async logout(){
      try{
        await this.$store.dispatch('userLog/userLogout');
        this.$router.replace('/home');
      }catch(error){
        alert('failed');
      }
    },

    toLogin(){
      // console.log('请求登录');
      this.$router.push('/login');
    }
  },
};
</script>

<style scoped>
.header > .top {
  background-color: #eaeaea;
  height: 30px;
  line-height: 30px;
}
.header > .top .container {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.header > .top .container .loginList {
  float: left;
}
.header > .top .container .loginList p {
  float: left;
  margin-right: 10px;
}
.header > .top .container .loginList p a:hover {
  text-decoration: none;
  color: red;
}
.header > .top .container .loginList p span {
  color: orange;
}
.header > .top .container .loginList p .register {
  border-left: 1px solid #b3aeae;
  padding: 0 5px;
  margin-left: 5px;
}
.header > .top .container .typeList {
  float: right;
}
.header > .top .container .typeList a {
  text-decoration: none;
  cursor: pointer;
  padding: 0 10px;
}
.header > .top .container .typeList a:hover {
  color: red;
}
.header > .top .container .typeList a + a {
  border-left: 1px solid #b3aeae;
}
.header > .bottom {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.header > .bottom .logoArea {
  float: left;
}
.header > .bottom .logoArea .logo img {
  width: 175px;
  margin: 25px 45px;
}
.header > .bottom .searchArea {
  float: right;
  margin-top: 35px;
}
.header > .bottom .searchArea .searchForm {
  overflow: hidden;
}
.header > .bottom .searchArea .searchForm input {
  box-sizing: border-box;
  width: 490px;
  height: 32px;
  padding: 0px 4px;
  border: 2px solid #ea4a36;
  float: left;
}
.header > .bottom .searchArea .searchForm input:focus {
  outline: none;
}
.header > .bottom .searchArea .searchForm button {
  height: 32px;
  width: 68px;
  background-color: #ea4a36;
  border: none;
  color: #fff;
  float: left;
  cursor: pointer;
}
.header > .bottom .searchArea .searchForm button:focus {
  outline: none;
}
</style>