<template>
  <div class="spec-preview">
    <img :src="imgList.imgUrl" />
    <div class="event" @mousemove="handler"></div>
    <div class="big">
      <img :src="imgList.imgUrl" ref="big"/>
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
export default {
  name: "Zoom",
  props: ['skuImageList'],
  data(){
    return {
      currentIndex: 0,
    }
  },
  computed: {
    imgList(){
      return this.skuImageList[this.currentIndex] || {};
    }
  },
  mounted(){
    this.$bus.$on('changeImg', this.changeImg);
  },
  methods: {
    changeImg(index){
      this.currentIndex = index
    },
    handler(event){     // 传入鼠标移动事件，包含clientX、Y，offsetX、Y...
      let mask = this.$refs.mask;
      let big = this.$refs.big;
      let left = event.offsetX - mask.offsetWidth/2;
      let top = event.offsetY - mask.offsetHeight/2;
      // 约束蒙版范围
      if(left <= 0) left = 0;
      if(left >= mask.offsetWidth) left = mask.offsetWidth;
      if(top <= 0) top = 0;
      if(top >= mask.offsetHeight) top = mask.offsetHeight;
      mask.style.left = left + 'px';
      mask.style.top = top + 'px';
      // -2: 调整大图的显示位置，负数为：其方向刚好与小图相反
      big.style.left = -2 * left + 'px';
      big.style.top = -2 * top + 'px';
      // console.log(mask.offsetWidth, mask.offsetHeight);
    }
  }
};
</script>

<style lang="css" scoped>
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;
}
.spec-preview img {
  width: 100%;
  height: 100%;
}
.spec-preview .event {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 998;
}
.spec-preview .mask {
  width: 50%;
  height: 50%;
  background-color: rgba(0, 255, 0, 0.3);
  position: absolute;
  left: 0;
  top: 0;
  display: none;
}
.spec-preview .big {
  width: 100%;
  height: 100%;
  position: absolute;
  top: -1px;
  left: 100%;
  border: 1px solid #aaa;
  overflow: hidden;
  z-index: 998;
  display: none;
  background: white;
  /* z-index: 9999 !important; */
}
.spec-preview .big img {
  width: 200%;
  max-width: 200%;
  height: 200%;
  position: absolute;
  left: 0;
  top: 0;
}
.spec-preview .event:hover~.mask,
.spec-preview .event:hover~.big {
  display: block;
}
</style>