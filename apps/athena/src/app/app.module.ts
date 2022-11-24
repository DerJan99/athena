import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FrontendServicesModule } from '@athena/frontend/services';
import { FrontendViewsModule } from '@athena/frontend/views';
import { AuthService } from 'libs/frontend/views/src/lib/login/auth.service';

import { MaterialModule } from '../../../../libs/frontend/views/src/lib/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
