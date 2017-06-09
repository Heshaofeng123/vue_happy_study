import { ApiCall } from '@/config/api'

export const userLogin = function (opt) {
  let URI = '/user/login/' + opt.account + '/' + opt.password
  return ApiCall.getBare(URI)
}
