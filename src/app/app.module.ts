import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YearComponent } from './year/year.component';
import { MonthComponent } from './months/month/month.component';
import { MonthsComponent } from './months/months.component';

@NgModule({
  declarations: [
    AppComponent,
    YearComponent,
    MonthComponent,
    MonthsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
