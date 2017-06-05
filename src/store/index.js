import Vue from 'vue'
import Vuex from 'vuex'

import base from './modules/base'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    base: base,
    user: user
  }
})

export default store
