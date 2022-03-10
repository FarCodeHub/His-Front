import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CToastComponent } from 'src/app/Components/c-toast/c-toast.component';
import { DataService } from 'src/app/core/services/data.service';
import { GlobalService } from 'src/app/core/services/global.service';
import { BaseValueEnum } from 'src/app/enums/baseValueEnum';
import { BaseValue } from 'src/app/models/base-value';
import { PatientModel } from 'src/app/models/patient-model';
import { ResponseResult } from 'src/app/models/response -result';

@Component({
  selector: 'app-patient-general-info',
  templateUrl: './patient-general-info.component.html',
  styleUrls: ['./patient-general-info.component.scss']
})
export class PatientGeneralInfoComponent implements OnInit {

  @Input()
  patient: PatientModel;

  @ViewChild('toast')
  toast: CToastComponent;

  sexes: BaseValue[]

  marriage: BaseValue[]

  constructor(private dataService: DataService,private globalService: GlobalService) { }

  ngOnInit(): void {
    this.sexes = this.globalService.getBaseValue(BaseValueEnum.Sex);
    this.marriage = this.globalService.getBaseValue(BaseValueEnum.Marriage);

  }

  savePatient(patient)
  {
    this.dataService.postJsonData(patient, "Patient", "EditPatient").subscribe((result) => {

      this.toast.show();
   })
  }

}
