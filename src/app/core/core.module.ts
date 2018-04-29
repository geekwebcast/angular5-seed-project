import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModuleRoutingModule } from '@app/core/core-routing.module';
import { AuthModule } from '@app/core/auth/auth.module';
import { AppModule } from '@app/app.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModuleRoutingModule,
    AuthModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class CoreModule { }
