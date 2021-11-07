import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { useQueryParam, StringParam } from 'use-query-params'
import { always, identity, map, memoizeWith, tap } from 'ramda'
import { CityName, ScenicSpot as TScenicSpot } from '@/types'
import { ScenicSpot } from '@/api/index'
import { getCityNameZhTW, getCityNameEng, removeFromArray } from '@/tools'
import { Checkbox } from '@/components/ui/'

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
      <section className="text-sm my-7 flex flex-row items-center">
        <Link to="home">首頁</Link>
        <ChevronRightIcon className="h-4 w-4" />
        <Link to="home">城市</Link>
        <ChevronRightIcon className="h-4 w-4" />
        景點
      </section>

      <section className="flex flex-col md:flex-row">
        {/* 左邊 */}
        <article className="w-full hidden md:block w-3/12 inline-flex flex-shrink-0 flex-col">
          <h1 className="text-xl md:text-xl font-bold mb-3.5">篩選條件</h1>
          <h4 className="text-sm md:text-sm font-black mb-2">北部</h4>
          {citiesZhTW.map((cityName: string, index) => (
            <Checkbox onChange={handleChange} isChecked={citiesEng[index] === cityName} key={index} name={citiesEng[index]} text={cityName} />
          ))}
        </article>
        {/* 右邊 */}
        <article className="w-full md:w-9/12 inline-flex flex-col">
          <div className="flex flex-row mb-7 items-center bg-white pl-4 h-[50px] border-black border-2 md:h-[75px] xl:w-3/4">
            <SearchIcon className="h-10 w-10" />
            <input className="h-full w-full p-5" placeholder="地點...博物館...旅遊城市"></input>
            {/* <button className="btn-green w-[170px] h-full rounded-none" onClick={() => getListData(CityName.Taipei)}>
              搜尋
            </button> */}
          </div>

          <div className="flex justify-between">
            <small className="my-4"> {listData.length} 項景點</small>
            <button className="w-[120px] mb-2.5 rounded-none bg-gray-300 sm:hidden font-bold" onClick={() => getListData(CityName.Taipei)}>
              <ChevronRightIcon className="h-5 w-5 inline-block items-center" />
              篩選條件
            </button>
          </div>

          {listData &&
            listData.map((item: TScenicSpot) => (
              <div key={item.ID} className="flex flex-row overflow-hidden border rounded-md pr-9 h-60 mb-4 xl:w-3/4">
                <div className="overflow-hidden min-w-[110px] relative w-2/5">
                  <img className="object-cover absolute top-50% left-50% block min-w-full min-h-full transform translate-x-50 translate-y-50" src={item.Picture.PictureUrl1} />
                </div>
                <div className="py-6 flex flex-col justify-between ml-5 font-bold w-3/5 relative md:w-3/5 xl:w-4/5">
                  <h3 className="text-sm">基隆</h3>
                  <h1 className="mt-0.5">{item.Name}</h1>
                  <small className="text-sm mt-4 font-normal desText">{item.DescriptionDetail}</small>
                  <Link to={`scenicSpot/${item.ID}`} className="flex justify-end mt-3">
                    <button className="w-40 bg-white border border_g text-lg font-bold inline-block px-8 py-2">
                      詳細介紹
                      <ChevronRightIcon className="hidden h-5 w-5 inline-block align-text-bottom md:inline-block" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
        </article>
      </section>
    </>
  )
}
