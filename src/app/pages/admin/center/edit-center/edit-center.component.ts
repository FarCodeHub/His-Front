import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

@Component({
  selector: 'app-edit-center',
  templateUrl: './edit-center.component.html',
  styleUrls: ['./edit-center.component.scss']
})
export class EditCenterComponent implements OnInit {

  @Input()
  medicalCenter: MedicalCenterModel;

  @ViewChild('toast')
  toast: CToastComponent;

  geoLocations: GeoLocation[]

  province : GeoLocation = <GeoLocation>{title:"",id:0}
  city : GeoLocation = <GeoLocation>{title:"",id:0}
  zone : GeoLocation = <GeoLocation>{title:"",id:0}
  countries: GeoLocation[] = []
  provinces: GeoLocation[] = [];
  cities: GeoLocation[] = [];
  zones: GeoLocation[] = [];

  public ownershipTypes: BaseValue[]
  //= [{ id: 1, title: "خاص", titleLang2: "Private" }, { id: 1, title: "الحکومی", titleLang2: "Governance" }];

  public workTimes: BaseValue[]
  // = [{ id: 1, title: "صباحی", titleLang2: "" }, { id: 1, title: "مسائی", titleLang2: "" }, { id: 1, title: "خافر", titleLang2: "" }];

  public centerTypes: CenterType[]
  //= [{ title: "Hospital", value: 1 }, { title: "Clinic", value: 2 }, { title: "Labratory", value: 3 }]

  constructor(private dataService: DataService, private globalService: GlobalService) {

  }


  //@Output() centerId: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {

    this.dataService.getRestData<ResponseResult<GeoLocation[]>>("api", "GeoLocation").subscribe((result) => {
      this.geoLocations = result.data;
      this.countries = this.geoLocations.filter(x => x.type == 1);

      // this.province.id = this.medicalCenter.centerLocation.provinceId;
      // this.province.title = this.medicalCenter.centerLocation.provinceName;
      // this.setProvince(this.province);

      // this.city.id = this.medicalCenter.centerLocation.cityId;
      // this.city.title = this.medicalCenter.centerLocation.cityName;
      // this.setCity(this.city);

      // this.zone.id = this.medicalCenter.centerLocation.zoneId;
      // this.zone.title = this.medicalCenter.centerLocation.zoneName;
      // this.setZone(this.zone);

    });


      this.ownershipTypes = this.globalService.getBaseValue(BaseValueEnum.Ownership);



      this.workTimes =this.globalService.getBaseValue(BaseValueEnum.WorkTime);



      this.centerTypes =this.globalService.getBaseValue(BaseValueEnum.CenterTypes);

    // this.dataService.getDataByParam("centerId",this.center.centerId,"api","GetMedicalCenter").subscribe((data)=>
    // {
    //   this.medicalCenter = data.data.medicalCenter;
    // })

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


  saveMedicalCenter(medicalCenter) {
    this.dataService.postJsonData(medicalCenter, "MedicalCenter", "EditMedicalCenter").subscribe((result) => {
      // --- code
      this.toast.show();
    })
  }

}
