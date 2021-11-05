import React, { ReactChild, ReactFragment, ReactPortal, useEffect, useState } from 'react'
import { always, identity, map, memoizeWith, tap } from 'ramda'
import { ScenicSpot } from '@/api/index'
import { CityName, ScenicSpot as TScenicSpot } from '@/types'
import { Link, useLocation, useParams } from 'react-router-dom'
import { SearchIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { getCityNameZhTW, getCityNameEng, removeFromArray } from '@/tools'
import { Checkbox } from '@/components/ui/'
import { useQueryParam, NumberParam, StringParam } from 'use-query-params'

const filterData = () => {}

let citiesEng = getCityNameEng()
let citiesZhTW = getCityNameZhTW()
let apiTimes = 0
let hasAllScenicData = false

export function List() {
  let cityList: string[] = []
  const [cityQuery, setCityQuery] = useQueryParam('city', StringParam)
  const [listData, setListData]: any = useState([])

  if (cityQuery) {
    cityList.push(cityQuery.toString())
  }

  const getListData = (city: CityName | string) => {
    ScenicSpot.getByCityName(city).then((resJson) => {
      setListData(resJson)
      apiTimes++
    })
  }

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
        <Link to="{./}">首頁</Link>
        <ChevronRightIcon className="h-4 w-4" />
        <Link to="{./}">城市</Link>
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
            <input className="h-full w-full p-5" placeholder="地點...博物館...旅遊城市"></input>
            <button className="btn-green w-[170px]" onClick={() => getListData(CityName.Taipei)}>
              搜尋 <ChevronRightIcon className="h-10 w-10" />
            </button>
          </div>

          <small> {listData.length} 項景點</small>
          {listData &&
            listData.map((item: TScenicSpot) => (
              <div key={item.ID} className="flex flex-row">
                <div>
                  <img src={item.Picture.PictureUrl1} />
                </div>
                <div>
                  <h1>{item.Name}</h1>
                  <small>{item.Description}</small>
                  <Link to={`/detail/${item.ID}`}>
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
