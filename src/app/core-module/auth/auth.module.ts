// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { AuthComponent } from './auth.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@app/core-module/auth/login/login.component';
import { ResetPasswordComponent } from '@app/core-module/auth/reset-password/reset-password.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'reset-password/:token', component: ResetPasswordComponent },
];
export const authRouter = RouterModule.forChild(routes );
@NgModule({
    imports: [
      authRouter
    ],
    declarations: [
      LoginComponent,
      ResetPasswordComponent
    ],
    exports: [
      RouterModule
    ]
})
export class AuthModule {

}
