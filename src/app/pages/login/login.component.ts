import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { GlobalService } from 'src/app/core/services/global.service';
import { BaseValue } from 'src/app/models/base-value';
import { RoleModel } from 'src/app/models/role-model';
import { UserModel } from 'src/app/models/user-model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  roles: RoleModel[];
  user: UserModel = <UserModel>{ userName: "", password: "" };
  cookieValue: string;
  baseValue: BaseValue[];
  statusResult:number = 2;

  constructor(private router: Router,
    private authenticationService: AuthenticationService,
    private transloco: TranslocoService,
    private globalService: GlobalService) { }



  public setActiveLang(lang: string) {
    this.transloco.setActiveLang(lang);
  }


  ngOnInit(): void {

  }

  login() {
    this.authenticationService.login(this.user).subscribe((result) => {

      this.statusResult = result.status;
      if (this.statusResult == 2)
      {
      this.globalService.loadBaseValue().then(x => {
        this.globalService.setAdminProfile(result.data)
        this.router.navigate(['/select-role', JSON.stringify(this.user = result.data)]);
      });
    }


    })


  }

}
