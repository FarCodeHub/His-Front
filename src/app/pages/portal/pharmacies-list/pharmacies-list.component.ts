import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import { GlobalService } from 'src/app/core/services/global.service';
import { BaseValueEnum } from 'src/app/enums/baseValueEnum';
import { BaseValue } from 'src/app/models/base-value';
import { MedicalCenterModel } from 'src/app/models/medical-center-model';
import { PharmacyFilter } from 'src/app/models/pharmacy-filter';

@Component({
  selector: 'app-pharmacies-list',
  templateUrl: './pharmacies-list.component.html',
  styleUrls: ['./pharmacies-list.component.scss']
})
export class PharmaciesListComponent implements OnInit {

  pharmacies: MedicalCenterModel[] = [];
  pharmacyFilter : PharmacyFilter = {workingTime :[] , title:""}
  workingTimes : BaseValue[];
  searchOptions = [
    { title: "filter", icon: "filter", selected: true },
    { title: "sort", icon: "sort-amount-up", selected: false },
  ]
  constructor(private dataService: DataService,
    private router: Router,private globalService:GlobalService ) { }

  ngOnInit(): void {
    this.dataService.getDataByParam("centerTypeId", 27, "MedicalCenter", "SearchCenter").subscribe((result) => {
      this.pharmacies = result.data;
    })

this.workingTimes = this.globalService.getBaseValue(BaseValueEnum.WorkTime);
  }

  onSearchOptionChanged(item: any) {

  }

  onItemClick(doctor: MedicalCenterModel) {
    this.router.navigate(['/index/doctor-detail', { doctor: JSON.stringify(doctor) }]);
  }


  SearchPharmacies()
  {
    this.dataService.postJsonData(this.pharmacyFilter, "MedicalCenter", "SearchPharmaciesBy").subscribe((result) => {
      this.pharmacies = result.data;
      this.pharmacyFilter = {workingTime : []  ,title :""};
    })
  }

  onCheckboxWorkingTimeChange(e,item :BaseValue)
  {
    if (e.target.checked)
    this.pharmacyFilter.workingTime.push(item);

          if (!e.target.checked)
          {
          var index = this.pharmacyFilter.workingTime.indexOf(item);
          if (index !== -1) {
            this.pharmacyFilter.workingTime.splice(index, 1);
        }
        }
  }
  onCheckboxHomeDeliveryChange(e)
  {
    if (e.target.checked)
    this.pharmacyFilter.isHomeDelivery= true;

          if (!e.target.checked)

          this.pharmacyFilter.isHomeDelivery= false;


  }

}
