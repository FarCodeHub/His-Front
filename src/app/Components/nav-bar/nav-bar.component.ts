import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { GlobalService } from 'src/app/core/services/global.service';
import { UserModel } from 'src/app/models/user-model';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss', '../../../../node_modules/flag-icon-css/css/flag-icon.min.css']
})
export class NavBarComponent implements OnInit {
   user :UserModel;
  fullScreen: boolean = false;
  baseUrl: String = `${environment.baseUrl}`;
  constructor(private router: Router,
    public globalService: GlobalService,
    private authenticationService: AuthenticationService,
    private transloco: TranslocoService) { }

  ngOnInit(): void {
    this.user = this.globalService.loadAdminProfile();
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }

  public setActiveLang(lang: string) {
    this.transloco.setActiveLang(lang);
  }

}
