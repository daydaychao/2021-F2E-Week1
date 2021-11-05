import { ScenicSpot as TScenicSpot, CityName } from '@/types'
import { always, identity, map, memoizeWith, tap } from 'ramda'

const HOST = 'https://ptx.transportdata.tw/MOTC/v2/'
const urlScenicSpot = 'Tourism/ScenicSpot/'

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

function API(endpoint: string) {
  return String(new globalThis.URL(endpoint, HOST))
}

async function GET(endpoint: string): Promise<any> {
  return fetch(API(endpoint))
    .then((res) => res.json())
    .then((resJson) => resJson.map(narrowing, resJson))
    .then(tap(console.log))
}

export const ScenicSpot = {
  getAll: () => GET(`${urlScenicSpot}/`),
  getByCityName: (cityName: CityName | string) => GET(`${urlScenicSpot}${cityName}`)
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
