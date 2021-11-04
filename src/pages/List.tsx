import { ReactChild, ReactFragment, ReactPortal, useEffect, useState } from 'react'
import { always, identity, map, memoizeWith, tap } from 'ramda'
import { ScenicSpot } from '@/api/index'
import { CityName, ScenicSpot as TScenicSpot } from '@/types'

let apiTimes = 0

export function List() {
  const [cityData, setCityData]: any = useState()

  const getCityData = (city: CityName) => {
    ScenicSpot.getByCityName(city).then((resJson) => {
      let narrowingData = map<any, TScenicSpot>(resJson, narrowing)
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

  useEffect(() => {
    console.log('cityData', cityData)
  }, [cityData])

  return (
    <>
      home
      <button onClick={() => getCityData(CityName.Taipei)}>get api</button>
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
