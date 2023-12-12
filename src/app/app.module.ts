import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, ResetPasswordFormModule, CreateAccountFormModule, ChangePasswordFormModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { UnauthenticatedContentModule } from './unauthenticated-content';
import { AppRoutingModule } from './app-routing.module';
import { TestComponent } from './pages/test/test.component';
import { Test1Component } from './test1/test1.component';
// import { TestmessageComponent } from './shared/components/testmessage/testmessage.component';
import { DxButtonModule, DxContextMenuModule, DxTextBoxModule } from 'devextreme-angular';
import { DxDropDownButtonModule } from 'devextreme-angular';
import { DxSelectBoxModule } from 'devextreme-angular';
import { DxScrollViewModule } from 'devextreme-angular';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    ResetPasswordFormModule,
    CreateAccountFormModule,
    ChangePasswordFormModule,
    LoginFormModule,
    UnauthenticatedContentModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DxDataGridModule, DxFormModule,DxButtonModule, DxDropDownButtonModule,DxSelectBoxModule,DxScrollViewModule,DxContextMenuModule,DxTextBoxModule
  ],
  providers: [
    AuthService,
    ScreenService,
    AppInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
