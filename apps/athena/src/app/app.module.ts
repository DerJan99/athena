import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  AthleteService,
  AuthService,
  FrontendServicesModule,
} from '@athena/frontend/services';
import { FrontendUtilsModule } from '@athena/frontend/utils';
import { FrontendViewsModule } from '@athena/frontend/views';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  providers: [AuthService, AthleteService],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FrontendServicesModule,
    FrontendUtilsModule,
    FrontendViewsModule,
  ],
})
export class AppModule {}
