export default {
  state: {
    userInfo: null
  },
  mutations: {
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo
    }
  },
  getters: {
    userInfo: state => state.userInfo
  },
  actions: {
  }
}
