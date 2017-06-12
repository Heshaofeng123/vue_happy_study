import Vue from 'vue'

import Router from 'vue-router'

const Taoke = r => require.ensure([], () => r(require('@/views/taoke/Taoke.vue')))
const Me = r => require.ensure([], () => r(require('@/views/me/Me.vue')))
const Search = r => require.ensure([], () => r(require('@/views/search/index.vue')))

Vue.use(Router);

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
      path: '/search',
      component: Search
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
