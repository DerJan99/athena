import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TestService} from "./services/test.service";

@NgModule({
  imports: [CommonModule],
  providers: [
    TestService
  ],
  exports: []
})
export class FrontendServicesModule {}
