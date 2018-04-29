import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@app/core/auth/login/login.component';
import { RegisterComponent } from '@app/core/auth/register/register.component';
import { ResetPasswordComponent } from '@app/core/auth/reset-password/reset-password.component';

const coreRoutes: Routes = [
 {
  path: '',
  children:[
    {
      path: '',
      loadChildren:  'app/core/auth/auth.module#AuthModule'
    },
]}];
@NgModule({
  imports: [RouterModule.forChild(coreRoutes)],
  exports: [RouterModule]
})
export class CoreModuleRoutingModule { }
