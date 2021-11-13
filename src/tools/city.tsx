import { CityName, CityNameZhTW, Specials } from '@/types'

export const getCityNameEng = () => {
  return Object.values(CityName)
}
export const getCityNameZhTW = () => {
  return Object.values(CityNameZhTW)
}
export const getEnumValues = (object: object) => {
  return Object.values(object)
}

export const getEnumKeys = (object: object) => {
  return Object.keys(object)
}
