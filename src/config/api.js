import Vue from 'vue'
import resource from 'vue-resource'

Vue.use(resource)

function get (url) {
  let appendHttpHeaders = JSON.parse(localStorage.getItem('LMS-APPEND-HTTP-HEADERS'))
  
  Vue.http.headers.common['account'] = appendHttpHeaders.account
  Vue.http.headers.common['version'] = appendHttpHeaders.version
  Vue.http.headers.common['clientOSType'] = appendHttpHeaders.clientOSType
  Vue.http.headers.common['token'] = appendHttpHeaders.token
  
  let URI = HOST + url
  let foo = function* () {
    yield Vue.http.get(URI)
  }
  return foo().next().value
}

function getBare (url) {
  let URI = HOST + url
  let foo = function* () {
    yield Vue.http.get(URI)
  }
  return foo().next().value
}

function post (url, data) {
  let appendHttpHeaders = JSON.parse(localStorage.getItem('LMS-APPEND-HTTP-HEADERS'))
  
  Vue.http.headers.common['account'] = appendHttpHeaders.account
  Vue.http.headers.common['version'] = appendHttpHeaders.version
  Vue.http.headers.common['clientOSType'] = appendHttpHeaders.clientOSType
  Vue.http.headers.common['token'] = appendHttpHeaders.token

  let URI = HOST + url
  let foo = function* (data) {
    yield Vue.http.post(URI, data)
  }
  return foo(data).next().value
}

let apiCall = {
  get: get,
  getBare: getBare,
  post: post
}

export const ApiCall = apiCall
