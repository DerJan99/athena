import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  FencingComponent,
  FencingRefComponent,
  HomeComponent,
  JumpRidingComponent,
  LoginComponent,
  LongJumpComponent,
  SprintComponent,
  SwimComponent,
  UserManagementComponent,
} from '@athena/frontend/views';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'userManagement', component: UserManagementComponent},
  {path: 'fencing', component: FencingComponent},
  {path: 'fencing/fencing-ref', component: FencingRefComponent},
  {path: 'sprint', component: SprintComponent},
  {path: 'long-jump', component: LongJumpComponent},
  {path: 'swimming', component: SwimComponent},
  {path: 'jump-riding', component: JumpRidingComponent},
  {path: 'fencing', component: FencingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
