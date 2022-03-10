import { CenterLocationModel } from "./center-location-model";

export interface MedicalCenterModel {
  id: number
  parentId: number
  centerTypeId: number,
  typeName: string,
  centerLocation: CenterLocationModel
  code: string
  title: string
  bossId: number
  phone: string
  email: string
  isActive: boolean
  answerTime: string
  phoneResponseHourse: string
  isFreeDelivery: boolean
  fax: string
  note: string
  cuntryId: number
  cuntryName: string
  province: number
  provinceName: string;
  city: number;
  cityName: string;
  zone: number
  zoneName: string
  examTime: string
  workingHours: string
  address: string
  areaCode: string
  ownerShipBaseId: number
  ownerShipTypeName: string
  workTimeBaseId: number
  visitorPhone: string
  bossPhone: string
  boss: string

}

