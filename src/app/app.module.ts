import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { JwtInterceptor } from './core/interceptors/jwt-interceptor ';
import { ErrorInterceptor } from './core/interceptors/error-interceptor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslocoRootModule } from './transloco/transloco-root.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { GlobalService } from './core/services/global.service';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { SelectRoleComponent } from './pages/admin/select-role/select-role.component';
import { AdminModule } from './pages/admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SelectRoleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AdminModule,
    TranslocoRootModule,
    NgbModule,
 
  ],
  providers: [

    GlobalService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
