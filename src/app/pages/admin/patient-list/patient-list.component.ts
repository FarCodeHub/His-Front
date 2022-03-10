import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GridColumn } from 'src/app/Components/c-grid/c-grid.component';
import { DataService } from 'src/app/core/services/data.service';
import { PatientModel } from 'src/app/models/patient-model';
import { ResponseResult } from 'src/app/models/response -result';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  patients: PatientModel[];
  dataColumns: GridColumn[] = [
    { title: "Full name", field: "fullName", filterable: true, sortable: true, ascending: true },
    { title: "Age", field: "age", filterable: true, sortable: true, ascending: true },
    { title: "Sex", field: "sex", filterable: true, sortable: false, ascending: true },
    { title: "Birth date", field: "birthDate", filterable: true, sortable: true, ascending: true },
    { title: "His No", field: "hisno", filterable: true, sortable: true, ascending: true },
  ];

  constructor(private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.dataService.getData<ResponseResult<PatientModel[]>>("Patient", "GetPatients").subscribe((result) => {
      this.patients = result.data;
    })
  }

  onItemClicked(item: PatientModel) {
    this.router.navigate(['/admin/main/patient-detail', { patient: JSON.stringify(item) }]);
  }

}
