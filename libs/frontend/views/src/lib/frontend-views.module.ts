import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FrontendUtilsModule } from '@athena/frontend/utils';

import { FencingComponent } from './fencing/fencing.component';
import { HomeComponent } from './home/home.component';
import { JumpRidingComponent } from './jump-riding/jump-riding.component';
import { LoginComponent } from './login/login.component';
import { LongJumpComponent } from './long-jump/long-jump.component';
import { MaterialModule } from './material.module';
import { MedalTableComponent } from './medal-table/medal-table.component';
import { SprintComponent } from './sprint/sprint.component';
import { SwimComponent } from './swim/swim.component';
import { UserManagementComponent } from './user-management/user-management.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    FrontendUtilsModule,
  ],
  declarations: [
    HomeComponent,
    SprintComponent,
    SwimComponent,
    JumpRidingComponent,
    LongJumpComponent,
    FencingComponent,
    MedalTableComponent,
    LoginComponent,
    UserManagementComponent,
  ],
  exports: [
    HomeComponent,
    SprintComponent,
    SwimComponent,
    JumpRidingComponent,
    LongJumpComponent,
    FencingComponent,
    MedalTableComponent,
    LoginComponent,
    UserManagementComponent,
  ],
})
export class FrontendViewsModule {}
