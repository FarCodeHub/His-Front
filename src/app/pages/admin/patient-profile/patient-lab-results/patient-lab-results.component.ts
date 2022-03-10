import { Component, Input, OnInit } from '@angular/core';
import { PatientModel } from 'src/app/models/patient-model';

@Component({
  selector: 'app-patient-lab-results',
  templateUrl: './patient-lab-results.component.html',
  styleUrls: ['./patient-lab-results.component.scss']
})
export class PatientLabResultsComponent implements OnInit {

  @Input()
  patient: PatientModel;

  constructor() { }

  ngOnInit(): void {
  }

}
