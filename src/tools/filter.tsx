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
  if (cities.length === 0) return list
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
export const filterBySpecials = (specials: string[], list: any[]) => {
  if (specials.length === 0) return list
  console.log('specials:', specials)
  return list.filter((location) => {
    return specials.find((special) => {
      if (location.Class1 == special || location.Class2 == special || location.Class3 == special) {
        return true
      }
    })
  })
}

// 移除array中的那項item
export const removeFromArray = (item: string, array: string[]) => array.filter((v: string) => v !== item)

// 取得吻合的文字
export const getMatchText = (text: string, original: string) => original.match(RegExp(text, 'i'))

// 取得enum,object的value並傳成一項陣列
export const getKeywordToArray = (items: []) => {
  return Object.values(items).filter((x) => typeof x === 'string')
}
