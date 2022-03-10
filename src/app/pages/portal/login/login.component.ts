import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { DataService } from 'src/app/core/services/data.service';
import { GlobalService } from 'src/app/core/services/global.service';
import { UserModel } from 'src/app/models/user-model';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 statusResult :number = 2;

  @Input()
  modalRef: NgbModalRef;

  user: UserModel = <UserModel>{
    userName: "",
    password: ""
  }
  constructor(private router: Router,
    private authenticationService: AuthenticationService,
    private main: MainComponent,
    private globalService: GlobalService) { }

  ngOnInit(): void {

  }

  login() {

    this.authenticationService.loginPatient(this.user).subscribe((result) => {
      this.statusResult = result.status;
      if (result.status == 2)
      this.globalService.loadBaseValue().then(x => {
        this.globalService.setPatientProfile(result.data)
        this.main.closeLogin();
        this.router.navigate(['/profile/dashboard']);
      });
     // else

    });

  }

}
