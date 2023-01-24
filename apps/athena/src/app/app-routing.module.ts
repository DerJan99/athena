import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  FencingComponent,
  FencingRefComponent,
  HomeComponent,
  LoginComponent,
  UserManagementComponent,
} from '@athena/frontend/views';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'userManagement', component: UserManagementComponent },
  { path: 'fencing', component: FencingComponent },
  { path: 'fencing/fencing-ref', component: FencingRefComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
