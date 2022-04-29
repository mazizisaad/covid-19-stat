import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CovidCountry } from '../interfaces/covid-country';
import { VaccineTimeline } from '../interfaces/vaccine-timeline';

@Injectable({
  providedIn: 'root',
})
export class StatisticService {
  private apiUrl = 'https://disease.sh/v3/covid-19/';

  constructor(private http: HttpClient) {}

  getCovidSummary(): Observable<CovidCountry[]> {
    return this.http.get<CovidCountry[]>(`${this.apiUrl}countries`);
  }

  getHistoricalSummary(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}historical/all?lastdays=60`);
  }

  getVaccinationSummary(): Observable<VaccineTimeline[]> {
    return this.http.get<VaccineTimeline[]>(
      `${this.apiUrl}vaccine/coverage?lastdays=30&fullData=true`
    );
  }
}
