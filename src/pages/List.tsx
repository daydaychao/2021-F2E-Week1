import { ReactChild, ReactFragment, ReactPortal, useEffect, useState } from 'react'
import { always, identity, map, memoizeWith, tap } from 'ramda'
import { ScenicSpot } from '@/api/index'
import { CityName, ScenicSpot as TScenicSpot } from '@/types'

let apiTimes = 0

export function List() {
  const [cityData, setCityData]: any = useState()

  const getByCity = (city: CityName) => {
    ScenicSpot.getByCityName(city).then((responseJson) => {
      let narrowingData = map<any, TScenicSpot>(narrowing, responseJson)
      setCityData(narrowingData)
      apiTimes++
    })
  }

  const narrowing = (item: TScenicSpot) => {
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
      <button onClick={() => getByCity(CityName.Taipei)}>get api</button>
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
