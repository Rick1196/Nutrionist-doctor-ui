import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './common/guards/auth.guard';
import { NotAuthGuard } from './common/guards/not-auth.guard';
import { IsDoctorGuard } from './common/guards/is-doctor.guard';
import { IsPatientGuard } from './common/guards/is-patient.guard';

const routes: Routes = [
  {
    path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
    canActivate: [NotAuthGuard]
  },
  {
    path: 'nutritionist', loadChildren: () => import('./modules/nutritionist/nutritionist.module')
      .then(m => m.NutritionistModule), canActivate: [AuthGuard, IsDoctorGuard]
  },
  { path: '', redirectTo: 'nutritionist/home', pathMatch: 'full', canActivate: [AuthGuard] },
  {
    path: 'patient', loadChildren: () => import('./modules/patients/patients.module').then(m => m.PatientsModule),
    canActivate: [AuthGuard, IsPatientGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
