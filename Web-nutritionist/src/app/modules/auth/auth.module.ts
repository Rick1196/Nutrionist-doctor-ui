import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './comps/register/register.component';
import { LoginComponent } from './comps/login/login.component';
import { RegisterFormComponent } from './comps/register-form/register-form.component';
import { VerificationFormComponent } from './comps/verification-form/verification-form.component';


@NgModule({
  declarations: [RegisterComponent, LoginComponent, RegisterFormComponent, VerificationFormComponent],
  imports: [
    CommonModule,
    AuthRoutingModule, ReactiveFormsModule, FormsModule
  ]
})
export class AuthModule { }
