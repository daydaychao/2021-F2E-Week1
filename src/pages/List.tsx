import { ReactChild, ReactFragment, ReactPortal, useEffect, useState } from 'react'
import { always, identity, map, memoizeWith, tap } from 'ramda'
import { ScenicSpot } from '@/api/index'
import { CityName, ScenicSpot as TScenicSpot } from '@/types'
import { useLocation, useParams } from 'react-router-dom'

let apiTimes = 0
type params = {
  cityName: string
}
export function List() {
  const { cityName }: params = useParams()
  const [cityData, setCityData]: any = useState()

  const getCityData = (city: CityName) => {
    ScenicSpot.getByCityName(city).then((resJson) => {
      let narrowingData = map<any, TScenicSpot>(narrowing, resJson)
      setCityData(narrowingData)
      apiTimes++
    })
  }

  function narrowing(item: TScenicSpot) {
    return {
      ID: item.ID,
      Name: item.Name,
      DescriptionDetail: item.DescriptionDetail,
      Description: item.Description
    }
  }

  const log = {
    useLocation: useLocation(),
    useParams: useParams(),
    cityName: cityName
  }
  useEffect(() => {
    console.table(log)
  }, [log])

  return (
    <>
      <button type="button" className="bg-green-light" onClick={() => getCityData(CityName.Taipei)}>
        get api
      </button>
      {cityData &&
        cityData.map((item: TScenicSpot) => (
          <div key={item.ID}>
            {item.Name}
            {item.DescriptionDetail}
            {item.Description}
          </div>
        ))}
    </>
  )
}
