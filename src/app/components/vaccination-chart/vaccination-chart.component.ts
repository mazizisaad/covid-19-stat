import { Component, OnInit } from '@angular/core';
import { VaccineTimeline } from 'src/app/interfaces/vaccine-timeline';
import { StatisticService } from 'src/app/services/statistic.service';
declare var google: any;

@Component({
  selector: 'app-vaccination-chart',
  templateUrl: './vaccination-chart.component.html',
  styleUrls: ['./vaccination-chart.component.css'],
})
export class VaccinationChartComponent implements OnInit {
  historicalArr: any[] = [];
  title: string = 'Daily Vaccination';

  constructor(private statService: StatisticService) {}

  ngOnInit(): void {
    google.charts.load('current', { packages: ['corechart', 'bar'] });

    this.drawChart();
  }

  drawChart() {
    this.statService
      .getVaccinationSummary()
      .subscribe((res: VaccineTimeline[]) => {
        const func = () => {
          var data = new google.visualization.DataTable();
          data.addColumn('date', 'Date');
          data.addColumn('number', 'Doses Per Day');
          for (var i = 0; i < res.length; i++) {
            var temp = [];
            temp.push(new Date(res[i].date));
            temp.push(res[i].daily);

            this.historicalArr.push(temp);
          }

          data.addRows(this.historicalArr);
          var options = {
            legend: { position: 'none' },
            colors: ['#32a852'],
            hAxis: {
              title: 'Day',
              gridlines: {
                color: 'transparent',
                count: 10,
              },
            },
            vAxis: {
              title: 'Total Vaccination',
              textPosition: 'none',
            },
          };

          var chart = new google.visualization.ColumnChart(
            document.getElementById('vaccination_chart')
          );

          chart.draw(data, options);
        };

        const callback = () => func();
        google.charts.setOnLoadCallback(callback);
      });
  }
}
