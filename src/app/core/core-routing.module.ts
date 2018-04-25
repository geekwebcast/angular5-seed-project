import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const coreRoutes: Routes = [
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  // { path: 'account', loadChildren: './account/account.module#AccountModule'},
];
@NgModule({
  imports: [RouterModule.forChild(coreRoutes)],
  exports: [RouterModule]
})
export class CoreModuleRoutingModule { }
