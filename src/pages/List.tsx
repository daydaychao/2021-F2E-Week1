import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { useQueryParam, StringParam } from 'use-query-params'
import { always, identity, includes, map, memoizeWith, tap, find } from 'ramda'
import { CityName, ScenicSpot as TScenicSpot } from '@/types'
import { ScenicSpot } from '@/api/index'
import { getCityNameZhTW, getCityNameEng, removeFromArray, filterByText, filterByCities, filterBySpecials, changeName } from '@/tools'
import { CheckboxBtn } from '@/components/ui/'
import useStore from '@/store'

let searchTimer = false
let renderTime = 0
let apiTimes = 0
let apiAllDataLoading = false
let apiCityDataLoading = false

const citiesEng = getCityNameEng()
const citiesZhTW = getCityNameZhTW()

export function List() {
  // 路徑參數
  const [cityQuery, setCityQuery] = useQueryParam('city', StringParam)

  // 景點資料
  const getAll = useStore((state) => state.getScenicSpotsAll)
  const allLocation = useStore((state) => state.scenicSpotsAll)
  const [listData, setListData]: any = useState([]) // 資料庫
  const [filterData, setFilterData]: any[] = useState([]) // 篩選過資料庫後,dom渲染用

  //篩選條件
  const [filterSearchText, setFilterSearchText]: any[] = useState([])
  const [filterCities, setFilterCities]: any[] = useState([])
  const [filterSpecials, setFilterSpecials]: any[] = useState([])

  // api 取得單一城市資料
  const getListData = (city: CityName | string) => {
    ScenicSpot.getByCityName(city).then((resJson) => {
      setListData(resJson)
      apiTimes += 1
    })
  }

  const filterController = async () => {
    if (!searchTimer) {
      console.log('%c文字', 'color:orange;background:black;padding:2px 10px', filterSearchText)
      console.log('%c城市', 'color:orange;background:black;padding:2px 10px', filterCities)
      console.log('%c特別', 'color:orange;background:black;padding:2px 10px', filterSpecials)

      let list
      if (allLocation.length > 0) {
        list = map((x) => x, allLocation)
      } else {
        list = map((x) => x, listData)
      }

      // TODO 城市篩選
      if (!filterCities.includes('allCity')) {
        list = await filterByCities(filterCities, list)
      }

      // TODO 文字篩選
      list = await filterByText(filterSearchText, list)

      // TODO 特殊篩選
      // list = await filterBySpecials(filterSpecials, list)

      // 設定資料到filterList(dom渲染用)
      console.log('篩選更新中 list', list)
      setFilterData(list)

      searchTimer = true
    }
    setTimeout(() => {
      searchTimer = false
    }, 1000)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterSearchText(e.target.value)
  }

  const handleCheckboxBtn = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 全部城市
    if (e.target.name === 'allCity') {
      if (filterCities.length === 1 && filterCities[0] === 'allCity' && !e.target.checked) {
        e.target.checked = true
      }
      filterCities.map((city: string) => {
        document.getElementById(city)?.click()
      })
      setFilterCities(['allCity'])
      return
    }

    // 篩選城市
    else if (e.target.name != 'allCity') {
      //移除全部
      if (filterCities.includes('allCity')) {
        const btnAll = document.getElementById('allCity') as HTMLInputElement
        btnAll.checked = false
        setFilterCities(removeFromArray('allCity', filterCities))
      }

      if (e.target.checked) {
        setFilterCities((preValue: string) => [...preValue, e.target.name])
      } else {
        setFilterCities(removeFromArray(e.target.name, filterCities))
      }
    }
  }

  const checkData = async () => {
    if (!apiCityDataLoading) {
      if (listData.length === 0) {
        console.log('資料初始化...')
        apiCityDataLoading = true
        await getListData('Taipei')
        apiCityDataLoading = false
      }
    }

    if (!apiAllDataLoading) {
      if (allLocation.length === 0) {
        if (includes('allCity', filterCities)) {
          console.log('取得全部資料中...')
          apiAllDataLoading = true
          await await getAll()
          apiAllDataLoading = false
        }
      }
    }
  }

  if (renderTime == 0) {
    if (cityQuery) filterCities.push(cityQuery)
    checkData()
  }

  // watch 篩選
  useEffect(() => {
    checkData()
    console.log('renderTime', renderTime)
    if (renderTime > 0) {
      setCityQuery(filterCities)
      filterController()
    }
  }, [filterSearchText, filterCities])

  // watch state全台景點資料庫
  useEffect(() => {
    if (allLocation.length > 0) {
      setListData(allLocation)
    }
  }, [allLocation])

  // watch 景點資料庫
  useEffect(() => {
    setFilterData(listData)
  }, [listData])

  // html 左邊按鈕
  let htmlCityButton = (index: number, cityName: string) => <CheckboxBtn onChange={handleCheckboxBtn} key={index} name={citiesEng[index]} text={cityName} />
  // <Checkbox onChange={handleChange} isChecked={citiesEng[index] === cityName} key={index} name={citiesEng[index]} text={cityName} />

  renderTime += 1

  return (
    <>
      <section className="text-sm my-7 flex flex-row items-center">
        <Link to="/home">首頁</Link>
        <ChevronRightIcon className="h-4 w-4" />
        <Link to="/home">城市</Link>
        <ChevronRightIcon className="h-4 w-4" />
        景點
      </section>

      <section className="flex flex-col md:flex-row">
        {/* 左邊 */}

        <article className="w-full hidden md:block w-3/12 inline-flex flex-shrink-0 flex-col">
          <h1 className="text-xl md:text-xl font-bold mb-3.5">篩選條件</h1>

          <CheckboxBtn onChange={handleCheckboxBtn} name="allCity" text="全部" />

          <h4 className="text-sm md:text-sm font-black mb-2">北部</h4>
          {citiesZhTW.map((cityName: string, index) => {
            if (index < 4) return htmlCityButton(index, cityName)
          })}

          <h4 className="text-sm md:text-sm font-black mb-2">中部</h4>
          {citiesZhTW.map((cityName: string, index) => {
            if (index > 5 && index <= 13) return htmlCityButton(index, cityName)
          })}

          <h4 className="text-sm md:text-sm font-black mb-2">南部</h4>
          {citiesZhTW.map((cityName: string, index) => {
            if (index > 13 && index <= 16) return htmlCityButton(index, cityName)
          })}

          <h4 className="text-sm md:text-sm font-black mb-2">外島</h4>
          {citiesZhTW.map((cityName: string, index) => {
            if (index > 16 && index <= 19) return htmlCityButton(index, cityName)
          })}
        </article>
        {/* 右邊 */}
        <article className="w-full md:w-9/12 inline-flex flex-col">
          <div className="flex flex-row mb-7 items-center bg-white pl-4 h-[50px] border-black border-2 md:h-[75px] xl:w-3/4">
            <SearchIcon className="h-10 w-10" />
            <input className="h-full w-full p-5" placeholder="地點...博物館...旅遊城市" onChange={handleSearch}></input>
          </div>

          <div className="flex justify-between">
            <small className="my-4"> {filterData.length} 項景點</small>
            <button className="w-[120px] mb-2.5 rounded-none bg-gray-300 sm:hidden font-bold">
              <ChevronRightIcon className="h-5 w-5 inline-block items-center" />
              篩選條件
            </button>
          </div>
          {filterData &&
            filterData.map((item: TScenicSpot) => (
              <div key={item.ID} className="flex flex-row overflow-hidden border rounded-md pr-9 h-60 mb-4 xl:w-3/4">
                <div className="overflow-hidden min-w-[110px] relative w-2/5">
                  <img className="object-cover absolute top-50% left-50% block min-w-full min-h-full transform translate-x-50 translate-y-50" src={item.Picture.PictureUrl1} />
                </div>
                <div className="py-6 flex flex-col justify-between ml-5 font-bold w-3/5 relative md:w-3/5 xl:w-4/5">
                  <h3 className="text-sm">{item.City}</h3>
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
