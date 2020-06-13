import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './common/guards/auth.guard';
import { NotAuthGuard } from './common/guards/not-auth.guard';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule), canActivate: [NotAuthGuard] },
  { path: 'nutritionist', loadChildren: () => import('./modules/nutritionist/nutritionist.module').then(m => m.NutritionistModule), canActivate: [AuthGuard] },
  { path: '', redirectTo: 'nutritionist/home', pathMatch: 'full', canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
