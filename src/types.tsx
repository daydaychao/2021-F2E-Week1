export type ScenicSpot = {
  ID: 'string' | undefined
  Name: 'string' | undefined
  DescriptionDetail: 'string' | undefined
  Description: 'string' | undefined
  // Phone: 'string' | undefined
  // Address: 'string' | undefined
  // ZipCode: 'string' | undefined
  // TravelInfo: 'string' | undefined
  // OpenTime: 'string' | undefined
  // Picture: {
  //   PictureUrl1: 'string' | undefined
  //   PictureDescription1: 'string' | undefined
  //   PictureUrl2: 'string' | undefined
  //   PictureDescription2: 'string' | undefined
  //   PictureUrl3: 'string' | undefined
  //   PictureDescription3: 'string' | undefined
  // }
  // MapUrl: 'string' | undefined
  // Position: {
  //   PositionLon: 0 | undefined
  //   PositionLat: 0 | undefined
  //   GeoHash: 'string' | undefined
  // }
  // Class1: 'string' | undefined
  // Class2: 'string' | undefined
  // Class3: 'string' | undefined
  // Level: 'string' | undefined
  // WebsiteUrl: 'string' | undefined
  // ParkingInfo: 'string' | undefined
  // ParkingPosition: {
  //   PositionLon: number | undefined
  //   PositionLat: number | undefined
  //   GeoHash: 'string' | undefined
  // }
  // TicketInfo: 'string' | undefined
  // Remarks: 'string' | undefined
  // Keyword: 'string' | undefined
  // City: 'string' | undefined
  // SrcUpdateTime: 'string' | undefined
  // UpdateTime: 'string' | undefined
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
