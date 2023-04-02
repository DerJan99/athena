import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FinalTableComponent } from './final-table/final-table.component';
import { TopMenuComponent } from './top-menu/top-menu.component';

import { MaterialModule } from './material.module';

@NgModule({
  imports: [MaterialModule, RouterLink, FormsModule, CommonModule],
  exports: [FinalTableComponent, TopMenuComponent],
  declarations: [FinalTableComponent, TopMenuComponent],
})
export class FrontendUtilsModule {}
