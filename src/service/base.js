import { ApiCall } from '@/config/api'

export const getGeoAreaList = function (parentCode) {
  let type = 'REGION'
  let URI = '/api/dicts/enum/' + type + (parentCode ? '/' + parentCode : '')
  console.log(URI)
  return ApiCall.get(URI)
}
