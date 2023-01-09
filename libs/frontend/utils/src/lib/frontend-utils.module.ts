import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";

import {TopMenuComponent} from "./top-menu/top-menu.component";

import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    MatButtonModule,
    MatIconModule
  ],
  declarations: [TopMenuComponent],
  exports: [TopMenuComponent],
})
export class FrontendUtilsModule {}
