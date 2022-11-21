import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { SprintComponent } from './sprint/sprint.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HomeComponent, TopMenuComponent, SprintComponent],
  exports: [HomeComponent, TopMenuComponent, SprintComponent],
})
export class FrontendViewsModule {}
