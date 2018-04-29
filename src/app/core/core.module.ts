import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModuleRoutingModule } from '@app/core/core-routing.module';


@NgModule({
  imports: [
    CommonModule,
    CoreModuleRoutingModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class CoreModule { }
