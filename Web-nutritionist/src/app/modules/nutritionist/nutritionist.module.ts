import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NutritionistRoutingModule } from './nutritionist-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { PacientsCardComponent } from './components/pacients-card/pacients-card.component';
import { ConsultationsCardComponent } from './components/consultations-card/consultations-card.component';
import { GraphsCardComponent } from './components/graphs-card/graphs-card.component';
import { MenuCardComponent } from './components/menu-card/menu-card.component';
import { EquivalentsCardComponent } from './components/equivalents-card/equivalents-card.component';
import { FoodsCardComponent } from './components/foods-card/foods-card.component';
import { DiaryCardComponent } from './components/diary-card/diary-card.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PatientsComponent } from './pages/patients/patients.component';


@NgModule({
  declarations: [HomeComponent, ProfileCardComponent, PacientsCardComponent, ConsultationsCardComponent, GraphsCardComponent, MenuCardComponent, EquivalentsCardComponent, FoodsCardComponent, DiaryCardComponent, ProfileComponent, PatientsComponent],
  imports: [
    CommonModule,
    NutritionistRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class NutritionistModule { }
