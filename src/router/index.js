
// 引入Vue模块
import Vue from 'vue'
// 引入路由模块
import VueRouter from 'vue-router'

// const Me = r => require.ensure([], () => r(require('@/views/me/Me.vue')), 'chunkname1');
// const Taoke = r => require.ensure([], () => r(require('@/views/taoke/Taoke.vue')), 'chunkname0');
// const Me = r => require.ensure([], () => r(require('@/views/me/Me.vue')), 'chunkname1');

import Home from '../views/Home/Home.vue';

Vue.use(VueRouter);

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       component: Taoke
//     },
//     {
//       path: '/me',
//       component: Me
//     },
//     {
//       path: '*',
//       component: Taoke
//     }
//   ]
// })

// 创建路由实例并配置路由映射
const router = new VueRouter({
  /*mode: 'history',
  scrollBehavior,*/
  routes:[
    { path: '/', component: Home },
	  { path: '/home', component: Home }
  ]
});

// 输出router
export default router;
