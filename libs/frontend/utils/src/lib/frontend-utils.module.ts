import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TopMenuComponent } from './top-menu/top-menu.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';
import { StatisticTableComponent } from './statistic-table/statistic-table.component';
import {MatTableModule} from "@angular/material/table";

@NgModule({
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule, MatTableModule,],
  declarations: [TopMenuComponent, FooterComponent, StatisticTableComponent,],
  exports: [TopMenuComponent, FooterComponent, StatisticTableComponent,],
})
export class FrontendUtilsModule {}
