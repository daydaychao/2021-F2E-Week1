import { ReactChild, ReactFragment, ReactPortal, useEffect, useState } from 'react'
import { always, identity, map, memoizeWith, tap } from 'ramda'
import { ScenicSpot } from '@/api/index'
import { CityName, ScenicSpot as TScenicSpot } from '@/types'
import { Link, useLocation, useParams } from 'react-router-dom'
import { SearchIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { getCityNameZhTW } from '@/tools'
import { Checkbox } from '@/components/ui/'

let apiTimes = 0
type paramsType = {
  cityName: string
}
export function List() {
  const { cityName }: paramsType = useParams()
  const [cityData, setCityData]: any = useState()

  const getCityData = (city: CityName) => {
    ScenicSpot.getByCityName(city).then((resJson) => {
      let narrowingData = map(narrowing, resJson)
      setCityData(narrowingData)
      apiTimes++
    })
  }

  function narrowing(item: TScenicSpot) {
    return {
      ID: item.ID,
      City: item.City,
      Name: item.Name,
      DescriptionDetail: item.DescriptionDetail,
      Description: item.Description,
      Picture: item.Picture
    }
  }

  const log = {
    useLocation: useLocation(),
    useParams: useParams(),
    cityName: cityName
  }
  useEffect(() => {
    console.log('cityData:', cityData)
    console.table(log)
  }, [cityData])

  let checkBoxName = getCityNameZhTW()
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
          {checkBoxName.map((item: string, index) => (
            <Checkbox key={index} name={`checkbox-${index}`} text={item} />
          ))}
        </article>
        {/* 右邊 */}
        <article className="inline-flex flex-col border">
          <div className="flex flex-row items-center bg-white px-2 h-[50px] md:h-[75px] w-3/4 rounded-lg mb-4 border-2 md:border-4 border-black">
            <SearchIcon className="h-10 w-10" />
            <input className="h-full w-full p-5" placeholder="地點...博物館...旅遊城市"></input>
            <button className="btn-green w-[170px]" onClick={() => getCityData(CityName.Taipei)}>
              搜尋 <ChevronRightIcon className="h-10 w-10" />
            </button>
          </div>

          <small> {cityData.length} 項景點</small>
          {cityData &&
            cityData.map((item: TScenicSpot) => (
              <div key={item.ID}>
                <div>
                  <img src={item.Picture.PictureUrl1} />
                </div>
                {item.Name}
                {item.DescriptionDetail}
                <button className="btn-green">詳細介紹</button>
              </div>
            ))}
        </article>
      </section>
    </>
  )
}
