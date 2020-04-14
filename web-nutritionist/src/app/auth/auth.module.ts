import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModulesModule} from '../material-modules/material-modules.module'
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './comps/login/login.component';
import { RegisterComponent } from './comps/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModulesModule,FormsModule, ReactiveFormsModule
  ]
})
export class AuthModule { }
