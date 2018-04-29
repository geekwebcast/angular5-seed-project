// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { AuthComponent } from './auth.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@app/core/auth/login/login.component';
import { ResetPasswordComponent } from '@app/core/auth/reset-password/reset-password.component';
import { RegisterComponent } from '@app/core/auth/register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '@app/core/auth/auth.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
];
export const authRouter = RouterModule.forChild(routes );
@NgModule({
    imports: [
      authRouter,
      FormsModule
    ],
    declarations: [
      AuthComponent,
      LoginComponent,
      ResetPasswordComponent,
      RegisterComponent
    ],
    providers: [AuthService],
    exports: [
      RouterModule
    ]
})
export class AuthModule {

}
