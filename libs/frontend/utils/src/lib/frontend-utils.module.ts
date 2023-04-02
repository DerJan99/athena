import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {FinalTableComponent} from './final-table/final-table.component';
import {TopMenuComponent} from "./top-menu/top-menu.component";
import {RouterLink} from "@angular/router";

const modules = [
  CommonModule,
  MatButtonModule,
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatFormFieldModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatProgressBarModule,
  MatTooltipModule,
  MatListModule,
  MatToolbarModule,
  MatSidenavModule,
  MatExpansionModule,
  MatSnackBarModule,
  MatChipsModule,
  MatDialogModule,
  MatOptionModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatBadgeModule,
  MatMenuModule,
  MatTreeModule,
  MatButtonToggleModule,
  MatStepperModule,
  MatSliderModule,
  MatGridListModule,
  FormsModule,
];

@NgModule({
  imports: [...modules, RouterLink],
  exports: [...modules, FinalTableComponent, TopMenuComponent],
  declarations: [FinalTableComponent, TopMenuComponent],
})
export class FrontendUtilsModule {
}
