import { ScenicSpot as TScenicSpot, CityName } from '@/types'
import { always, identity, map, memoizeWith, tap } from 'ramda'

const HOST = 'https://ptx.transportdata.tw/MOTC/v2/'
const urlScenicSpot = 'Tourism/ScenicSpot/'

function API(endpoint: string) {
  return String(new globalThis.URL(endpoint, HOST))
}

async function GET(endpoint: string): Promise<any> {
  return fetch(API(endpoint))
    .then((res) => res.json())
    .then(tap(console.log))
}

export const ScenicSpot = {
  getAll: () => GET(`${urlScenicSpot}/`),
  getByCityName: (cityName: CityName) => GET(`${urlScenicSpot}${cityName}`)
}

// NOTE RESTFUL api 說明
// GET 取
// POST 新增
// PATCH 更新
// DELETE 刪除
//
// fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Taipei`)
//   .then((response) => response.json())
//   .then((data) => console.log('fetch', data))
//   .catch((err) => {
//     console.error(err)
//   })
