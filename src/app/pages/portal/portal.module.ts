import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { MainComponent } from './main/main.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TermsComponent } from './sign-up/terms/terms.component';
import { ConfirmCodeComponent } from './sign-up/confirm-code/confirm-code.component';
import { ActivateComponent } from './sign-up/activate/activate.component';
import { FinishComponent } from './sign-up/finish/finish.component';
import { PhoneNumberComponent } from './sign-up/phone-number/phone-number.component';
import { CDigitInputComponent } from 'src/app/components/c-digit-input/c-digit-input.component';
import { FormsModule } from '@angular/forms';
import { AdminModule } from '../admin/admin.module';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { CFilterPanelComponent } from 'src/app/components/c-filter-panel/c-filter-panel.component';
import { CToggleButtonComponent } from 'src/app/components/c-toggle-button/c-toggle-button.component';
import { PluckPipe } from 'src/app/core/pipes/pluck.pipe';
import { DoctorDetailComponent } from './doctor-detail/doctor-detail.component';
import { MainSearchTemplateComponent } from './main-search-template/main-search-template.component';
import { CPhoneInputComponent } from 'src/app/components/c-phone-input/c-phone-input.component';
import { CenterListComponent } from './center-list/center-list.component';
import { CenterDetailComponent } from './center-detail/center-detail.component';
import { ProfileMainPageComponent } from './profile-main-page/profile-main-page.component';
import { LoginComponent } from './login/login.component';
import { PortalSideMenuComponent } from 'src/app/components/portal-side-menu/portal-side-menu.component';
import { PortalNavBarComponent } from 'src/app/components/portal-nav-bar/portal-nav-bar.component';
import { ProfileDashboardComponent } from './profile-dashboard/profile-dashboard.component';
import { ParallaxDirective } from 'src/app/core/directives/parallax.directive';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ProfileVisitListComponent } from './profile-visit-list/profile-visit-list.component';
import { ProfileFilesComponent } from './profile-files/profile-files.component';
import { ProfileTestResultsComponent } from './profile-test-results/profile-test-results.component';
import { TranslocoRootModule } from 'src/app/transloco/transloco-root.module';
import { DrugDetailComponent } from './profile-visit-list/drug-detail/drug-detail.component';
import { LabListComponent } from './lab-list/lab-list.component';
import { PharmaciesListComponent } from './pharmacies-list/pharmacies-list.component';
import { RadiologiesListComponent } from './radiologies-list/radiologies-list.component';
import { TestResultComponent } from './test-result/test-result.component';



@NgModule({
  declarations: [
    CDigitInputComponent,
    CToggleButtonComponent,
    CFilterPanelComponent,
    CPhoneInputComponent,
    PortalSideMenuComponent,
    PortalNavBarComponent,
    PluckPipe,
    ParallaxDirective,

    MainComponent,
    SignUpComponent,
    PhoneNumberComponent,
    TermsComponent,
    ConfirmCodeComponent,
    ActivateComponent,
    FinishComponent,
    DoctorListComponent,
    DoctorDetailComponent,
    MainSearchTemplateComponent,
    CenterListComponent,
    CenterDetailComponent,
    ProfileMainPageComponent,
    LoginComponent,
    ProfileDashboardComponent,
    ProfileInfoComponent,
    ProfileVisitListComponent,
    ProfileFilesComponent,
    ProfileTestResultsComponent,
    DrugDetailComponent,
    LabListComponent,
    PharmaciesListComponent,
    RadiologiesListComponent,
    TestResultComponent,
  ],
  imports: [
    CommonModule,
    PortalRoutingModule,
    FormsModule,
    AdminModule,
    TranslocoRootModule,
  ],
  exports: [
    CDigitInputComponent
  ]
})
export class PortalModule { }
