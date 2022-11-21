import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { SprintComponent } from './sprint/sprint.component';
import { JumpComponent } from './jump/jump.component';
import { SwimComponent } from './swim/swim.component';
import { JumpRidingComponent } from './jump-riding/jump-riding.component';
import { LongJumpComponent } from './long-jump/long-jump.component';
import { FencingComponent } from './fencing/fencing.component';
import { MedalTableComponent } from './medal-table/medal-table.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    HomeComponent,
    TopMenuComponent,
    SprintComponent,
    JumpComponent,
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
    JumpComponent,
    SwimComponent,
    JumpRidingComponent,
    LongJumpComponent,
    FencingComponent,
    MedalTableComponent,
    LoginComponent,
  ],
})
export class FrontendViewsModule {}
