export type ScenicSpot = {
  ID: 'string' | undefined
  Name: 'string' | undefined
  DescriptionDetail: 'string' | undefined
  Description: 'string' | undefined
  Phone: 'string' | undefined
  Address: 'string' | undefined
  ZipCode: 'string' | undefined
  TravelInfo: 'string' | undefined
  OpenTime: 'string' | undefined
  Picture: {
    PictureUrl1?: 'string' | undefined
    PictureDescription1: 'string' | undefined
    PictureUrl2: 'string' | undefined
    PictureDescription2: 'string' | undefined
    PictureUrl3: 'string' | undefined
    PictureDescription3: 'string' | undefined
  }
  MapUrl: 'string' | undefined
  Position: {
    PositionLon: 0 | undefined
    PositionLat: 0 | undefined
    GeoHash: 'string' | undefined
  }
  Class1: 'string' | undefined
  Class2: 'string' | undefined
  Class3: 'string' | undefined
  Level: 'string' | undefined
  WebsiteUrl: 'string' | undefined
  ParkingInfo: 'string' | undefined
  ParkingPosition: {
    PositionLon: number | undefined
    PositionLat: number | undefined
    GeoHash: 'string' | undefined
  }
  TicketInfo: 'string' | undefined
  Remarks: 'string' | undefined
  Keyword: 'string' | undefined
  City: 'string' | undefined
  SrcUpdateTime: 'string' | undefined
  UpdateTime: 'string' | undefined
}

export enum CityName {
  Taipei = 'Taipei',
  NewTaipei = 'NewTaipei',
  HsinchuCounty = 'HsinchuCounty',
  Keelung = 'Keelung',
  Taoyuan = 'Taoyuan',
  Hsinchu = 'Hsinchu',
  YilanCounty = 'YilanCounty',
  MiaoliCounty = 'MiaoliCounty',
  Taichung = 'Taichung',
  ChanghuaCounty = 'ChanghuaCounty',
  NantouCounty = 'NantouCounty',
  YunlinCounty = 'YunlinCounty',
  Chiayi = 'Chiayi',
  ChiayiCounty = 'ChiayiCounty',
  Tainan = 'Tainan',
  Kaohsiung = 'Kaohsiung',
  PingtungCounty = 'PingtungCounty',
  PenghuCounty = 'PenghuCounty',
  TaitungCounty = 'TaitungCounty',
  HualienCounty = 'HualienCounty',
  KinmenCounty = 'KinmenCounty',
  LienchiangCounty = 'LienchiangCounty'
}
export enum CityNameZhTW {
  Taipei = '臺北市',
  NewTaipei = '新北市',
  HsinchuCounty = '新竹縣',
  Keelung = '基隆市',
  Taoyuan = '桃園市',
  Hsinchu = '新竹市',
  YilanCounty = '宜蘭縣',
  MiaoliCounty = '苗栗縣',
  Taichung = '臺中市',
  ChanghuaCounty = '彰化縣',
  NantouCounty = '南投縣',
  YunlinCounty = '雲林縣',
  Chiayi = '嘉義市',
  ChiayiCounty = '嘉義縣',
  Tainan = '臺南市',
  Kaohsiung = '高雄市',
  PingtungCounty = '屏東縣',
  PenghuCounty = '澎湖縣',
  TaitungCounty = '臺東縣',
  HualienCounty = '花蓮縣',
  KinmenCounty = '金門縣',
  LienchiangCounty = '連江縣'
}
