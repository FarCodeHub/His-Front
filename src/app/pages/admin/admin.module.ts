import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule
} from "@angular/forms";

import { AdminRoutingModule } from './admin-routing.module';

import { PanelComponent } from 'src/app/Components/panel/panel.component';
import { CButtonComponent } from 'src/app/Components/c-button/c-button.component';
import { CGridComponent } from 'src/app/Components/c-grid/c-grid.component';
import { CInputComponent } from 'src/app/Components/c-input/c-input.component';
import { CSelectComponent } from 'src/app/Components/c-select/c-select.component';
import { FooterComponent } from 'src/app/Components/footer/footer.component';
import { NavBarComponent } from 'src/app/Components/nav-bar/nav-bar.component';
import { SideMenuComponent } from 'src/app/Components/side-menu/side-menu.component';
import { CMultiInputComponent } from 'src/app/components/c-multi-input/c-multi-input.component';
import { CTreeComponent } from 'src/app/components/c-tree/c-tree.component';
import { CRadioListComponent } from 'src/app/Components/c-radio-list/c-radio-list.component';
import { CToastComponent } from 'src/app/Components/c-toast/c-toast.component';
import { BModalComponent } from 'src/app/Components/b-modal/b-modal.component';

import { AddSectionComponent } from './add-section/add-section.component';
import { AddSpacialityComponent } from './add-spaciality/add-spaciality.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { AddUserComponent } from './add-user/add-user.component';
import { CenterInfoComponent } from './center/center-info/center-info.component';
import { CenterManagementComponent } from './center-management/center-management.component';
import { CenterSectionsComponent } from './center-sections/center-sections.component';
import { CenterStaffsComponent } from './center-staffs/center-staffs.component';
import { EditCenterComponent } from './center/edit-center/edit-center.component';
import { EditDoctorProfileComponent } from './doctor/edit-doctor-profile/edit-doctor-profile.component';
import { UsersComponent } from './users/users.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { PatientGeneralInfoComponent } from './patient-profile/patient-general-info/patient-general-info.component';
import { PatientVisitsComponent } from './patient-profile/patient-visits/patient-visits.component';
import { PatientDrugsComponent } from './patient-profile/patient-drugs/patient-drugs.component';
import { PatientLabResultsComponent } from './patient-profile/patient-lab-results/patient-lab-results.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { CentersListComponent } from './centers-list/centers-list.component';
import { AddCenterComponent } from './add-center/add-center.component';
import { PatientAttachFileComponent } from './patient-profile/patient-attach-file/patient-attach-file.component';
import { HttpClientModule } from '@angular/common/http';
import { BaseValuesComponent } from './base-values/base-values.component';
import { GeoLocationsComponent } from './geo-locations/geo-locations.component';
import { AddGeoLocationComponent } from './geo-locations/add-geo-location/add-geo-location.component';
import { AddBaseValueComponent } from './base-values/add-base-value/add-base-value.component';
import { SpecialitiesComponent } from './specialities/specialities.component';
import { AddSpecialityComponent } from './specialities/add-speciality/add-speciality.component';
import { SmsManagmentComponent } from './sms-managment/sms-managment.component';
import { BuyMessageComponent } from './sms-managment/buy-message/buy-message.component';
import { OperatorComponent } from './sms-managment/operator/operator.component';
import { SmsPriceComponent } from './sms-managment/sms-price/sms-price.component';
import { AddBuyMessageComponent } from './sms-managment/buy-message/add-buy-message/add-buy-message.component';
import { AddOperatorComponent } from './sms-managment/operator/add-operator/add-operator.component';
import { AddSmsPriceComponent } from './sms-managment/sms-price/add-sms-price/add-sms-price.component';
import { TranslocoRootModule } from 'src/app/transloco/transloco-root.module';
import { EditUserComponent } from './users/edit-user/edit-user.component';

@NgModule({
  declarations: [
    PanelComponent,
    CInputComponent,
    CSelectComponent,
    CGridComponent,
    CButtonComponent,
    CMultiInputComponent,
    BModalComponent,
    CTreeComponent,
    CRadioListComponent,
    CToastComponent,
    NavBarComponent,
    SideMenuComponent,
    FooterComponent,

    MainPageComponent,
    EditDoctorProfileComponent,
    EditCenterComponent,
    AddStaffComponent,
    CenterStaffsComponent,
    CenterManagementComponent,
    CenterInfoComponent,
    AddSpacialityComponent,
    AddSectionComponent,
    CenterSectionsComponent,
    AddUserComponent,
    UsersComponent,
    PatientProfileComponent,
    PatientGeneralInfoComponent,
    PatientVisitsComponent,
    PatientDrugsComponent,
    PatientLabResultsComponent,
    PatientListComponent,
    CentersListComponent,
    AddCenterComponent,
    PatientAttachFileComponent,
    BaseValuesComponent,
    GeoLocationsComponent,
    AddGeoLocationComponent,
    AddBaseValueComponent,
    SpecialitiesComponent,
    AddSpecialityComponent,
    SmsManagmentComponent,
    BuyMessageComponent,
    OperatorComponent,
    SmsPriceComponent,
    AddBuyMessageComponent,
    AddOperatorComponent,
    AddSmsPriceComponent,
    EditUserComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
    TranslocoRootModule,

  ],
  exports: [
    NavBarComponent,
    SideMenuComponent,
    FooterComponent,
    PanelComponent,
    CInputComponent,
    CSelectComponent,
    CGridComponent,
    CButtonComponent,
    CMultiInputComponent,
    BModalComponent,
    CTreeComponent,
    CRadioListComponent,
    CToastComponent,
  ]
})
export class AdminModule { }
