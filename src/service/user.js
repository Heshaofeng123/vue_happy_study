import { ApiCall } from '@/config/api'

export const userLogin = function (opt) {
  let URI = '/lms-service/user/login/'+opt.account+'/'+opt.password
  return ApiCall.getBare(URI)
}
