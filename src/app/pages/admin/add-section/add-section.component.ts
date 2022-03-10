import { Component, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { GlobalService } from 'src/app/core/services/global.service';
import { BaseValueEnum } from 'src/app/enums/baseValueEnum';
import { BaseValue } from 'src/app/models/base-value';
import { CenterType } from 'src/app/models/center-type';

import { MedicalCenterModel } from 'src/app/models/medical-center-model';
import { ResponseResult } from 'src/app/models/response -result';
import { CenterSectionsComponent } from '../center-sections/center-sections.component';
import { EditCenterComponent } from '../center/edit-center/edit-center.component';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.scss']
})
export class AddSectionComponent implements OnInit {

  @Input()
  medicalCenter: MedicalCenterModel;

  constructor(private dataService: DataService, private centerSectionComponent: CenterSectionsComponent, private globalService: GlobalService) { }

  section: MedicalCenterModel;

  ownershipTypes: BaseValue[] //= [{ id: 1, title: "خاص", titleLang2: "Private" }, { id: 2, title: "الحکومی", titleLang2: "Governance" }];;
  centerTypes: CenterType[] //= [{ title: "Hospital", value: 1 }, { title: "Clinic", value: 2 }, { title: "Labratory", value: 3 }]


  ngOnInit(): void {

    this.ownershipTypes = this.globalService.getBaseValue(BaseValueEnum.Ownership);


    this.centerTypes = this.globalService.getBaseValue(BaseValueEnum.CenterTypes);

    this.medicalCenter.title = "";
    this.medicalCenter.code = "";
    this.medicalCenter.boss = "";
    this.medicalCenter.bossPhone = "";
    this.medicalCenter.phone = "";
    this.medicalCenter.visitorPhone = "";
    this.medicalCenter.visitorPhone = "";
    this.medicalCenter.email = "";
    this.medicalCenter.fax = "";
    this.medicalCenter.centerTypeId = 0;

  }


  saveSecion(medicalCenter) {
    this.dataService.postJsonData(medicalCenter, "MedicalSection", "AddSection").subscribe((result) => {
      this.centerSectionComponent.closeAddSection();
      this.centerSectionComponent.addGrid(result.data);

    })
  }

}
