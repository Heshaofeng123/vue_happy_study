<template>
  <div class="hc-column-group">
    <div class="hc-column-title" v-if="title">
      <h2 class="title">{{title}}</h2>
      <router-link :to="link" tag="div" class="more">查看更多</router-link>
    </div>
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'hc-column-group',
    props: {
        title: String,
        link: String
    }
  }
</script>
