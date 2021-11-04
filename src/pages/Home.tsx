import { ReactChild, ReactFragment, ReactPortal, useEffect, useState } from 'react'
import { always, identity, map, memoizeWith, tap } from 'ramda'
import { ScenicSpot } from '@/api/index'
import { CityNameZhTW } from '@/types'
import { CityName, ScenicSpot as TScenicSpot } from '@/types'
import { Link, useLocation } from 'react-router-dom'
import { url } from 'inspector'

const getCityNameEng = () => {
  return Object.values(CityName)
}
const getCityNameZhTW = () => {
  return Object.values(CityNameZhTW)
}

const getCityImg = () => {
  return Object.keys(CityNameZhTW).map((img) => `../public/images/${img}.jpg`)
}

export function Home() {
  let citiesEng = getCityNameEng()
  let citiesZhTW = getCityNameZhTW()
  let images = getCityImg()

  const cssCard = 'bg-gray-300 bg-cover h-[220px] relative text-center overflow-hidden hover:cursor-pointer'
  const cssCity = 'text-white absolute bottom-2 left-2'

  return (
    <>
      <h1 className="text-xl md:text-2xl font-bold mb-4">熱門景點</h1>
      <div className="grid grid-col md:grid-cols-3 gap-4 ">
        {citiesZhTW.map((city, index) => (
          <Link to={'scenicSpot?city=' + citiesEng[index]}>
            <div key={index} className={cssCard} style={{ backgroundImage: `url(${images[index]})` }}>
              <label className={cssCity}>{city}</label>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
