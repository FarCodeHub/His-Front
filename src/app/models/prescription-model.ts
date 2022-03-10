import { Data } from "@angular/router";
import { DrugModel } from "./drug-model";

export interface PrescriptionModel {
    

    id: number;
    parentId: number;
    serviceTypeId: number;
    serviceType: string;
    centerId: number;
    medicalCenterTitle: string;
    patientId: number;
    createTime: Date;
    refferDate: Date;
    note: string;
    mobileNumber: string;
    doctorTitle: string;
    resultNote: string;
    prescriptionDate :Data
    drugs : DrugModel[]
    prescriptionCode:string
    fullName:string
    persianPrescriptionDate : string
}
