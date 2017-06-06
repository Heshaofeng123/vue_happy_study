<template>
  <div class="index_header">
    <div class="left">
      <img src="static/i/favicon.png">
    </div>
    <div class="area_select">
      <span class="description">全集团</span>
      <span class="selection">广深区域\/</span>
    </div>
    <div class="right">
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
    z-index: 999;
    background: #ffffff;

    &:after{
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background: #dddddd;
    }
    
    .left {
      display: inline-block;
      position: absolute;
      left: 0;
      top: 0;
      margin-top: 6px;
      margin-left: 12px;
      img {
        width: 20px;
        height: 20px;
      }
    }

    .area_select {
      display: inline-block;
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -30%;
      height: 34px;
      line-height: 34px;
      .description {
      }
      .selection {
        margin-left: 22px;
      }
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
      }
    }
  }
</style>
