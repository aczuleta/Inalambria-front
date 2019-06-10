import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

import {routes} from './auth.routing';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
    declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent],
    imports: [
      CommonModule, RouterModule.forChild(routes), SharedModule
    ],
    providers: []
  })
export default class AdminModule {
}
