import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { GlobalService } from 'src/app/core/services/global.service';
import { PatientModel } from 'src/app/models/patient-model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-portal-nav-bar',
  templateUrl: './portal-nav-bar.component.html',
  styleUrls: ['./portal-nav-bar.component.scss']
})
export class PortalNavBarComponent implements OnInit {

  baseUrl: String = `${environment.baseUrl}`;
  fullScreen: boolean = false;

  patient:PatientModel;

  @Input()
  collapsed: boolean = false;
  @Output()
  collapsedChange = new EventEmitter<boolean>();

  constructor(private router: Router,
    private authenticationService: AuthenticationService,
    private transloco: TranslocoService , public globalService : GlobalService) { }


 
  ngOnInit(): void {
    this.patient = this.globalService.loadPatientProfile();
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }

  setActiveLang(lang: string) {
    this.globalService.setActiveLang(lang);
  }

  onMenuBarClicked() {
    this.collapsed = !this.collapsed;
    this.collapsedChange.emit(this.collapsed);
  }
}
