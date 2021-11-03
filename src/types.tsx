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
    PictureUrl1: 'string' | undefined
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

export type OData = {}

export enum CityName {
  Taipei = 'Taipei',
  NewTaipei = 'NewTaipei',
  Taoyuan = 'Taoyuan',
  Taichung = 'Taichung',
  Tainan = 'Tainan',
  Kaohsiung = 'Kaohsiung',
  Keelung = 'Keelung',
  Hsinchu = 'Hsinchu',
  HsinchuCounty = 'HsinchuCounty',
  MiaoliCounty = 'MiaoliCounty',
  ChanghuaCounty = 'ChanghuaCounty',
  Nantou = 'NantouCounty',
  YunlinCounty = 'YunlinCounty',
  ChiayiCounty = 'ChiayiCounty',
  Chiayi = 'Chiayi',
  PingtungCounty = 'PingtungCounty',
  YilanCounty = 'YilanCounty',
  HualienCounty = 'HualienCounty',
  TaitungCounty = 'TaitungCounty',
  KinmenCounty = 'KinmenCounty',
  PenghuCounty = 'PenghuCounty',
  LienchiangCounty = 'LienchiangCounty'
}
export enum CityNameZhTW {
  Taipei = '台北市',
  NewTaipei = '新北市',
  Taoyuan = '桃園',
  Taichung = '台中',
  Tainan = '台南',
  Kaohsiung = '高雄',
  Keelung = '基隆',
  Hsinchu = '新竹',
  HsinchuCounty = '新竹',
  MiaoliCounty = '苗栗',
  ChanghuaCounty = '彰化',
  Nantou = '南投',
  YunlinCounty = '雲林',
  ChiayiCounty = '嘉義縣',
  Chiayi = '嘉義',
  PingtungCounty = '屏東',
  YilanCounty = '宜蘭',
  HualienCounty = '花蓮',
  TaitungCounty = '台中縣',
  KinmenCounty = '金門縣',
  PenghuCounty = '澎湖縣',
  LienchiangCounty = '連江縣'
}
