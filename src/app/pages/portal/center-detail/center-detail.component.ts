import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicalCenterModel } from 'src/app/models/medical-center-model';

@Component({
  selector: 'app-center-detail',
  templateUrl: './center-detail.component.html',
  styleUrls: ['./center-detail.component.scss']
})
export class CenterDetailComponent implements OnInit {
  searchOptions = [
    { title: "In Clinic", icon: "hospital", selected: true },
    { title: "Telemedicine", icon: "phone-square", selected: false },
    { title: "In Home", icon: "clinic-medical", selected: false },
  ]

  detailOptions = [
    { title: "Detail", icon: "info-circle", selected: true },
    { title: "Treatments", icon: "stethoscope", selected: false },
    { title: "Review", icon: "comment-alt", selected: false },
  ]

  center: MedicalCenterModel;

  constructor(private route: ActivatedRoute,) {
    this.center = JSON.parse(this.route.snapshot.params["center"]);
  }

  ngOnInit(): void {
  }
  onSearchOptionChanged(item: any) {

  }
}
