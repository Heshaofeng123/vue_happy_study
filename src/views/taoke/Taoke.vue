<template>
  <div class="taoke">
    <index></index>
  </div>
</template>

<script>
import index from './index/index.vue'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  components: {
    index
  },
  mounted () {
    console.log(this.userInfo)
  }
}
</script>
