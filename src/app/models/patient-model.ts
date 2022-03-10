import { AllergiModel } from "./allergi-Model";

export interface PatientModel {
    id: number
    fullName: string;
    firstName: string;//new added
    lastName: string;//new added
    fatherName: string;//new added
    grandfatherName: string;//new added
    hisno: string
    brithDate: Date;
    mobileNumber: string
    phone: string//new added
    email: string//new added
    age: number
    sexId: number
    sex: string
    address: string//new added
    maritalBaseId: number
    martilTitle: string
    listAlergies: AllergiModel[]
    height: number;
    weight: number;
    medicalCenterTitle: string
    doctorTitle: string
    code: string
    diet: string
    biography: string
    prescriptionDate: Date
    persianBrithDate : string
    nationalCode:string
    avatar : string
    personId : number
}
