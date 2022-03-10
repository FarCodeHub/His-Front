import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import { GlobalService } from 'src/app/core/services/global.service';
import { BaseValueEnum } from 'src/app/enums/baseValueEnum';
import { BaseValue } from 'src/app/models/base-value';
import { MedicalCenterModel } from 'src/app/models/medical-center-model';
import { RadiologyFilter } from 'src/app/models/radiology-filter';

@Component({
  selector: 'app-radiologies-list',
  templateUrl: './radiologies-list.component.html',
  styleUrls: ['./radiologies-list.component.scss']
})
export class RadiologiesListComponent implements OnInit {

  radiologies: MedicalCenterModel[] = [];
  radiologyFilter : RadiologyFilter = {workingTime :[] , title:""}
  workingTimes : BaseValue[];
  searchOptions = [
    { title: "filter", icon: "filter", selected: true },
    { title: "sort", icon: "sort-amount-up", selected: false },
  ]
  constructor(private dataService: DataService,
    private router: Router,private globalService:GlobalService) { }

  ngOnInit(): void {
    this.dataService.getDataByParam("centerTypeId", 26, "MedicalCenter", "SearchCenter").subscribe((result) => {
      this.radiologies = result.data;
    })

    this.workingTimes = this.globalService.getBaseValue(BaseValueEnum.WorkTime);
  }

  onSearchOptionChanged(item: any) {

  }

  onItemClick(doctor: MedicalCenterModel) {
    this.router.navigate(['/index/doctor-detail', { doctor: JSON.stringify(doctor) }]);
  }
  SearchRadiology()
  {
    this.dataService.postJsonData(this.radiologyFilter, "MedicalCenter", "SearchRadiologiesBy").subscribe((result) => {
      this.radiologies = result.data;
      this.radiologyFilter = {workingTime : []  ,title :""};
    })
  }

  onCheckboxWorkingTimeChange(e,item :BaseValue)
  {
    if (e.target.checked)
    this.radiologyFilter.workingTime.push(item);

          if (!e.target.checked)
          {
          var index = this.radiologyFilter.workingTime.indexOf(item);
          if (index !== -1) {
            this.radiologyFilter.workingTime.splice(index, 1);
        }
        }
  }
}
