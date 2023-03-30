<template>
  <!--bread 面包屑-->
  <div class="bread">
    <ul class="fl sui-breadcrumb">
      <li>
        <a href="#">全部结果</a>
      </li>
    </ul>
    <ul class="fl sui-tag">
      <li class="with-x" v-if="breadList.nav">
        {{ breadList.nav }}
        <i @click="removeCategoryName">×</i>
      </li>
      <li class="with-x" v-if="breadList.btnSearch">
        {{ breadList.btnSearch }}
        <i @click="removeKeyword">×</i>
      </li>
      <li class="with-x" v-if="breadList.brand">
        {{ breadList.brand.tmName }}
        <i @click="removeBrand">×</i>
      </li>
      <li class="with-x" 
          v-if="breadList.props && breadList.props != breadList.brand.tmName" 
          v-for="property in breadList.props" 
          :key="property.tmId">
          {{ property.name }}
          <i @click="removeProperty(property)">×</i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SearchBread",
  props: ['breadList'],
  watch: {
    breadList: {
      deep:true,
      handler(){
        // console.log(this.breadList);
      }
    }
  },
  methods: {
    removeCategoryName(){
      this.$emit('categoryName');
      
    },
    removeKeyword(){
      this.$emit('keyword');
    },
    removeBrand(){
      this.$emit('brand');
    },
    removeProperty(prop){
      const reset = `${prop.attrId}:${prop.name}:${prop.attrName}`;
      let index = this.breadList.props.indexOf(prop);
      this.$emit('property', reset);
      this.breadList.props.splice(index, 1);
    },
    
  }
};
</script>

<style lang="css" scoped>
.bread {
  margin-top: 20px;
  overflow: hidden;
}
.bread .sui-breadcrumb {
  padding: 3px 15px;
  margin: 0;
  font-weight: 400;
  border-radius: 3px;
  float: left;
}
.bread .sui-breadcrumb li {
  display: inline-block;
  line-height: 18px;
}
.bread .sui-breadcrumb li a {
  color: #666;
  text-decoration: none;
}
.bread .sui-breadcrumb li a:hover {
  color: #4cb9fc;
}
.bread .sui-tag {
  margin-top: -5px;
  list-style: none;
  font-size: 0;
  line-height: 0;
  padding: 5px 0 0;
  margin-bottom: 18px;
  float: left;
}
.bread .sui-tag .with-x {
  font-size: 12px;
  margin: 0 5px 5px 0;
  display: inline-block;
  overflow: hidden;
  color: #000;
  background: #f7f7f7;
  padding: 0 7px;
  height: 20px;
  line-height: 20px;
  border: 1px solid #dedede;
  white-space: nowrap;
  transition: color 400ms;
  cursor: pointer;
}
.bread .sui-tag .with-x i {
  margin-left: 10px;
  cursor: pointer;
  font: 400 14px tahoma;
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
.bread .sui-tag .with-x:hover {
  color: #28a3ef;
}
</style>