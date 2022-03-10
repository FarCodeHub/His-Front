import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth-guard.service';
import { SelectRoleComponent } from './pages/admin/select-role/select-role.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'select-role/:user', component: SelectRoleComponent, canActivate: [AuthGuard] },
  { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) },
  { path: '', loadChildren: () => import('./pages/portal/portal.module').then(m => m.PortalModule) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
