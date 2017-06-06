<template>
  <div class="index_header">
    <div class="left">全集团</div>
    <div class="area_select">广深区域\/</div>
    <div class="right">
      <img src="static/i/favicon.png">
      <img src="static/i/favicon.png">
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .index_header {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 34px;
    line-height: 34px;
    &:after{
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background: #dddddd;
    }
    z-index: 999;
    background: #ffffff;
    clear: both;
    .left {
      display: inline-block;
      margin-left: 8px;
    }
    .area_select {
      display: inline-block;
      margin-left: 12px;
    }
    .right {
      display: inline-block;
      position: absolute;
      right: 0;
      top: 0;
      margin-top: 6px;
      margin-right: 12px;
      img {
        width: 20px;
        height: 20px;
        margin-left: 12px;
      }
    }
  }
</style>
