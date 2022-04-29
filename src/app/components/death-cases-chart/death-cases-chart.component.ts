import { Component, OnInit } from '@angular/core';
import { StatisticService } from 'src/app/services/statistic.service';
declare var google: any;

@Component({
  selector: 'app-death-cases-chart',
  templateUrl: './death-cases-chart.component.html',
  styleUrls: ['./death-cases-chart.component.css'],
})
export class DeathCasesChartComponent implements OnInit {
  historicalArr: any[] = [];
  title: string = 'Death Cases Accumulative';

  constructor(private statService: StatisticService) {}

  ngOnInit(): void {
    google.charts.load('current', { packages: ['corechart', 'bar'] });

    this.drawChart();
  }

  drawChart() {
    this.statService.getHistoricalSummary().subscribe((res: any) => {
      var array = Object.entries(res.deaths);
      const func = () => {
        var data = new google.visualization.DataTable();
        data.addColumn('date', 'Date');
        data.addColumn('number', 'Deaths Cases');
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
            title: 'Total Deaths',
            textPosition: 'none',
          },
        };

        var chart = new google.visualization.ColumnChart(
          document.getElementById('death_chart')
        );

        chart.draw(data, options);
      };

      const callback = () => func();
      google.charts.setOnLoadCallback(callback);
    });
  }
}
