import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientModel } from 'src/app/models/patient-model';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.scss']
})
export class PatientProfileComponent implements OnInit {

  page: number = 0;
  patient: PatientModel;

  constructor(private route: ActivatedRoute) {
    this.patient = JSON.parse(this.route.snapshot.params["patient"]);
  }

  ngOnInit(): void {
  }

  setPage(page: number) {
    this.page = page;
  }
}
