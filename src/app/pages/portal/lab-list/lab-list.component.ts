import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import { GlobalService } from 'src/app/core/services/global.service';
import { BaseValueEnum } from 'src/app/enums/baseValueEnum';
import { BaseValue } from 'src/app/models/base-value';
import { LabFilter } from 'src/app/models/lab-filter';
import { MedicalCenterModel } from 'src/app/models/medical-center-model';
import { ResponseResult } from 'src/app/models/response -result';

@Component({
  selector: 'app-lab-list',
  templateUrl: './lab-list.component.html',
  styleUrls: ['./lab-list.component.scss']
})
export class LabListComponent implements OnInit {

  labs: MedicalCenterModel[] = [];
  workingTimes : BaseValue[];
  labFilter : LabFilter = {workingTime :[] , title:""};

  searchOptions = [
    { title: "filter", icon: "filter", selected: true },
    { title: "sort", icon: "sort-amount-up", selected: false },
  ]
  constructor(private dataService: DataService,
    private router: Router,private globalService:GlobalService ) { }

  ngOnInit(): void {
    this.dataService.getDataByParam("centerTypeId", 1, "MedicalCenter", "SearchCenter").subscribe((result) => {
      this.labs = result.data;
    })

    this.workingTimes = this.globalService.getBaseValue(BaseValueEnum.WorkTime);
  }

  onSearchOptionChanged(item: any) {

  }

  onItemClick(doctor: MedicalCenterModel) {
    this.router.navigate(['/index/doctor-detail', { doctor: JSON.stringify(doctor) }]);
  }

  SearchLabs()
  {
    this.dataService.postJsonData(this.labFilter, "MedicalCenter", "SearchLabsBy").subscribe((result) => {
      this.labs = result.data;
      this.labFilter = {workingTime : []  ,title :""};
    })
  }


  onCheckboxWorkingTimeChange(e,item :BaseValue)
  {
    if (e.target.checked)
    this.labFilter.workingTime.push(item);

          if (!e.target.checked)
          {
          var index = this.labFilter.workingTime.indexOf(item);
          if (index !== -1) {
            this.labFilter.workingTime.splice(index, 1);
        }
        }
  }




}
