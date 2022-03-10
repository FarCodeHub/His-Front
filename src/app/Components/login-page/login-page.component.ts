import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user-model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {


  @Input()
  username = "";
  password = "";

  constructor(private _service: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }



  login(username: string, password: string) {
    this._service.login(<UserModel>{ userName: username, password: password }).subscribe((data) => {
      //  this.userModel = data;
      this.router.navigateByUrl('/select-role');
    });
  }


}
