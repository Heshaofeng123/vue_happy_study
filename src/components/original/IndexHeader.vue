<template>
  <div class="index_header">
    <div class="i-btn i-search" @click="gotoSearch"></div>
    <div class="area_select">
      <span class="description" @click="allGroup" :class="{'active': allGroupActive }">全集团</span>
      <span class="selection" @click="selectedArea" :class="{'active': selectedAreaActive }">广深区域</span>
    </div>
    <div class="i-btn i-qrCode" @click="qrCode"></div>
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
    position: fixed; left: 50%; top: 0; z-index: 9;
    width: 7.5rem; height: .88rem;
    margin-left: -3.75rem;
    line-height: 48px;
    background-color: #ffffff;

    &:after{
      content: "";
      position: absolute;
      bottom: -1px;
      left: 0px;
      width: 100%;
      height: 1px;
      background: #f0f0f0;
    }

    .i-btn {
      position: absolute; top: 0; z-index: 2;
      width: .92rem; height: .88rem;
      background-repeat: no-repeat;
      background-position: center center;
      &.i-search {
        left: 0;
        background-image: url(../../assets/i/i-search.png);
        background-size: .4rem auto;
      }
      &.i-qrCode {
        right: 0;
        background-image: url(../../assets/i/i-qrScan.png);
        background-size: .4rem auto;
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
          bottom: -6px;
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
          bottom: -6px;
          margin-left: -25%;
          width: 50%;
          height: 5px;
          background: #38acff;
        }
      }
    }
  }
</style>
