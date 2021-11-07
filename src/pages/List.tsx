import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { useQueryParam, StringParam } from 'use-query-params'
import { always, identity, includes, map, memoizeWith, tap, find } from 'ramda'
import { CityName, ScenicSpot as TScenicSpot } from '@/types'
import { ScenicSpot } from '@/api/index'
import { getCityNameZhTW, getCityNameEng, removeFromArray } from '@/tools'
import { Checkbox } from '@/components/ui/'
import { receiveMessageOnPort } from 'worker_threads'
import useStore from '@/store'

let citiesEng = getCityNameEng()
let citiesZhTW = getCityNameZhTW()
let hasAllScenicData = false
let searchTimer = false
let apiTimes = 0

export function List() {
  const [cityQuery, setCityQuery] = useQueryParam('city', StringParam)
  const cityList: string[] = []
  const allLocation = useStore((state) => state.scenicSpotsAll)
  const [listData, setListData]: any = useState([])
  const [filterData, setFilterData]: any = useState([])

  if (cityQuery) {
    cityList.push(cityQuery.toString())
  }

  const matchWord = (n: any, word: string) => n.match((RegExp(`${word}`), 'i'))
  const filterString = (item: []) => {
    return Object.values(item).filter((x) => typeof x === 'string')
  }

  const filterDataByString = (jsonData: any[], filterText: string) => {
    return jsonData.filter((item) => {
      const locationKeyword = filterString(item)
      const hasMatched = locationKeyword.filter((word) => word == matchWord(word, filterText))
      if (hasMatched.length > 0) {
        console.log('hasMatched', hasMatched)
        return hasMatched
      }
    })

    // console.log('a:', a)
    // console.log('isSame:', filter(isSame, a))

    // return a.find((info: any) => {
    //   console.log('===============')
    //   console.log('info', info)
    //   console.log('===============')
    //   return info.match(RegExp(`^${filterText}`), 'i')
    // })
  }

  const getListData = (city: CityName | string) => {
    ScenicSpot.getByCityName(city).then((resJson) => {
      setListData(resJson)
      apiTimes++
    })
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!searchTimer) {
      console.warn(e.target.value)
      const list = filterDataByString(listData, e.target.value)
      setFilterData(list)
      searchTimer = true
    }
    setTimeout(() => {
      searchTimer = false
    }, 100)
  }

  useEffect(() => {
    console.log('filterData', filterData)
  }, [filterData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('handleChange')
    if (cityList.includes(e.target.name)) {
      cityList = removeFromArray(cityList, e.target.name)
      setCityQuery(cityList.toString())
      return
    }
    cityList.push(e.target.name)
    setCityQuery(cityList.toString())
  }

  useEffect(() => {
    if (!hasAllScenicData && cityList.length === 1) {
      getListData(cityList.toString())
    }
    console.log('cityList:', cityList)
  }, [cityQuery])

  return (
    <>
      <section className="flex flex-row items-center border">
        <Link to="home">首頁</Link>
        <ChevronRightIcon className="h-4 w-4" />
        <Link to="home">城市</Link>
        <ChevronRightIcon className="h-4 w-4" />
        景點
      </section>

      <section className="flex flex-row border">
        {/* 左邊 */}
        <article className="inline-flex flex-shrink-0 flex-col border">
          {citiesZhTW.map((cityName: string, index) => (
            <Checkbox onChange={handleChange} isChecked={citiesEng[index] === cityName} key={index} name={citiesEng[index]} text={cityName} />
          ))}
        </article>
        {/* 右邊 */}
        <article className="inline-flex flex-col border">
          <div className="flex flex-row items-center bg-white px-2 h-[50px] md:h-[75px] w-3/4 rounded-lg mb-4 border-2 md:border-4 border-black">
            <SearchIcon className="h-10 w-10" />
            <input onChange={handleSearch} className="h-full w-full p-5" placeholder="地點...博物館...旅遊城市"></input>
            <button className="btn-green w-[170px]" onClick={() => getListData(CityName.Taipei)}>
              搜尋 <ChevronRightIcon className="h-10 w-10" />
            </button>
          </div>

          <small> {filterData.length} 項景點</small>
          {filterData &&
            filterData.map((item: TScenicSpot) => (
              <div key={item.ID} className="flex flex-row">
                <h1 className="text-red-400">filterData</h1>
                <div>
                  <img src={item.Picture.PictureUrl1} />
                </div>
                <div>
                  <h1>{item.Name}</h1>
                  <small>{item.Description}</small>
                  <Link to={`scenicSpot/${item.ID}`}>
                    <button className="btn-green">詳細介紹</button>
                  </Link>
                </div>
              </div>
            ))}
        </article>
      </section>
    </>
  )
}
