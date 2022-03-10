import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CenterDetailComponent } from './center-detail/center-detail.component';
import { CenterListComponent } from './center-list/center-list.component';
import { DoctorDetailComponent } from './doctor-detail/doctor-detail.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { LabListComponent } from './lab-list/lab-list.component';
import { MainComponent } from './main/main.component';
import { PharmaciesListComponent } from './pharmacies-list/pharmacies-list.component';
import { ProfileDashboardComponent } from './profile-dashboard/profile-dashboard.component';
import { ProfileFilesComponent } from './profile-files/profile-files.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ProfileMainPageComponent } from './profile-main-page/profile-main-page.component';
import { ProfileTestResultsComponent } from './profile-test-results/profile-test-results.component';
import { ProfileVisitListComponent } from './profile-visit-list/profile-visit-list.component';
import { RadiologiesListComponent } from './radiologies-list/radiologies-list.component';

const routes: Routes = [
  {
    path: '', component: MainComponent
  },
  {
    path: 'doctors', component: DoctorListComponent
  },
  {
    path: 'doctor-detail', component: DoctorDetailComponent
  },
  {
    path: 'centers', component: CenterListComponent
  },
  {
    path: 'labs', component: LabListComponent
  },
  {
    path: 'pharmacies', component: PharmaciesListComponent
  },
  {
    path: 'radiologies', component: RadiologiesListComponent
  },
  {
    path: 'center-detail', component: CenterDetailComponent
  },
  {
    path: 'profile', component: ProfileMainPageComponent, children: [

      {
        path: 'dashboard', component: ProfileDashboardComponent
      },
      {
        path: 'info', component: ProfileInfoComponent
      },
      {
        path: 'visits', component: ProfileVisitListComponent
      },
      {
        path: 'files', component: ProfileFilesComponent
      },
      {
        path: 'test-results', component: ProfileTestResultsComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
