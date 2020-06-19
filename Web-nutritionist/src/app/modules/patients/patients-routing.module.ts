import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShceduleComponent } from './pages/shcedule/shcedule.component';


const routes: Routes = [
  {
    path: '', children: [
      { path: 'home', component: ShceduleComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
