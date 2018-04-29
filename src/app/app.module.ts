import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from '@app/shared-module/shared-module.module';
import { appRouter } from '@app/app.router';
import { CoreModule } from '@app/core/core.module';
import { FormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptor } from '@app/utill/interceptors/http-interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    appRouter,
    CoreModule,
    SharedModuleModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClient,{
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
  }],
  exports: [FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
