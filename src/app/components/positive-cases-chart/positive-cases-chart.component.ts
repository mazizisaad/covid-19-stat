import { Component, OnInit } from '@angular/core';
import { StatisticService } from 'src/app/services/statistic.service';
declare var google: any;

@Component({
  selector: 'app-positive-cases-chart',
  templateUrl: './positive-cases-chart.component.html',
  styleUrls: ['./positive-cases-chart.component.css'],
})
export class PositiveCasesChartComponent implements OnInit {
  historicalArr: any[] = [];
  title: string = 'Positive Cases Accumulative';

  constructor(private statService: StatisticService) {}

  ngOnInit(): void {
    google.charts.load('current', { packages: ['corechart', 'bar'] });

    this.drawChart();
  }

  drawChart() {
    this.statService.getHistoricalSummary().subscribe((res: any) => {
      var array = Object.entries(res.cases);
      const func = () => {
        var data = new google.visualization.DataTable();
        data.addColumn('date', 'Date');
        data.addColumn('number', 'Positive Cases');
        for (var i = 0; i < array.length; i++) {
          var temp = [];
          temp.push(new Date(array[i][0]));
          temp.push(array[i][1]);

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
            title: 'Total Cases',
            textPosition: 'none',
          },
        };

        var chart = new google.visualization.ColumnChart(
          document.getElementById('positive_chart')
        );

        chart.draw(data, options);
      };

      const callback = () => func();
      google.charts.setOnLoadCallback(callback);
    });
  }
}
