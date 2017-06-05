<template>
  <div class="tab">
    <div :class="{'active': activeIndex === 0}" @click="selectTab(0)">
      <img :src="tabSrc.one">
      <span>发现</span>
    </div>
    <div :class="{'active': activeIndex === 1}" @click="selectTab(1)">
      <img :src="tabSrc.two">
      <span>我的</span>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeIndex: 0
      }
    },
    computed: {
      tabSrc () {
        return {
          one: this.activeIndex === 0 ? 'static/images/icon/11.jpg' : 'static/images/icon/01.jpg',
          two: this.activeIndex === 1 ? 'static/images/icon/12.jpg' : 'static/images/icon/02.jpg'
        }
      }
    },
    methods: {
      selectTab (index) {
        this.activeIndex = index
        switch (index) {
          case 0:
            this.$router.push('/')
            break
          case 1:
            this.$router.push('/me')
            break
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tab {
    width: 100%;
    height: 54px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 999;
    background: #ffffff;
    clear: both;
    &:before{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background: #dddddd;
    }
    div {
      width: 50%;
      height: 54px;
      float: left;
      text-align: center;
      img{
        width: 25px;
        height: 25px;
        margin-top: 9px;
      }
      span{
        font-size: 11px;
        display: block;
      }
    }
    div.active {
      span {
        color: orange;
      }
    }
  }
</style>
