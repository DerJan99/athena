import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FencingComponent } from './fencing/fencing.component';
import { HomeComponent } from './home/home.component';
import { JumpRidingComponent } from './jump-riding/jump-riding.component';
import { LoginComponent } from './login/login.component';
import { LongJumpComponent } from './long-jump/long-jump.component';
import { MaterialModule } from './material.module';
import { MedalTableComponent } from './medal-table/medal-table.component';
import { SprintComponent } from './sprint/sprint.component';
import { SwimComponent } from './swim/swim.component';
import { TopMenuComponent } from './top-menu/top-menu.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [
    HomeComponent,
    TopMenuComponent,
    SprintComponent,
    SwimComponent,
    JumpRidingComponent,
    LongJumpComponent,
    FencingComponent,
    MedalTableComponent,
    LoginComponent,
  ],
  exports: [
    HomeComponent,
    TopMenuComponent,
    SprintComponent,
    SwimComponent,
    JumpRidingComponent,
    LongJumpComponent,
    FencingComponent,
    MedalTableComponent,
    LoginComponent,
  ],
})
export class FrontendViewsModule {}
