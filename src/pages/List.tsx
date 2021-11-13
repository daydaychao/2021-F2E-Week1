import React, { useEffect, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { useQueryParam, StringParam } from 'use-query-params'
import { always, identity, includes, map, memoizeWith, tap, find } from 'ramda'
import { CityName, ScenicSpot as TScenicSpot, Specials } from '@/types'
import { ScenicSpot } from '@/api/index'
import { getCityNameZhTW, getCityNameEng, removeFromArray, filterByText, filterByCities, filterBySpecials, changeName, getEnumValues, getEnumKeys } from '@/tools'
import { CheckboxBtn } from '@/components/ui/'
import useStore from '@/store'
import debounce from 'lodash/debounce'

let searchTimer = false
let renderTime = 0
let apiTimes = 0
let apiAllDataLoading = false
let apiCityDataLoading = false

const citiesEng = getCityNameEng()
const citiesZhTW = getCityNameZhTW()
const specialsEng = getEnumKeys(Specials)
const specialsZhTW = getEnumValues(Specials)

export function List() {
  // 路徑參數
  const [cityQuery, setCityQuery] = useQueryParam('city', StringParam)
  const [textQuery, setTextQuery] = useQueryParam('text', StringParam)
  const [specialQuery, setSpecialQuery] = useQueryParam('special', StringParam)

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

      // 城市
      if (!filterCities.includes('allCity')) {
        list = await filterByCities(filterCities, list)
      }

      // 文字
      list = await filterByText(filterSearchText, list)

      // 景點類別
      list = await filterBySpecials(filterSpecials, list)

      // 設定資料到filterList(dom渲染用)
      console.log('篩選更新中 list', list)
      // updateParams()
      setFilterData(list)

      searchTimer = true
    }
    setTimeout(() => {
      searchTimer = false
    }, 1000)
  }

  const debouncedFilter = useCallback(
    debounce((text) => {
      console.log('%c debounce', 'color:orange;background:black;padding:2px 10px')
      setFilterSearchText(text)
    }, 800),
    []
  )

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedFilter(e.target.value)
  }

  const handleCheckboxBtn = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 全部城市
    if (e.target.name === 'allCity') {
      if (filterCities.length === 1 && filterCities[0] === 'allCity') {
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

  //景點類別
  const handleSpecialBtn = (e: React.ChangeEvent<HTMLInputElement>) => {
    // TODO
    if (e.target.checked) {
      setFilterSpecials((preValue: string) => [...preValue, e.target.name])
    } else {
      setFilterSpecials(removeFromArray(e.target.name, filterSpecials))
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
    if (renderTime > 0) {
      setCityQuery(filterCities)
      setTextQuery(filterSearchText)
      setSpecialQuery(filterSpecials)
      filterController()
    }
  }, [filterSearchText, filterCities, filterSpecials])

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

  // html 城市類別
  let htmlCityButton = (index: number, cityName: string) => <CheckboxBtn onChange={handleCheckboxBtn} key={index} id={citiesEng[index]} name={citiesEng[index]} text={cityName} />
  // <Checkbox onChange={handleChange} isChecked={citiesEng[index] === cityName} key={index} name={citiesEng[index]} text={cityName} />

  // html 熱門類別
  let htmlSpecialButton = (index: number, special: string) => <CheckboxBtn onChange={handleSpecialBtn} key={index} id={specialsEng[index]} name={special} text={special} />

  renderTime += 1

  return (
    <>
      <section className="flex flex-row items-center my-4">
        <Link to="/home">首頁</Link>
        <ChevronRightIcon className="h-4 w-4" />
        <Link to="/home">城市</Link>
        <ChevronRightIcon className="h-4 w-4" />
        <span className="text-gray-400">景點</span>
      </section>

      <section className="flex flex-col md:flex-row">
        {/* 篩選條件 */}
        <article className="filter-wrapper">
          <h1 className="text-xl md:text-xl font-bold mb-3.5">篩選條件</h1>

          <CheckboxBtn onChange={handleCheckboxBtn} id="allCity" name="allCity" text="全台景點" />

          <div className="h-4"></div>
          <h4 className="text-sm md:text-sm font-black mb-2">北部</h4>
          <div className="checkbox-btn-wrapper">
            {citiesZhTW.map((cityName: string, index) => {
              if (index < 4) return htmlCityButton(index, cityName)
            })}
          </div>

          <h4 className="text-sm md:text-sm font-black mb-2">中部</h4>
          <div className="checkbox-btn-wrapper">
            {citiesZhTW.map((cityName: string, index) => {
              if (index > 5 && index <= 13) return htmlCityButton(index, cityName)
            })}
          </div>

          <h4 className="text-sm md:text-sm font-black mb-2">南部</h4>
          <div className="checkbox-btn-wrapper">
            {citiesZhTW.map((cityName: string, index) => {
              if (index > 13 && index <= 16) return htmlCityButton(index, cityName)
            })}
          </div>

          <h4 className="text-sm md:text-sm font-black mb-2">外島</h4>
          <div className="checkbox-btn-wrapper">
            {citiesZhTW.map((cityName: string, index) => {
              if (index > 16 && index <= 19) return htmlCityButton(index, cityName)
            })}
          </div>

          <h4 className="text-sm md:text-sm font-black mb-2">景點類別</h4>
          <div className="checkbox-btn-wrapper">
            {specialsZhTW.map((special: string, index: number) => {
              return htmlSpecialButton(index, special)
            })}
          </div>
        </article>

        {/* 桌機空白 */}
        <article className="sm:hidden md:inline-flex md:w-1/12"></article>

        {/* 右邊 */}
        <article className="md:inline-flex flex-col w-full p-5">
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
              <div key={item.ID} className="flex flex-row overflow-hidden bg-white border rounded-[10px] pr-9 h-60 mb-4 xl:w-3/4">
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
