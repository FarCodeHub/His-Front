import { Component, Input, OnInit } from '@angular/core';
import { GridColumn } from 'src/app/Components/c-grid/c-grid.component';
import { DataService } from 'src/app/core/services/data.service';
import { DrugModel } from 'src/app/models/drug-model';
import { PatientModel } from 'src/app/models/patient-model';
 

@Component({
  selector: 'app-patient-drugs',
  templateUrl: './patient-drugs.component.html',
  styleUrls: ['./patient-drugs.component.scss']
})
export class PatientDrugsComponent implements OnInit {

  @Input()
  patient: PatientModel;

  visits: DrugModel[];
  dataColumns: GridColumn[] = [
    { title: "Brand Name", field: "brandName", filterable: true, sortable: true, ascending: true },
    { title: "Generic Name", field: "genericName", filterable: true, sortable: true, ascending: true },
    { title: "Strength", field: "strength", filterable: true, sortable: false, ascending: true },
    { title: "Pack", field: "pack", filterable: true, sortable: true, ascending: true },
    { title: "Form", field: "form", filterable: true, sortable: true, ascending: true },
    { title: "Manufacturer", field: "manufacturer", filterable: true, sortable: true, ascending: true },
  ];


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // this.dataService.getData<ResponseResult<ReceptionModel[]>>("Patient", "GetPatientPrescriptions").subscribe((result) => {
    //   this.visits = result.data;
    //  })
  }

}
