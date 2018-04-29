import { HeaderComponent } from './layouts/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModuleRoutingModule } from '@app/shared-module/shared-module-routing.module';
import { FooterComponent } from '@app/shared-module/layouts/footer/footer.component';
import { LoaderService } from '@app/shared-module/sharedServices/loader.service';
import { LoaderDirective } from '@app/shared-module/directives/loader.directive';



@NgModule({
  imports: [
    CommonModule,
    SharedModuleRoutingModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoaderDirective   
],
providers: [LoaderService],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoaderDirective
  ]
})
export class SharedModuleModule { }
