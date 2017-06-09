export default {
  state: {
    appendHttpHeaders: {
      account: '111',
      version: '1.0',
      clientOSType: '',
      token: ''
    }
  },
  mutations: {
    setHttpHeadersAccount (state, account) {
      state.appendHttpHeaders.account = account
    },
    setHttpHeadersVersion (state, version) {
      state.appendHttpHeaders.version = version
    },
    setHttpHeadersClientOsType (state, clientOsType) {
      state.appendHttpHeaders.clientOSType = clientOsType
    },
    setHttpHeadersToken (state, token) {
      state.appendHttpHeaders.token = token
    }
  },
  getters: {
    getAppendHttpHeaders: state => state.appendHttpHeaders
  },
  actions: {}
}
