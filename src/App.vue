<template>
  <div id="app">
    <index-header></index-header>
    <div class="main">
      <transition>
        <router-view></router-view>
      </transition>
    </div>
    <tab></tab>
  </div>
</template>

<script type="text/babel">
  import IndexHeader from '@/components/original/IndexHeader'
  import Tab from '@/components/original/Tab'

  export default {
    data () {
      return {}
    },
    components: {
      IndexHeader, Tab
    }
  }
</script>

<style lang="less">
  @import "./styles/common/common.less";

  #app {
    position: relative;
    width: 100%;
    height: 100%;
    .main {
      position: absolute;
      top: 48px;
      bottom: 54px;
      overflow-x: hidden;
      overflow-y: scroll;
    }
  }
</style>
