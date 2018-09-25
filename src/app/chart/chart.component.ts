import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  @Input()
  set repo(repo) {
    this.chart = new Chart({


        chart: {
          type: 'bar'
        },
        title: {
          text: repo.full_name
        },
        subtitle: {
          text: 'Some chart'
        },
        xAxis: {
          categories: [''],
          title: {
            text: null
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Population (millions)',
            align: 'high'
          },
          labels: {
            overflow: 'justify'
          }
        },
        tooltip: {
          valueSuffix: ' millions'
        },
        plotOptions: {
          bar: {
            dataLabels: {
              enabled: true
            }
          }
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',
          x: -40,
          y: 80,
          floating: true,
          borderWidth: 1,
          backgroundColor: ((Chart.theme && Chart.theme.legendBackgroundColor) || '#FFFFFF'),
          shadow: true
        },
        credits: {
          enabled: false
        },
        series: [{
          name: 'Open Issues',
          data: [repo.open_issues_count]
        }, {
          name: 'Forks',
          data: [repo.forks_count]
        }, {
          name: 'Watchers',
          data: [repo.watchers_count]
        }, {
          name: 'Stargazers',
          data: [repo.stargazers_count]
        }]



    });
  }
}
