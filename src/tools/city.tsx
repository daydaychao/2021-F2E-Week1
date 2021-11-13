import { CityName, CityNameZhTW, Specials } from '@/types'

export const getCityNameEng = () => {
  return Object.values(CityName)
}
export const getCityNameZhTW = () => {
  return Object.values(CityNameZhTW)
}
export const getSpecials = () => {
  return Object.values(Specials)
}
