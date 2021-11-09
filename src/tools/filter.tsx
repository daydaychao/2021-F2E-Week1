import { CityNameZhTW } from '@/types'

// 文字篩選
export const filterByText = (text: string, list: any[]) => {
  if (!text) return list
  return list.filter((item) => {
    const itemKeyword = getKeywordToArray(item)
    const hasMatched = itemKeyword.find((original) => getMatchText(text, original))
    if (hasMatched) {
      return true
    }
  })
}

// 英文轉中文 (字串陣列,enum)
export const changeName = (preList: string[], enumList: any) => {
  let newList: string[] = []
  preList.map((x) => {
    return (Object.keys(enumList) as Array<keyof typeof enumList>).map((key, index) => {
      if (x === key) {
        newList.push(enumList[key])
      }
    })
  })
  return newList
}

// 城市陣列篩選
export const filterByCities = (cities: string[], list: any[]) => {
  const cnameKeyword: string[] = changeName(cities, CityNameZhTW)
  return list.filter((location) => {
    return cnameKeyword.find((cname) => {
      if (location.City == cname) {
        console.log('location.City == c', location.City == cname)
        return true
      }
    })
  })
}

// 特別項目篩選
export const filterBySpecials = (Specials: string[], list: any[]) => {
  return list
}

// 移除array中的那項item
export const removeFromArray = (item: string, array: string[]) => array.filter((v: string) => v !== item)

// 取得吻合的文字
export const getMatchText = (text: string, original: string) => original.match(RegExp(text, 'i'))

// 取得enum,object的value並傳成一項陣列
export const getKeywordToArray = (items: []) => {
  return Object.values(items).filter((x) => typeof x === 'string')
}
