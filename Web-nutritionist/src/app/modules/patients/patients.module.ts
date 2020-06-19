import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

import { SharedModule } from '../../common/shared/shared.module';
import { PatientsRoutingModule } from './patients-routing.module';
import { ShceduleComponent } from './pages/shcedule/shcedule.component';
import { CalendarComponent } from './comps/calendar/calendar.component';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

registerLocaleData(localeEs);
@NgModule({
  declarations: [ShceduleComponent, CalendarComponent],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    NgbModule,
    SharedModule
  ]
})
export class PatientsModule { }
