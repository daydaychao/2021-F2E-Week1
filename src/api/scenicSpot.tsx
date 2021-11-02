import { ScenicSpot as TScenicSpot, CityName } from '@/types'
import { always, identity, map, memoizeWith, tap } from 'ramda'

const HOST = 'https://ptx.transportdata.tw/MOTC/v2/'
const urlScenicSpot = 'Tourism/ScenicSpot/'

function API(endpoint: string) {
  return String(new globalThis.URL(endpoint, HOST))
}

async function get(endpoint: string): Promise<any> {
  return fetch(API(endpoint)).then((res) => res.json())
  // .then(tap(console.log))
}

export const ScenicSpot = {
  getAll: () => get(`${urlScenicSpot}/`),
  getByCityName: (cityName: CityName) => get(`${urlScenicSpot}${cityName}`)
}
