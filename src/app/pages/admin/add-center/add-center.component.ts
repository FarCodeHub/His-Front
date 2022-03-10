import { Component, OnInit, ViewChild } from '@angular/core';
import { CToastComponent } from 'src/app/Components/c-toast/c-toast.component';
import { DataService } from 'src/app/core/services/data.service';
import { GlobalService } from 'src/app/core/services/global.service';
import { BaseValueEnum } from 'src/app/enums/baseValueEnum';
import { BaseValue } from 'src/app/models/base-value';
import { CenterLocationModel } from 'src/app/models/center-location-model';
import { CenterType } from 'src/app/models/center-type';
import { GeoLocation } from 'src/app/models/geo-location';
import { MedicalCenterModel } from 'src/app/models/medical-center-model';
import { ResponseResult } from 'src/app/models/response -result';
import { CenterSectionsComponent } from '../center-sections/center-sections.component';
import { CentersListComponent } from '../centers-list/centers-list.component';

@Component({
  selector: 'app-add-center',
  templateUrl: './add-center.component.html',
  styleUrls: ['./add-center.component.scss']
})
export class AddCenterComponent implements OnInit {

  centerLocation: CenterLocationModel = <CenterLocationModel>{ address: "" }
  center: MedicalCenterModel = <MedicalCenterModel>{ title: "", centerLocation: this.centerLocation };
  @ViewChild('toast')
  toast: CToastComponent;
  geoLocations: GeoLocation[]
  // = [{ id: 1, level: 1, title: "Iran", parentId: null },
  // { id: 2, level: 1, title: "Iraq", parentId: null },
  // { id: 3, level: 1, title: "England", parentId: null },
  // { id: 4, level: 2, title: "Tehran", parentId: 1 },
  // { id: 5, level: 2, title: "Isfahan", parentId: 1 },
  // { id: 6, level: 2, title: "Qom", parentId: 1 },
  // { id: 7, level: 3, title: "Tehran", parentId: 4 },
  // { id: 7, level: 3, title: "Damavand", parentId: 4 },
  // { id: 8, level: 3, title: "Zone 1", parentId: 7 },
  // { id: 9, level: 3, title: "Zone 2", parentId: 7 },];

  countries: GeoLocation[] = []
  provinces: GeoLocation[] = [];
  cities: GeoLocation[] = [];
  zones: GeoLocation[] = [];
  constructor(private dataService: DataService, private centerList: CentersListComponent, private globalService: GlobalService) { }

  workTimeTypes: BaseValue[]
  ownershipTypes: BaseValue[] //= [{ id: 1, title: "خاص", titleLang2: "Private" }, { id: 2, title: "الحکومی", titleLang2: "Governance" }];;
  centerTypes: BaseValue[] //= [{ title: "Hospital", value: 1 }, { title: "Clinic", value: 2 }, { title: "Labratory", value: 3 }]

  ngOnInit(): void {

    this.dataService.getData<ResponseResult<GeoLocation[]>>("Common", "GetGeoLocations").subscribe((result) => {
      this.geoLocations = result.data;
      this.countries = this.geoLocations.filter(x => x.type == 1);

    });

    this.ownershipTypes = this.globalService.getBaseValue(BaseValueEnum.Ownership);

    this.workTimeTypes = this.globalService.getBaseValue(BaseValueEnum.WorkTime);

    this.centerTypes = this.globalService.getBaseValue(BaseValueEnum.CenterTypes);



    this.center.code = "";
    this.center.boss = "";
    this.center.bossPhone = "";
    this.center.phone = "";
    this.center.visitorPhone = "";
    this.center.visitorPhone = "";
    this.center.email = "";
    this.center.fax = "";
    this.center.centerTypeId = 0;

  }


  saveCenter(item) {
    this.dataService.postJsonData(item, "MedicalCenter", "AddMedicalCenter").subscribe((result) => {
      this.centerList.closeAddCenter();
      this.centerList.addToGrid(result.data);
      this.toast.show();

    })
  }
  selectCountry(item: any) {
    this.provinces = this.geoLocations.filter(x => x.parentId == item.id);
  }

  selectProvice(item: any) {
    this.cities = this.geoLocations.filter(x => x.parentId == item.id);
  }

  selectCity(item: any) {
    this.zones = this.geoLocations.filter(x => x.parentId == item.id);
  }

}
