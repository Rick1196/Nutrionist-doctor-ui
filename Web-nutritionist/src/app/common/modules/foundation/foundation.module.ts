import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AccordionModule,
  AlertModule,        // Foundation Callouts
  ButtonsModule,
  CarouselModule,     // Foundation Orbit
  CollapseModule,
  BsDatepickerModule,
  BsDropdownModule,   // Foundation Dropdown Menus and Dropdown Panes
  ModalModule,        // Foundation Reveal
  OffcanvasModule,
  PaginationModule,
  ProgressbarModule,
  RatingModule,
  SortableModule,
  TabsModule,
  TimepickerModule,
  TooltipModule,
  TypeaheadModule,
} from 'ngx-foundation';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    AlertModule.forRoot(),        // Foundation Callouts
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),     // Foundation Orbit
    CollapseModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),   // Foundation Dropdown Menus and Dropdown Panes
    ModalModule.forRoot(),        // Foundation Reveal
    OffcanvasModule.forRoot(),
    PaginationModule.forRoot(),
    ProgressbarModule.forRoot(),
    RatingModule.forRoot(),
    SortableModule.forRoot(),
    TabsModule.forRoot(),
    TimepickerModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot(),
  ],
  exports: [
    AccordionModule,
    AlertModule,        // Foundation Callouts
    ButtonsModule,
    CarouselModule,     // Foundation Orbit
    CollapseModule,
    BsDatepickerModule,
    BsDropdownModule,   // Foundation Dropdown Menus and Dropdown Panes
    ModalModule,        // Foundation Reveal
    OffcanvasModule,
    PaginationModule,
    ProgressbarModule,
    RatingModule,
    SortableModule,
    TabsModule,
    TimepickerModule,
    TooltipModule,
    TypeaheadModule,
  ]
})
export class FoundationModule { }
