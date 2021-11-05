import React, { ReactChild, ReactFragment, ReactPortal, useEffect, useState } from 'react'
import { always, identity, map, memoizeWith, tap } from 'ramda'
import { ScenicSpot } from '@/api/index'
import { CityName, ScenicSpot as TScenicSpot } from '@/types'
import { Link, useLocation, useParams } from 'react-router-dom'
import { SearchIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { getCityNameZhTW, getCityNameEng } from '@/tools'
import { Checkbox } from '@/components/ui/'
import { useQueryParam, NumberParam, StringParam } from 'use-query-params'

const removeFromArray = (array: string[], item: string) => array.filter((v: string) => v !== item)
const arrayToQueryParam = (array: string[]) => {
  return array.toString()
}

function narrowing(item: TScenicSpot) {
  return {
    ID: item.ID,
    City: item.City,
    Name: item.Name,
    Phone: item.Phone,
    Address: item.Address,
    ZipCode: item.ZipCode,
    DescriptionDetail: item.DescriptionDetail,
    Description: item.Description,
    TravelInfo: item.TravelInfo,
    OpenTime: item.OpenTime,
    Picture: item.Picture,
    MapUrl: item.MapUrl,
    Position: item.Position,
    Class1: item.Class1,
    Class2: item.Class2,
    Class3: item.Class3,
    Level: item.Level,
    WebsiteUrl: item.WebsiteUrl,
    ParkingInfo: item.ParkingInfo,
    ParkingPosition: item.ParkingPosition,
    TicketInfo: item.TicketInfo,
    Remarks: item.Remarks,
    Keyword: item.Keyword
  }
}

let apiTimes = 0
let cityList: string[] = []

export function List() {
  const [cityQuery, setCityQuery] = useQueryParam('city', StringParam)

  const [listData, setListData]: any = useState([])

  const getListData = (city: CityName) => {
    ScenicSpot.getByCityName(city).then((resJson) => {
      let narrowingData = map(narrowing, resJson)
      setListData(narrowingData)
      apiTimes++
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name)
    if (cityList.includes(e.target.name)) {
      console.log('include')
      cityList = removeFromArray(cityList, e.target.name)
      setCityQuery(arrayToQueryParam(cityList))
      return
    }
    console.log('not include')
    cityList.push(e.target.name)
    setCityQuery(arrayToQueryParam(cityList))
  }

  // const log = {
  //   useLocation: useLocation()
  // }
  useEffect(() => {
    console.log(cityList)
  }, [cityQuery])

  let citiesEng = getCityNameEng()
  let citiesZhTW = getCityNameZhTW()

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
