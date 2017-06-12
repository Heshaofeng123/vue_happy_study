<template>
  <div class="tab">
    <div :class="{'active': activeIndex === 0}" @click="selectTab(0)">
      <img :src="tabSrc.one">
      <span>淘课</span>
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
          one: this.activeIndex === 0 ? 'static/i/11.png' : 'static/i/01.jpg',
          two: this.activeIndex === 1 ? 'static/i/12.jpg' : 'static/i/02.png'
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
    position: fixed; bottom: -1px; left: 50%; z-index: 9;
    width: 7.5rem; height: 1rem;
    margin-left: -3.75rem;
    background-color: #ffffff;
    clear: both;
    &:before{
      content: "";
      position: absolute; top: 0; left: 0;
      width: 100%; height: 1px;
      background-color: #f0f0f0;
    }
    div {
      float: left;
      width: 50%;
      text-align: center;
      padding-top: .12rem;
      img{
        width: auto; height: .4rem;
        margin: auto;
      }
      span {
        padding-top: .12rem;
        font-size: .2rem;
        line-height: .2rem;
        color: #999999;
      }
    }
    div.active {
      span {
        color: #38acff;
      }
    }
  }
</style>
