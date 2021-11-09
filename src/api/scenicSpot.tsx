import { ScenicSpot as TScenicSpot, CityName } from '@/types'
import { always, identity, map, memoizeWith, tap } from 'ramda'
import jsSHA from 'jssha'

const HOST = 'https://ptx.transportdata.tw/MOTC/v2/'
const urlScenicSpot = 'Tourism/ScenicSpot/'

function getAuthorizationHeader() {
  //  填入自己 ID、KEY 開始

  let AppID = 'bcee97e768f0431784373e00f3539404'
  let AppKey = 'bAY5MKsU_isyBjPsnFHcHlJgd1k'
  //  填入自己 ID、KEY 結束
  let GMTString = new Date().toUTCString()
  let ShaObj = new jsSHA('SHA-1', 'TEXT')
  ShaObj.setHMACKey(AppKey, 'TEXT')
  ShaObj.update('x-date: ' + GMTString)
  let HMAC = ShaObj.getHMAC('B64')
  let Authorization = 'hmac username="' + AppID + '", algorithm="hmac-sha1", headers="x-date", signature="' + HMAC + '"'
  return { Authorization: Authorization, 'X-Date': GMTString }
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

function API(endpoint: string) {
  return String(new globalThis.URL(endpoint, HOST))
}

async function GET(endpoint: string): Promise<any> {
  return fetch(API(endpoint), {
    method: 'GET',
    headers: getAuthorizationHeader()
  })
    .then((res) => res.json())
    .then((resJson) => resJson.map(narrowing, resJson))
    .then(tap(console.log))
}
const filter = '?$filter=Picture%2FPictureUrl1%20ne%20null%20&$format=JSON'
export const ScenicSpot = {
  getAll: () => GET(`${urlScenicSpot}${filter}`),
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
