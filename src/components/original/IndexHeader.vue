<template>
  <div class="index_header">
    <div class="left">
      <img src="static/i/search.png" @click="gotoSearch">
    </div>
    <div class="area_select">
      <span class="description" @click="allGroup" :class="{'active': allGroupActive }">全集团</span>
      <span class="selection" @click="selectedArea" :class="{'active': selectedAreaActive }">广深区域</span>
    </div>
    <div class="right">
      <img src="static/i/qr.png" @click="qrCode">
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        allGroupActive: true,
        selectedAreaActive: false
      }
    },
    methods: {
      gotoSearch () {
        console.log('location: "/search"')
        this.$router.push('/search')
      },
      qrCode () {
        console.log('location: "/qrCode"')
      },
      allGroup (ev) {
        this.allGroupActive = true
        this.selectedAreaActive = false
      },
      selectedArea (ev) {
        this.selectedAreaActive = true
        this.allGroupActive = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .index_header {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 48px;
    line-height: 48px;
    z-index: 999;
    background: #ffffff;

    &:after{
      content: "";
      position: absolute;
      bottom: -1px;
      left: 0px;
      width: 100%;
      height: 1px;
      background: #f0f0f0;
    }
    
    .left {
      display: inline-block;
      position: absolute;
      left: 0;
      top: 0;
      margin-top: 14px;
      margin-left: .26rem;
      img {
        height: 20px;
      }
    }

    .area_select {
      display: inline-block;
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -22%;
      height: 40px;
      line-height: 40px;
      margin-top: 8px;
      font-size: 18px;
      .description {
        color: #333333;
      }
      .description.active {
        color: #38acff;
        position: relative;
        &:after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -10px;
          margin-left: -20%;
          width: 40%;
          height: 5px;
          background: #38acff;
        }
      }
      .selection {
        margin-left: 28px;
        color: #333333;
      }
      .selection.active {
        color: #38acff;
        position: relative;
        &:after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -10px;
          margin-left: -25%;
          width: 50%;
          height: 5px;
          background: #38acff;
        }
      }
    }

    .right {
      display: inline-block;
      position: absolute;
      right: 0;
      top: 0;
      margin-top: 14px;
      margin-right: .26rem;

      img {
        height: 20px;
      }
    }
  }
</style>
