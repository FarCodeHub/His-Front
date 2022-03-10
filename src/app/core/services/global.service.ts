import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BaseValue } from 'src/app/models/base-value';
import { MedicalCenterModel } from 'src/app/models/medical-center-model';
import { PatientModel } from 'src/app/models/patient-model';
import { ResponseResult } from 'src/app/models/response -result';
import { UserModel } from 'src/app/models/user-model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})


export class GlobalService {

  medicalCenter: MedicalCenterModel;
  baseValue: BaseValue[];
  patientProfile : PatientModel;
  adminProfile : UserModel;
  direction: string = "ltr";



  constructor(private dataService: DataService,
    private transloco: TranslocoService) {
    if (localStorage.getItem('medicalCenter') != null)
      this.medicalCenter = JSON.parse(localStorage.getItem('medicalCenter') || '{}');

  }

  setCenter(center: MedicalCenterModel) {
    localStorage.setItem('medicalCenter', JSON.stringify(center));
  }

  loadBaseValue(): Promise<BaseValue[]> {
    return new Promise(resolve => {
      this.baseValue = JSON.parse(localStorage.getItem('baseValue'));
      if (this.baseValue == null) {
        this.dataService.getData<ResponseResult<BaseValue[]>>("Common", "GetBaseValues").subscribe((result) => {

          localStorage.setItem('baseValue', JSON.stringify(result.data));
          return resolve(result.data);
        });
      }
      return resolve(this.baseValue);
    });

  }

  getBaseValue(typename: number) {
    if (this.baseValue == null)
      this.baseValue = JSON.parse(localStorage.getItem('baseValue'));
    return this.baseValue.filter(x => x.baseValueTypeId == typename);
  }


  loadcenter() {
    this.medicalCenter = JSON.parse(localStorage.getItem('medicalCenter'))
    return this.medicalCenter;
  }

  setPatientProfile(item:PatientModel)
  {
    localStorage.setItem('patientProfile', JSON.stringify(item));
  }

  loadPatientProfile()
  {
    this.patientProfile = JSON.parse(localStorage.getItem('patientProfile'))
    return this.patientProfile;
  }

  setAdminProfile(user:UserModel)
  {
    localStorage.setItem('adminProfile', JSON.stringify(user));
  }

  public loadAdminProfile()
  {
    this.adminProfile = JSON.parse(localStorage.getItem('adminProfile'))
    return this.adminProfile;
  }


  setActiveLang(lang: string) {
    this.transloco.setActiveLang(lang);
    if (lang != "en") {
      this.direction = "rtl";
    }
    else
      this.direction = "ltr";
  }


}











