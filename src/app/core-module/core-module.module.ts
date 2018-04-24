import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModuleRoutingModule } from '@app/core-module/core-module-routing.module';



@NgModule({
  imports: [
    CommonModule,
    CoreModuleRoutingModule
  ],
  exports: [
    CoreModuleModule
  ],
  declarations: []
})
export class CoreModuleModule { }
