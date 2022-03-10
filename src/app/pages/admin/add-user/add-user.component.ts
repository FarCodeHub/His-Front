import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CToastComponent } from 'src/app/Components/c-toast/c-toast.component';
import { DataService } from 'src/app/core/services/data.service';
import { MedicalCenterModel } from 'src/app/models/medical-center-model';
import { MedicalStaffModel } from 'src/app/models/medical-staff-model';

import { UserModel } from 'src/app/models/user-model';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  persons: MedicalStaffModel[];
  @ViewChild('toast')
  toast: CToastComponent;
  // @Input()
  // user: UserModel;
  @Input()
   medicalCenter: MedicalCenterModel



  user: UserModel = <UserModel> { fullName: "", userName: "", mobile: "", nationalCode: ""};


  constructor(private dataService: DataService ,private usersComponent: UsersComponent) {
  }

  ngOnInit(): void {

    this.dataService.getDataByParam("centerId", this.medicalCenter.id, "Account", "GetPersonsBy").subscribe((result) => {
      this.persons = result.data;
    })

  }

  addUser(value) {

    this.dataService.postJsonData(value, "User", "AddUser").subscribe((result) => {
      this.usersComponent.closeAddUser();
      this.usersComponent.addToGrid(result.data);
      this.toast.show();
      return;
    })
  }
}
