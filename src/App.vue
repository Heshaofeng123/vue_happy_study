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

<script>
import Tab from './components/local/Tab'
import IndexHeader from './components/local/IndexHeader'

export default {
  name: 'app',
  data () {
    return {}
  },
  components: {
    Tab, IndexHeader
  }
}
</script>

<style lang="scss">
@import './style/reset.css';

html, body {
  width: 100%;
  height: 100%;
}

#app {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .main {
    position: absolute;
    top: 34px;
    bottom: 54px;
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 5px;
  }
}
</style>
