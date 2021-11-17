import React, { useEffect, useCallback, useState, SyntheticEvent, useRef } from 'react'
import { Link } from 'react-router-dom'
import { SearchIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { FilterIcon } from '@heroicons/react/outline'
import { useQueryParam, StringParam } from 'use-query-params'
import { always, identity, includes, map, memoizeWith, tap, find } from 'ramda'
import { CityName, ScenicSpot as TScenicSpot, Specials } from '@/types'
import { ScenicSpot } from '@/api/index'
import { getCityNameZhTW, getCityNameEng, removeFromArray, filterByText, filterByCities, filterBySpecials, changeName, getEnumValues, getEnumKeys } from '@/tools'
import { CheckboxBtn, Spin } from '@/components/ui/'
import useStore from '@/store'
import debounce from 'lodash/debounce'
import errorImg from '@/assets/images/nopic.jpg'
import { render } from 'react-dom'
import ScrollToTop from '@/components/ScrollToTop'

let renderTime = 0
let apiTimes = 0
let apiAllDataLoading = false
let apiCityDataLoading = false

// arrays
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

  // 篩選條件
  const [filterSearchText, setFilterSearchText]: any[] = useState([])
  const [filterCities, setFilterCities]: any[] = useState([])
  const [filterSpecials, setFilterSpecials]: any[] = useState([])

  // loading
  const [loading, setLoading] = useState(true)

  // 動態載入資料
  // const [renderData, setRenderData] = useState([])
  // const containerRef = useRef(null)
  const [isShowFilter, setIsShowFilter] = useState(false)
  const [isScrollingDown, setIsScrollingDown] = useState(false)

  // Filters ===================================================

  const debounceFn = useCallback(
    debounce((callback) => {
      callback()
    }, 800),
    []
  )

  // 1文字搜尋
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text: string = e.target.value
    debounceFn(async () => {
      setLoading(true)
      console.log('%c debounce', 'color:orange;background:black;padding:2px 10px')
      setFilterSearchText(text)
    })
  }

  // 2 城市
  const handleCheckboxBtn = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true)
    console.log('%c handleCheckboxBtn', 'color:orange;background:black;padding:2px 10px')

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

  // 3 特別景點
  const handleSpecialBtn = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true)
    if (e.target.checked && !filterSpecials.includes(e.target.name)) {
      setFilterSpecials((preValue: string) => [...preValue, e.target.name])
    } else {
      setFilterSpecials(removeFromArray(e.target.name, filterSpecials))
    }
  }

  const handleScroll = () => {
    debounceFn(async () => {
      if (window.scrollY >= 500) {
        setIsScrollingDown(true)
        console.log('拉下了')
      } else {
        setIsScrollingDown(false)
        console.log('沒拉下')
      }
    })
  }

  // 管理搜尋條件
  const filterController = async () => {
    console.log('%c文字', 'color:orange;background:black;padding:2px 10px', filterSearchText)
    console.log('%c城市', 'color:orange;background:black;padding:2px 10px', filterCities)
    console.log('%c特別', 'color:orange;background:black;padding:2px 10px', filterSpecials)

    if (allLocation.length == 0 && listData == 0) {
      //NOTE checkData會在去抓一次資料 抓到資料後再來檢查
      console.warn('唉呦bug或斷線 還沒有抓到資料就在篩選了 checkData中...')
      checkData()
      return
    }

    let list

    if (allLocation.length > 0) {
      console.log('allLocation exits')
      list = map((x) => x, allLocation)
    } else if (listData.length > 0) {
      console.log('listData exits')
      list = map((x) => x, listData)
    }
    if (list) {
      // 城市
      if (!filterCities.includes('allCity')) {
        list = await filterByCities(filterCities, list)
      }

      // 文字
      list = await filterByText(filterSearchText, list)

      // 景點類別
      list = await filterBySpecials(filterSpecials, list)

      // 設定資料到filterList(dom渲染用)
      console.log('篩選更新中...')
      setFilterData(list)
    }
  }

  // api 取得單一城市資料
  const getListData = (city: CityName | string) => {
    ScenicSpot.getByCityName(city).then((resJson) => {
      setListData(resJson)
      apiTimes += 1
    })
    return true
  }

  // api 檢查資料庫
  const checkData = async () => {
    if (allLocation.length === 0) {
      if (!apiAllDataLoading) {
        apiAllDataLoading = true
        console.log('取得全部資料中...')
        await getAll()
        apiTimes++
      }
    }

    if (listData == 0) {
      if (!apiCityDataLoading) {
        apiCityDataLoading = true
        if (cityQuery && cityQuery.length == 1) {
          if (cityQuery === 'allCity') {
            return
          }

          console.log(`搜尋${cityQuery}城市資料中...`)
          await getListData(cityQuery)
          apiTimes++
        }
      }
    }
  }

  renderTime += 1 // 跑完了,渲染次數+1
  // console.log('renderTime', renderTime)
  // console.log('apiTimes', apiTimes)

  // useEffect (Watch) ===================================================

  // 篩選 filterSearchText, filterCities, filterSpecials
  useEffect(() => {
    if (renderTime > 0) {
      checkData()
      debounceFn(async () => {
        console.log('%c useEffect: debounce filter', 'color:orange;background:black;padding:2px 10px')
        setCityQuery(filterCities)
        setTextQuery(filterSearchText)
        setSpecialQuery(filterSpecials)
        await filterController()
        setLoading(false)
      })
    }
  }, [filterSearchText, filterCities, filterSpecials])

  // 資料庫有更新時
  useEffect(() => {
    apiCityDataLoading = false
    if (listData.length > 0) {
      filterController()
    }
  }, [listData])

  useEffect(() => {
    apiAllDataLoading = false
    if (allLocation.length > 0) {
      filterController()
    }
  }, [allLocation])

  // useEffect(() => {
  //   if (renderData.length == 0) {
  //     let tmpData = JSON.parse(JSON.stringify(filterData));
  //     setRenderData(tmpData.slice(0, 10));
  //   }
  // }, [filterData])

  // useEffect(() => {
  //   let observer = new IntersectionObserver(() => {
  //     let loadData: any = [];
  //     let counter = 10;

  //     // 每次最多額外加入10筆資料
  //     if (filterData.length != 0) {
  //       while (renderData.length + loadData.length < filterData.length && counter != 0) {
  //         loadData.push(filterData[renderData.length + 10 - counter]);
  //         counter--;
  //       }

  //       setRenderData(renderData.concat(loadData));
  //     }
  //   });

  //   if (containerRef.current) {
  //     observer.observe(containerRef.current);
  //   }
  //   return () => {
  //     if (containerRef.current) {
  //       observer.unobserve(containerRef.current);
  //     }
  //   }
  // }, [containerRef])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    let cityQueryArray = (cityQuery as string).split(',')
    cityQueryArray.map((city: string) => {
      console.log('city:', city)
      document.getElementById(city)?.click()
    })

    if (textQuery) {
      ;(document.getElementById('searchInput') as HTMLInputElement).value = textQuery
    }

    return () => {
      //router離開的時候清空
      renderTime = 0
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // DOM HTML ===================================================

  // 破圖
  const htmlImageError = ({ target }: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const theTarget = target as HTMLInputElement
    theTarget.onerror = null
    theTarget.src = errorImg
  }

  // 城市類別
  const htmlCityButton = (index: number, cityName: string) => <CheckboxBtn onChange={handleCheckboxBtn} key={index} id={citiesEng[index]} name={citiesEng[index]} text={cityName} />

  // 熱門類別
  const htmlSpecialButton = (index: number, special: string) => <CheckboxBtn onChange={handleSpecialBtn} key={index} id={specialsEng[index]} name={special} text={special} />

  return (
    <>
      <ScrollToTop />
      <section className="flex flex-row items-center my-4">
        <Link to="/">首頁</Link>
        <ChevronRightIcon className="h-4 w-4" />
        <Link to="/">城市</Link>
        <ChevronRightIcon className="h-4 w-4" />
        <span className="text-gray-400">景點</span>
      </section>

      <section className="flex flex-col md:flex-row md:justify-between">
        {/* 篩選條件 */}
        <article className={`filter-wrapper ${isShowFilter ? '' : 'hidden'} md:inline-flex `}>
          <div className="flex flex-row justify-between">
            <h1 className="text-xl md:text-xl font-bold mb-3.5">篩選條件</h1>
            <button
              className="md:hidden flex items-center justify-center border h-6 w-6 rounded-full"
              onClick={() => {
                setIsShowFilter(!isShowFilter)
                return null
              }}>
              <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 18 18">
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
              </svg>
            </button>
          </div>

          <CheckboxBtn onChange={handleCheckboxBtn} id="allCity" name="allCity" text="全台景點" />

          <div className="h-4"></div>
          <h4 className="text-sm md:text-sm font-black mb-2">北部</h4>
          <div className="checkbox-btn-wrapper">
            {citiesZhTW.map((cityName: string, index) => {
              if (index <= 4) return htmlCityButton(index, cityName)
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
              if (index > 16 && index <= 21) return htmlCityButton(index, cityName)
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
        <article className="filter-md-spacing"></article>

        {/* 右邊 */}
        <article className="filter-list">
          {isScrollingDown && (
            <section className="fixed top-0 right-0 z-10">
              <button
                className="md:hidden font-bold bg-gray-300 rounded-none align-middle w-[120px] h-[30px] mb-2"
                onClick={() => {
                  setIsShowFilter(!isShowFilter)
                  return null
                }}>
                <FilterIcon className="inline-block items-center font-bold h-4 w-4 mr-2" />
                <small>篩選條件</small>
              </button>
            </section>
          )}
          <section>
            <div className="flex flex-row items-center bg-gray-100 border-black border-2 rounded-md h-[50px] md:h-[75px] mb-4 md:mb-2 pl-4">
              <SearchIcon className="h-10 w-10" />
              <input id="searchInput" className="h-full w-full p-5 bg-gray-100" placeholder="地點...博物館...旅遊城市" onChange={handleSearch}></input>
            </div>
            <div className="flex items-center justify-between md:py-4">
              {loading && (
                <small className="flex flex-row items-end">
                  <Spin />
                  <span>資料讀取中...</span>
                </small>
              )}
              {!loading && <small> {filterData.length} 項景點</small>}
              {!loading && filterData.length === 0 && <small className="text-green-600"> 查無資料,請重新篩選</small>}
              <button
                className="md:hidden font-bold bg-gray-300 rounded-none align-middle w-[120px] h-[30px] mb-2"
                onClick={() => {
                  setIsShowFilter(!isShowFilter)
                  return null
                }}>
                <FilterIcon className="inline-block items-center font-bold h-4 w-4 mr-2" />
                <small>篩選條件</small>
              </button>
            </div>
          </section>

          {filterData &&
            filterData.map((item: TScenicSpot, index: number) => (
              <div key={item.ID} className="relative flex flex-col md:flex-row overflow-hidden bg-white border rounded-[10px] w-full h-[25rem] md:h-60 mb-4 md:pr-9">
                <div className="relative md:overflow-hidden md:min-w-[110px] md:w-2/5">
                  <Link to={`scenicSpot/${item.ID}`}>
                    <img src={item.Picture.PictureUrl1} onError={htmlImageError} className="object-cover absolute top-50% left-50% block min-w-full min-h-full transform translate-x-50 translate-y-50" />
                  </Link>
                </div>
                <div className="absolute md:relative bg-white bottom-0 font-bold flex flex-col justify-between p-4 md:py-6 md:px-4 md:ml-5 w-full md:w-3/5 xl:w-4/5 h-3/8 md:h-auto">
                  {item.City && <h3 className="text-sm">{item.City}</h3>}
                  <h1 className="mt-0.5">{item.Name}</h1>
                  <small className="text-xs md:text-sm mt-1 md:mt-4 font-normal desText">{item.DescriptionDetail}</small>
                  <Link to={`scenicSpot/${item.ID}`} className="flex justify-end mt-3">
                    <button className="inline-flex flex-row place-items-center justify-center bg-white border border-green-light font-bold text-sm md:text-lg w-full md:w-40 px-8 py-2">
                      詳細介紹
                      <ChevronRightIcon className="inline-block align-text-bottom h-4 w-4" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
        </article>
      </section>
      {/* <span ref={containerRef}>aaaaa</span> */}
    </>
  )
}
