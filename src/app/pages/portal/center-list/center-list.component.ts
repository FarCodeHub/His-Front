import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import { GlobalService } from 'src/app/core/services/global.service';
import { BaseValueEnum } from 'src/app/enums/baseValueEnum';
import { BaseValue } from 'src/app/models/base-value';
import { CenterFilter } from 'src/app/models/center-filter';
import { DoctorFilter } from 'src/app/models/doctor-filter';
import { MedicalCenterModel } from 'src/app/models/medical-center-model';
import { ResponseResult } from 'src/app/models/response -result';

@Component({
  selector: 'app-center-list',
  templateUrl: './center-list.component.html',
  styleUrls: ['./center-list.component.scss']
})
export class CenterListComponent implements OnInit {
  centers: MedicalCenterModel[] = [];
  ownerShips : BaseValue[];

  centerFilter : CenterFilter  = {ownerShips : []  ,title :""};

  searchOptions = [
    { title: "filter", icon: "filter", selected: true },
    { title: "sort", icon: "sort-amount-up", selected: false },
  ]
  constructor(private dataService: DataService,private router: Router , private globalService: GlobalService) { }

  ngOnInit(): void {

    this.dataService.getDataByParam("centerTypeId", 29, "MedicalCenter", "SearchCenter").subscribe((result) => {
      this.centers = result.data;
    })

  this.ownerShips = this.globalService.getBaseValue(BaseValueEnum.Ownership);

  }

  onSearchOptionChanged(item: any) {

  }
  onItemClick(center: MedicalCenterModel) {
    this.router.navigate(['/index/center-detail', { doctor: JSON.stringify(center) }]);
  }

  centerDoctor()
  {
    this.dataService.postJsonData(this.centerFilter, "MedicalCenter", "SearchCentersBy").subscribe((result) => {
      this.centers = result.data;
      this.centerFilter = {ownerShips : []  ,title :""};
    })
  }

  onCheckboxOwnerShipChange(e,item :BaseValue)
  {
    if (e.target.checked)
    this.centerFilter.ownerShips.push(item);

          if (!e.target.checked)
          {
          var index = this.centerFilter.ownerShips.indexOf(item);
          if (index !== -1) {
            this.centerFilter.ownerShips.splice(index, 1);
        }
        }
  }

}
