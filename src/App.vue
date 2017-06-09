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
  import { userLogin } from '@/service/user'
  import { getGeoAreaList } from '@/service/base'

  export default {
    data () {
      return {}
    },
    components: {
      IndexHeader, Tab
    },
    mounted () {
      let opt = {
        account: '111',
        password: '123456'
      }

      userLogin(opt).then((res) => {
        console.log(res.data.body)
        if (res.data.state.errCode === 10000) {
          this.$store.commit('setHttpHeadersToken', res.data.body.token)

          let appendHttpHeaders = {
            account: '111',
            version: '1.0',
            clientOSType: CLIENTOSTYPE,
            token: res.data.body.token
          }

          localStorage.setItem('LMS-APPEND-HTTP-HEADERS', JSON.stringify(appendHttpHeaders))

          getGeoAreaList().then((res) => {
            console.log(res.data)
          })
        }
      })
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
