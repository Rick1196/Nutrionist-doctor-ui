import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './common/comps/container/container.component';
import {FoundationModule} from './common/modules/foundation/foundation.module';
import { FontAwesomeModule,  } from '@fortawesome/angular-fontawesome';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoadingComponent } from './common/comps/loading/loading.component'
@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FoundationModule,
    FontAwesomeModule,ReactiveFormsModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
