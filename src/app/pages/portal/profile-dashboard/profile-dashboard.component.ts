import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { PatientModel } from 'src/app/models/patient-model';
import { environment } from 'src/environments/environment';
import { GlobalService } from '../../../core/services/global.service';

@Component({
  selector: 'app-profile-dashboard',
  templateUrl: './profile-dashboard.component.html',
  styleUrls: ['./profile-dashboard.component.scss']
})
export class ProfileDashboardComponent implements OnInit {

  baseUrl: String = `${environment.baseUrl}`;

  @Input()
  patient: PatientModel;

  constructor(private router: Router, private route: ActivatedRoute, private auth: AuthenticationService, public globalService: GlobalService) {

  }

  ngOnInit(): void {
    this.patient = this.auth.loadCurrentPatient();
  }

  nagivateProfileInfo() {
    this.router.navigateByUrl("/profile/info")
  }

  search() {

  }

  setActiveLang(lang: string) { this.globalService.setActiveLang(lang); }
}
