import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModuleRoutingModule } from '@app/core-module/core-module-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    CoreModuleRoutingModule
  ],
  exports: [
    CoreModuleModule,
    RouterModule
  ],
  declarations: []
})
export class CoreModuleModule { }
