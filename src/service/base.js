import { ApiCall } from '@/config/api'

export const getGeoAreaList = function () {
  let type = 'REGION'
  let URI = '/api/dicts/enum/' + type
  return ApiCall.get(URI)
}
