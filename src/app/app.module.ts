import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MapChartComponent } from './components/map-chart/map-chart.component';
import { PositiveCasesChartComponent } from './components/positive-cases-chart/positive-cases-chart.component';
import { DeathCasesChartComponent } from './components/death-cases-chart/death-cases-chart.component';
import { VaccinationChartComponent } from './components/vaccination-chart/vaccination-chart.component';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapChartComponent,
    PositiveCasesChartComponent,
    DeathCasesChartComponent,
    VaccinationChartComponent,
    TitleComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
