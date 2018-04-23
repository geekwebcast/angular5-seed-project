import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SharedModuleModule } from '@app/shared-module/shared-module.module';
import { AuthModule } from '@app/core-module/auth/auth.module';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    rootRouting,
    AuthModule,
    SharedModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
