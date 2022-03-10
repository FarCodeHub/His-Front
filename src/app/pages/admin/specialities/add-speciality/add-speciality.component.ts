import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CToastComponent } from 'src/app/Components/c-toast/c-toast.component';
import { DataService } from 'src/app/core/services/data.service';
import { SpecialityModel } from 'src/app/models/spaciality-model';
import { SpecialitiesComponent } from '../specialities.component';

@Component({
  selector: 'app-add-speciality',
  templateUrl: './add-speciality.component.html',
  styleUrls: ['./add-speciality.component.scss']
})
export class AddSpecialityComponent implements OnInit {


  @Input()
  parentSpeciality: SpecialityModel;

  speciality: SpecialityModel = <SpecialityModel>{};


  constructor(private dataService: DataService,
    private specialitiesComponent: SpecialitiesComponent) {

  }

  ngOnInit(): void {
  }

  save() {
    if (this.parentSpeciality != null)
      this.speciality.parentId = this.parentSpeciality.id;

    this.dataService.postJsonData(this.speciality, "GeoLocation", "").subscribe((result) => {
      this.specialitiesComponent.loadData();
      this.specialitiesComponent.closeModal(true);
    })
  }

}
