import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {FooterComponent, FrontendUtilsModule, StatisticTableComponent,} from '@athena/frontend/utils';
import {FencingRefComponent} from './fencing-ref/fencing-ref.component';
import {FencingComponent} from './fencing/fencing.component';
import {TtMatchComponent} from './fencing/tt-match/tt-match.component';
import {HomeComponent} from './home/home.component';
import {JumpRidingComponent} from './jump-riding/jump-riding.component';
import {LoginComponent} from './login/login.component';
import {LongJumpComponent} from './long-jump/long-jump.component';
import {MaterialModule} from './material.module';
import {MedalTableComponent} from './medal-table/medal-table.component';
import {SprintComponent} from './sprint/sprint.component';
import {SwimComponent} from './swim/swim.component';
import {UserManagementComponent} from './user-management/user-management.component';

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    SprintComponent,
    SwimComponent,
    JumpRidingComponent,
    LongJumpComponent,
    FencingComponent,
    FencingRefComponent,
    MedalTableComponent,
    LoginComponent,
    UserManagementComponent,
    StatisticTableComponent,
    TtMatchComponent,
  ],
  exports: [
    HomeComponent,
    FooterComponent,
    SprintComponent,
    SwimComponent,
    JumpRidingComponent,
    LongJumpComponent,
    FencingComponent,
    FencingRefComponent,
    MedalTableComponent,
    LoginComponent,
    UserManagementComponent,
    StatisticTableComponent,
    TtMatchComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    FrontendUtilsModule,
  ],
})
export class FrontendViewsModule {
}
