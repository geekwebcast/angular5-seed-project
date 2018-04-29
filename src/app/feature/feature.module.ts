import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'feature', loadChildren: 'app/feature/feature.module#FeatureModule'},
];

@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  declarations: [
    HomeComponent
],
exports: [RouterModule]
})
export class FeatureModule { }
