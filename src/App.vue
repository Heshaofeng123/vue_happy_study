<template>
  <div class="lexue-doc">
    <index-header></index-header>
    <div class="main">
      <keep-alive>
        <transition name="lexue" mode="out-in">
          <router-view></router-view>
        </transition>
      </keep-alive>
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
          this.$store.commit('setUserInfo', res.data.body)

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
</style>
