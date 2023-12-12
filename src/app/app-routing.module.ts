import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent, ResetPasswordFormComponent, CreateAccountFormComponent, ChangePasswordFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import {  } from './pages/tasks/tasks.component';
import { DxButtonModule, DxContextMenuModule, DxPopupModule, DxTextBoxModule } from 'devextreme-angular';
import { DxDropDownButtonModule } from 'devextreme-angular';
import { DxSelectBoxModule } from 'devextreme-angular';
import { DxScrollViewModule } from 'devextreme-angular';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TestComponent } from './pages/test/test.component';

const routes: Routes = [
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'test',
    component: TestComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: '**',
    redirectTo: 'home'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), DxDataGridModule, DxFormModule,DxButtonModule, DxDropDownButtonModule,DxSelectBoxModule,DxScrollViewModule,CommonModule,DxContextMenuModule,DxTextBoxModule,ReactiveFormsModule,DxPopupModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    ProfileComponent,
    TasksComponent,
    TestComponent,
  ]
})
export class AppRoutingModule { }
