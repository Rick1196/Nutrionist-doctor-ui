import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './comps/login/login.component';
import { RegisterComponent } from './comps/register/register.component';
import { VerificationFormComponent } from './comps/verification-form/verification-form.component';
import { ChangeComponent } from './comps/change/change.component';
const routes: Routes = [
  {
    path: '', children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'verify', component: VerificationFormComponent },
      { path: 'change-password', component: ChangeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
