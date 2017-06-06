<template>
  <div class="hc-column-item cl">
    <div class="hc-column-left">
      <h3 class="title">{{title}}</h3>
      <p class="des">{{des}}</p>
      <p class="ft">
        <span class="s1">{{count}}人学习</span>
        <span class="s2">{{points}}分</span>
      </p>
    </div>
    <div class="hc-column-right">
      <img :src="src">
      <div class="timer">{{timer}}</div>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'hc-column-item',
    props: {
        title: String,
        des: String,
        count: String,
        points: String,
        src: String,
        timer: String
    }
  }
</script>

<style lang="less">
    @import '../../../../styles/components/original/column.less';
</style>


<!-- type: {
  type: String,
  validator(value) {
      return ['primary', 'danger', 'warning', 'hollow', 'disabled'].indexOf(value) > -1;
  },
  default: 'primary'
}, -->
