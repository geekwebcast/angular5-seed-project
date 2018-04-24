import { HeaderComponent } from './layouts/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModuleRoutingModule } from '@app/shared-module/shared-module-routing.module';
import { FooterComponent } from '@app/shared-module/layouts/footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModuleRoutingModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModuleModule { }
