import { Component, Input, OnInit } from '@angular/core';
import { MedicalCenterModel } from 'src/app/models/medical-center-model';

@Component({
  selector: 'app-center-info',
  templateUrl: './center-info.component.html',
  styleUrls: ['./center-info.component.scss']
})
export class CenterInfoComponent implements OnInit {

  @Input()
  medicalCenter: MedicalCenterModel;


  constructor() {
    // this.center = <MedicalCenterModel>{
    //   title: "Hospital Baqdad",
    //   code: "13287398904",
    //   ownershipTypeName: "Private",
    //   typeName: "Hospital",
    //   cuntryName: "Iraq",
    //   provinceName: "Bagdad",
    //   cityName: "Bagdad",
    //   zoneName: "Bagdad",
    //   boss: "Dr.Alkarami"
    // };
  }

  ngOnInit(): void {
  }

}
