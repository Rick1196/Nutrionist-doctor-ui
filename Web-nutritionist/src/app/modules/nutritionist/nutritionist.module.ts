import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import localeEs from '@angular/common/locales/es';
import { EventFormComponent } from './components/event-form/event-form.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';


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
import { DiaryComponent } from './pages/diary/diary.component';
import { CalendarComponent } from './components/calendar/calendar.component';

registerLocaleData(localeEs);

@NgModule({
  declarations: [HomeComponent, ProfileCardComponent,
    PacientsCardComponent, ConsultationsCardComponent,
    GraphsCardComponent, MenuCardComponent, EquivalentsCardComponent,
    FoodsCardComponent, DiaryCardComponent, ProfileComponent, PatientsComponent,
    DiaryComponent, CalendarComponent, EventFormComponent],
  imports: [
    CommonModule,
    NutritionistRoutingModule, FormsModule, ReactiveFormsModule, FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    AutocompleteLibModule
  ]
})
export class NutritionistModule { }
