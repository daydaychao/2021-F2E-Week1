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
  Kaohsiung = 'Kaohsiung',
  NewTaipei = 'NewTaipei',
  Chiayi = 'Chiayi',
  Taichung = 'Taichung',
  HualienCounty = 'HualienCounty',
  YunlinCounty = 'YunlinCounty',
  PingtungCounty = 'PingtungCounty',
  KinmenCounty = 'KinmenCounty',
  PenghuCounty = 'PenghuCounty',
  YilanCounty = 'YilanCounty',
  MiaoliCounty = 'MiaoliCounty',
  LienchiangCounty = 'LienchiangCounty',
  HsinchuCounty = 'HsinchuCounty',
  Taoyuan = 'Taoyuan',
  Keelung = 'Keelung',
  Hsinchu = 'Hsinchu',
  ChiayiCounty = 'ChiayiCounty',
  NantouCounty = 'NantouCounty',
  ChanghuaCounty = 'ChanghuaCounty',
  Tainan = 'Tainan',
  TaitungCounty = 'TaitungCounty'
}
export enum CityNameZhTW {
  Taipei = '臺北市',
  Kaohsiung = '高雄市',
  NewTaipei = '新北市',
  Chiayi = '嘉義市',
  Taichung = '臺中市',
  HualienCounty = '花蓮縣',
  YunlinCounty = '雲林縣',
  PingtungCounty = '屏東縣',
  KinmenCounty = '金門縣',
  PenghuCounty = '澎湖縣',
  YilanCounty = '宜蘭縣',
  MiaoliCounty = '苗栗縣',
  LienchiangCounty = '連江縣',
  HsinchuCounty = '新竹縣',
  Taoyuan = '桃園市',
  Keelung = '基隆市',
  Hsinchu = '新竹市',
  ChiayiCounty = '嘉義縣',
  NantouCounty = '南投縣',
  ChanghuaCounty = '彰化縣',
  Tainan = '臺南市',
  TaitungCounty = '臺東縣'
}
