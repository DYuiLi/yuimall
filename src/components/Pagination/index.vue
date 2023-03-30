<template>
  <div class="fr page">
    <div class="sui-pagination clearfix">
      <ul>
        <li class="prev" :class="{disabled: page.current === 1}">
          <a @click="$bus.$emit('getPageNo', page.current-1)">«上一页</a>
        </li>
        <li v-if="pageDisplay.start > 1" :class="{active: page.current === 1}">
          <a @click="$bus.$emit('getPageNo', 1)">1</a>
        </li>
        <li v-if="pageDisplay.start > 2">...</li>

        <li v-for="(pageInfo, index) in pageDisplay.end" 
            :key="index" 
            v-if="pageInfo >= pageDisplay.start"
            :class="{active: page.current === pageInfo}">
          <a @click="$bus.$emit('getPageNo', pageInfo)">{{ pageInfo }}</a>
        </li>

        <li v-if="pageDisplay.end < totalPage - 1">...</li>
        <li v-if="pageDisplay.end < totalPage"
            :class="{active: page.current === totalPage}">
          <a @click="$bus.$emit('getPageNo', totalPage)">{{ totalPage }}</a>
        </li>
        
        <li class="next" :class="{disabled: page.current === totalPage}">
          <a @click="$bus.$emit('getPageNo', page.current+1)">下一页»</a>
        </li>
      </ul>
      <div><span>共 {{ totalPage }} 页&nbsp;</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ['page'],        
  computed: {
    totalPage: function(){
      return Math.ceil(this.page.total/this.page.size);
    },
    pageDisplay: function(){
      const {current,continues} = this.page;
      let start = 0;
      let end = 0;
      if(continues > this.totalPage){
        start = 1;
        end = this.totalPage;
      }else if(current < continues){
        start = continues - parseInt(continues/2);
        end = continues + parseInt(continues/2);
      }else{
        start = current - parseInt(continues/2);
        end = current + parseInt(continues/2);
      }
      if(end > this.totalPage){
        end = this.totalPage;
        start = this.totalPage - continues + 1;
      }
      return {start, end}
    }
  },
  mounted(){
    
  },
  methods: {
    
  }
};
</script>

<style lang="css" scoped>
.page {
  width: 733px;
  height: 66px;
  overflow: hidden;
  float: right;
}
.page .sui-pagination {
  margin: 18px 0;
}
.page .sui-pagination ul {
  margin-left: 0;
  margin-bottom: 0;
  vertical-align: middle;
  width: 580px;
  float: left;
}
.page .sui-pagination ul li {
  margin: 0 4px;
  line-height: 18px;
  display: inline-block;
}
.page .sui-pagination ul li a {
  position: relative;
  float: left;
  line-height: 18px;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #e0e9ee;
  border-radius: 10%;
  margin-left: -1px;
  font-size: 14px;
  padding: 9px 18px;
  color: #333;
}
.page .sui-pagination ul li.active a {
  background-color: #fff;
  color: #e1251b;
  border-color: #fff;
  cursor: default;
}
.page .sui-pagination ul li.prev a {
  background-color: #fafafa;
}
/* .page .sui-pagination ul li.prev button {
  color: #999;
} */
.page .sui-pagination ul li.disabled a {
  color: #999;
  cursor: default;
}
.page .sui-pagination ul li.dotted span {
  margin-left: -1px;
  position: relative;
  float: left;
  line-height: 18px;
  text-decoration: none;
  background-color: #fff;
  font-size: 14px;
  border: 0;
  padding: 9px 18px;
  color: #333;
}
.page .sui-pagination ul li.next a {
  background-color: #fafafa;
}
.page .sui-pagination div {
  color: #333;
  font-size: 14px;
  float: right;
  width: 150px;
  margin-top: 7px;
}
</style>