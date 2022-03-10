import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import { GlobalService } from 'src/app/core/services/global.service';
import { BaseValueEnum } from 'src/app/enums/baseValueEnum';
import { BaseValue } from 'src/app/models/base-value';
import { DoctorFilter } from 'src/app/models/doctor-filter';
import { MedicalStaffModel } from 'src/app/models/medical-staff-model';
import { ResponseResult } from 'src/app/models/response -result';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {




  expertis : BaseValue[] = [];
  workingTime : BaseValue[] = [];
  sex : BaseValue[] = [];

  doctorFilter : DoctorFilter  = {experties : [] , workingTime : [] , sex :[] ,fullName :""};


  doctors: MedicalStaffModel[] = [];
  searchOptions = [
    { title: "filter", icon: "filter", selected: true },
    { title: "sort", icon: "sort", selected: false },
  ]
  constructor(private dataService: DataService,
    private router: Router, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.dataService.getData<ResponseResult<MedicalStaffModel[]>>("MedicalStaff", "SearchDoctor").subscribe((result) => {
      this.doctors = result.data;
    })

    this.expertis = this.globalService.getBaseValue(BaseValueEnum.Expertise);
    this.sex = this.globalService.getBaseValue(BaseValueEnum.Sex);
    this.workingTime = this.globalService.getBaseValue(BaseValueEnum.WorkTime);
  }

  onSearchOptionChanged(item : any) { }

  public searchDoctor()
  {
  this.dataService.postJsonData(this.doctorFilter, "MedicalStaff", "SearchDoctorBy").subscribe((result) => {
    this.doctors = result.data;
    this.doctorFilter   = {experties : [] , workingTime : [] , sex :[] ,fullName :""};
  })
  }

  onItemClick(doctor: MedicalStaffModel) {
    this.router.navigate(['/doctor-detail', { doctor: JSON.stringify(doctor) }]);
  }


  onCheckboxWorkTimeChange(e,item :BaseValue)
  {
    if (e.target.checked)
    this.doctorFilter.workingTime.push(item);

          if (!e.target.checked)
          {
          var index = this.doctorFilter.workingTime.indexOf(item);
          if (index !== -1) {
            this.doctorFilter.workingTime.splice(index, 1);
        }
        }
  }

  onCheckboxSexChange(e,item :BaseValue)
  {
    if (e.target.checked)
    this.doctorFilter.sex.push(item);

          if (!e.target.checked)
          {
          var index = this.doctorFilter.sex.indexOf(item);
          if (index !== -1) {
            this.doctorFilter.sex.splice(index, 1);
        }
        }
  }

  onCheckboxExpertiesChange(e,item :BaseValue)
  {
      if (e.target.checked)
        this.doctorFilter.experties.push(item);

              if (!e.target.checked)
              {
              var index = this.doctorFilter.experties.indexOf(item);
              if (index !== -1) {
                this.doctorFilter.experties.splice(index, 1);
            }
            }
  }



}
