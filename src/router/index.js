import Vue from 'vue'
import Router from 'vue-router'

const Taoke = r => require.ensure([], () => r(require('@/views/taoke/Taoke.vue')), 'chunkname0')
const Me = r => require.ensure([], () => r(require('@/views/me/Me.vue')))

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Taoke
    },
    {
      path: '/me',
      component: Me
    },
    {
      path: '*',
      component: Taoke
    }
  ]
})
