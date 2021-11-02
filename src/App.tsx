import { ReactChild, ReactFragment, ReactPortal, useEffect, useState } from 'react'
import { ScenicSpot } from '@/api/index'
import { CityName, ScenicSpot as TScenicSpot } from '@/types'
import { always, identity, map, memoizeWith, tap } from 'ramda'
import './App.css'

let apiTimes = 0

function App() {
  const [cityData, setCityData]: any = useState()

  //要用此操作涵式去改變狀態
  // const getAllCountries = () => {
  //   // Fetch from API to get Date back
  //   ScenicSpot.getAll().then((data) => setData(data))
  // }
  // getAllCountries()

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
    <div className="App">
      <button onClick={() => getByCity(CityName.Taipei)}>get api</button>
      {cityData &&
        cityData.map((item: TScenicSpot) => (
          <div key={item.ID}>
            {item.Name}
            {item.DescriptionDetail}
            {item.Description}
          </div>
        ))}
    </div>
  )
}

export default App
