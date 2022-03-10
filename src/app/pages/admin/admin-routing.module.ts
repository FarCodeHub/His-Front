import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth-guard.service';
import { AddUserComponent } from './add-user/add-user.component';
import { BaseValuesComponent } from './base-values/base-values.component';
import { CenterManagementComponent } from './center-management/center-management.component';
import { EditCenterComponent } from './center/edit-center/edit-center.component';
import { CentersListComponent } from './centers-list/centers-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GeoLocationsComponent } from './geo-locations/geo-locations.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { SmsManagmentComponent } from './sms-managment/sms-managment.component';
import { SpecialitiesComponent } from './specialities/specialities.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/main/users', pathMatch: 'full'
  },

  {
    path: 'main', component: MainPageComponent, children: [

      {
        path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]
      },
      {
        path: 'center', component: CenterManagementComponent, canActivate: [AuthGuard]
      },
      {
        path: 'users', component: UsersComponent, canActivate: [AuthGuard]
      },
      {
        path: 'addUser', component: AddUserComponent, canActivate: [AuthGuard]
      },
      {
        path: 'patients', component: PatientListComponent, canActivate: [AuthGuard]
      },
      {
        path: 'patient-detail', component: PatientProfileComponent, canActivate: [AuthGuard]
      },
      {
        path: 'centers-list', component: CentersListComponent, canActivate: [AuthGuard]
      },
      {
        path: 'geolocations', component: GeoLocationsComponent, canActivate: [AuthGuard]
      },
      {
        path: 'base-values', component: BaseValuesComponent, canActivate: [AuthGuard]
      },
      {
        path: 'expertises', component: SpecialitiesComponent, canActivate: [AuthGuard]
      },
      {
        path: 'sms', component: SmsManagmentComponent, canActivate: [AuthGuard]
      },
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
