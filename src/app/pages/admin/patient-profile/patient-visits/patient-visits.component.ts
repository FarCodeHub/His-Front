import { Component, Input, OnInit } from '@angular/core';
import { GridColumn } from 'src/app/Components/c-grid/c-grid.component';
import { DataService } from 'src/app/core/services/data.service';
import { PatientModel } from 'src/app/models/patient-model';
import { ReceptionModel } from 'src/app/models/reception-model';
import { ResponseResult } from 'src/app/models/response -result';

@Component({
  selector: 'app-patient-visits',
  templateUrl: './patient-visits.component.html',
  styleUrls: ['./patient-visits.component.scss']
})
export class PatientVisitsComponent implements OnInit {

  @Input()
  patient: PatientModel;

  visits: ReceptionModel[];
  dataColumns: GridColumn[] = [
    { title: "Medical Center", field: "centerTitle", filterable: true, sortable: true, ascending: true },
    { title: "Date", field: "refferDate", filterable: true, sortable: true, ascending: true },
    { title: "Reason", field: "refferReason", filterable: true, sortable: false, ascending: true },
    { title: "Note", field: "resultNote", filterable: true, sortable: true, ascending: true },
  ];

  patients: PatientModel[]
  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getData<ResponseResult<ReceptionModel[]>>("Patient", "GetPatientReceptions").subscribe((result) => {
      this.visits = result.data;
    })

  }

}
