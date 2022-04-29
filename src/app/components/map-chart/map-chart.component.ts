import { Component, OnInit } from '@angular/core';
import { CovidCountry } from 'src/app/interfaces/covid-country';
import { StatisticService } from 'src/app/services/statistic.service';
declare var google: any;
@Component({
  selector: 'app-map-chart',
  templateUrl: './map-chart.component.html',
  styleUrls: ['./map-chart.component.css'],
})
export class MapChartComponent implements OnInit {
  countryArr: any[] = [];

  constructor(private statService: StatisticService) {}

  ngOnInit(): void {
    google.charts.load('current', {
      packages: ['geochart'],
      mapsApiKey: '',
    });

    this.drawMap();
  }

  drawMap() {
    this.statService.getCovidSummary().subscribe((res: CovidCountry[]) => {
      var Header = ['Country', 'Today Cases'];
      this.countryArr.push(Header);
      for (var i = 0; i < res.length; i++) {
        var temp = [];
        temp.push(res[i].country);
        temp.push(res[i].todayCases);

        this.countryArr.push(temp);
      }
      const func = () => {
        var data = google.visualization.arrayToDataTable(this.countryArr);

        var options = {};

        var chart = new google.visualization.GeoChart(
          document.getElementById('map_chart')
        );

        chart.draw(data, options);
        // google.visualization.events.addListener(chart, 'select', () => {
        //   var selection = chart.getSelection();
        //   this.getCountry(data.getValue(selection[0].row, 0));
        // });
      };
      const callback = () => func();
      google.charts.setOnLoadCallback(callback);
    });
  }

  // getCountry(selection: any) {
  //   console.log(selection);
  // }
}
