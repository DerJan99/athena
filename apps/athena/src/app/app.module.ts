/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FrontendServicesModule } from '@athena/frontend/services';
import { FrontendViewsModule, MaterialModule } from '@athena/frontend/views';
import { AuthService } from 'libs/frontend/services/src/lib/services/auth.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FrontendUtilsModule} from "@athena/frontend/utils";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FrontendViewsModule,
    MaterialModule,
    HttpClientModule,
    FrontendServicesModule,
    FrontendUtilsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
