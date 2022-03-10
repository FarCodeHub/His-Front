import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicalStaffModel } from 'src/app/models/medical-staff-model';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.scss']
})
export class DoctorDetailComponent implements OnInit {

  searchOptions = [
    { title: "In Clinic", icon: "hospital-2", selected: true },
    { title: "Telemedicine", icon: "whatsapp", selected: false },
    { title: "In Home", icon: "hospital-3", selected: false },
  ]

  detailOptions = [
    { title: "Detail", icon: "info-2", selected: true },
    { title: "Treatments", icon: "stethoscope", selected: false },
    { title: "Review", icon: "review", selected: false },
  ]

  doctor: MedicalStaffModel;

  constructor(private route: ActivatedRoute,) {
    this.doctor = JSON.parse(this.route.snapshot.params["doctor"]);
  }

  ngOnInit(): void {
  }

  onSearchOptionChanged(item: any) {

  }

}
