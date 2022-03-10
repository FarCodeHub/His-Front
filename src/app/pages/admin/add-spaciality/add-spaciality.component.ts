import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { MedicalCenterModel } from 'src/app/models/medical-center-model';
import { ResponseResult } from 'src/app/models/response -result';
import { SpecialityModel } from 'src/app/models/spaciality-model';

@Component({
  selector: 'app-add-center-spaciality',
  templateUrl: './add-spaciality.component.html',
  styleUrls: ['./add-spaciality.component.scss']
})
export class AddSpacialityComponent implements OnInit {

  @Input()
  medicalCenter: MedicalCenterModel

  specialities: SpecialityModel[]

  selected_specialities: SpecialityModel[] = []

  secondarySelectedNode: SpecialityModel | null;
  mainSelectedNode: SpecialityModel | null;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData<ResponseResult<SpecialityModel[]>>("MedicalSpeciality", "GetSpecialityTree").subscribe((result) => {
      this.specialities = result.data;
    })
  }

  add() {
    if (this.mainSelectedNode != null)
      this.selected_specialities.push({ ...this.mainSelectedNode, expanded: false });
  }

  remove() {
    if (this.secondarySelectedNode != null)

      this.selected_specialities.splice(this.selected_specialities.indexOf(this.secondarySelectedNode), 1);
  }


  saveSpecilties() {
    this.selected_specialities.forEach(x => x.centerId = this.medicalCenter.id)

    this.dataService.postJsonData(this.selected_specialities, "MedicalSpeciality", "AddSpeciality").subscribe((result) => {
      // --- code

    })
  }


}
