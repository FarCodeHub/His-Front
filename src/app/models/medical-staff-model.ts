import { number } from "echarts";
import { SpecialityModel } from "./spaciality-model";


export interface MedicalStaffModel {
    id: number
    firstName: string
    lastName: string
    fatherName: string
    grandFatherName: string
    fullNameThree: string
    fullName: string
    type: number
    typeName: string;
    personId: number
    employeeDate: Date
    medicalSystemNo: string
    centerId: number
    age: number
    sexId: number
    sex: string
    scientificLevel: number
    expertise: number
    birthDate: string
    maritalBaseId: number
    maritalName: string
    expertiseId: number
    medicalCenterTitle: string
    address: string
    phone: string
    workTimeTitle: string
    specialities: SpecialityModel[]
}

