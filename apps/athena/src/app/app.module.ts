/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FrontendServicesModule} from '@athena/frontend/services';
import {FrontendUtilsModule} from '@athena/frontend/utils';
import {FrontendViewsModule, MaterialModule} from '@athena/frontend/views';
import {AthleteService} from 'libs/frontend/services/src/lib/services/athlete.service';
import {AuthService} from 'libs/frontend/services/src/lib/services/auth.service';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [AppComponent],
  providers: [AuthService, AthleteService],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FrontendServicesModule,
    FrontendUtilsModule,
    FrontendViewsModule,
  ],
})
export class AppModule {
}
