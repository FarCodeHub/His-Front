import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GridColumn } from 'src/app/Components/c-grid/c-grid.component';
import { CToastComponent } from 'src/app/Components/c-toast/c-toast.component';
import { DataService } from 'src/app/core/services/data.service';
import { GlobalService } from 'src/app/core/services/global.service';
import { BaseValueEnum } from 'src/app/enums/baseValueEnum';
import { BaseValue } from 'src/app/models/base-value';
import { MedicalCenterModel } from 'src/app/models/medical-center-model';
import { MedicalStaffModel } from 'src/app/models/medical-staff-model';
import { ResponseResult } from 'src/app/models/response -result';
import { CenterStaffsComponent } from '../center-staffs/center-staffs.component';
import { EditCenterComponent } from '../center/edit-center/edit-center.component';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.scss']
})
export class AddStaffComponent implements OnInit {

  @ViewChild('toast')
  toast: CToastComponent;

  @Input()
  medicalCenter: MedicalCenterModel;

  sexes: BaseValue[]
  // = [{ id: 1, title: "Male", titleLang2: "Male" },
  //  { id: 2, title: "Female", titleLang2: "Female" }];

  staffTypes: BaseValue[]
  // = [{ id: 1, title: "Doctor", titleLang2: "Private" },
  //   { id: 2, title: "Radiology Expert", titleLang2: "Governance" },
  //   { id: 3, title: "Nurse", titleLang2: "Governance" },
  //   { id: 4, title: "Employee", titleLang2: "Employee" }];
  centerId: number = 2;

  scientificLevels: BaseValue[]
  //  = [{ id: 1, title: "Doctor", titleLang2: "Doctor" },
  //   { id: 2, title: "Master", titleLang2: "Master" }];

  expertises: BaseValue[]

  // = [{ id: 7, title: "Ophthalmology", titleLang2: "Ophthalmology" },
  //   { id: 8, title: "Orthopedic", titleLang2: "Orthopedic" },
  //   { id: 9, title: "Radiology", titleLang2: "Radiology" },
  //   { id: 10, title: "Internal Medicine", titleLang2: "Internal Medicine" }];

  medicalStaffModel: MedicalStaffModel = <MedicalStaffModel>
    { firstName: "", lastName: "", fatherName: "", fullName: "", grandFatherName: "", type: 0, centerId: 0, sexId: 1 };

  marriage: BaseValue[]
  //=  [{ id: 4, title: "Marriage", titleLang2: "Marriage" },
  //{ id: 5, title: "Single", titleLang2: "Single" }];

  constructor(private route: ActivatedRoute,
    private dataService: DataService, private centerStaffsComponent: CenterStaffsComponent, private globalService: GlobalService) {
  }

  ngOnInit(): void {


    this.sexes = this.globalService.getBaseValue(BaseValueEnum.Sex);



    this.staffTypes = this.globalService.getBaseValue(BaseValueEnum.CenterTypes);



    this.expertises = this.globalService.getBaseValue(BaseValueEnum.Expertise);



    this.scientificLevels = this.globalService.getBaseValue(BaseValueEnum.ScientificLevels);



    this.marriage = this.globalService.getBaseValue(BaseValueEnum.Marriage);


  }

  addStaff(medicalStaffModel) {

    this.medicalStaffModel.centerId = this.centerId;
    this.dataService.postJsonData(medicalStaffModel, "MedicalStaff", "AddMedicalStaff").subscribe((data) => {
      this.centerStaffsComponent.closeAddStaff();
      this.centerStaffsComponent.addGrid(data.data.medicalStaffModel);
      this.toast.show();
      return;
    })
  }

}
