import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { DataService } from 'src/app/core/services/data.service';
import { GlobalService } from 'src/app/core/services/global.service';
import { MedicalCenterModel } from 'src/app/models/medical-center-model';
import { UserModel } from 'src/app/models/user-model';

@Component({
  selector: 'app-select-role',
  templateUrl: './select-role.component.html',
  styleUrls: ['./select-role.component.scss']
})
export class SelectRoleComponent implements OnInit {

  constructor(private router: Router,
    private dataService: DataService,
    private route: ActivatedRoute,
    private globalService: GlobalService) {

    this.usr = JSON.parse(this.route.snapshot.params["user"]);
    this.user = this.usr;
  }
  user: UserModel;
  usr: any;
  medicalCenters: MedicalCenterModel[];


  ngOnInit(): void {
    this.usr.roles.some(item =>  {
      if (item.roleId ==2)
      this.router.navigate(['/admin/main/centers-list']);
    })


    this.dataService.getDataByParam("personId", this.user.personId, "MedicalCenter", "GetMedicalCentersBy").subscribe((result) => {
      this.medicalCenters = result.data;
    })


  }


  openCenter(center: MedicalCenterModel) {
    this.globalService.setCenter(center);
    this.router.navigate(['/admin/main/center'])

  }

  signout() {
    this.router.navigate(['/login'])
  }
}
