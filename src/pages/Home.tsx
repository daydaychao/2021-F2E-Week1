import { ReactChild, ReactFragment, ReactPortal, useEffect, useState } from 'react'
import { always, identity, map, memoizeWith, tap } from 'ramda'
import { ScenicSpot } from '@/api/index'
import { CityName, ScenicSpot as TScenicSpot } from '@/types'

let apiTimes = 0

export function Home() {
  const [cityData, setCityData]: any = useState()

  //要用此操作涵式去改變狀態
  // const getAllCountries = () => {
  //   // Fetch from API to get Date back
  //   ScenicSpot.getAll().then((data) => setData(data))
  // }
  // getAllCountries()

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

  return <></>
}
