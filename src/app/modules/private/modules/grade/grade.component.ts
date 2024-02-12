import { Component } from '@angular/core';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrl: './grade.component.css',
})
export class GradeComponent {
  protected chartStyle = {
    cutout: '50%',
    rotation: -90,
    circumference: 180,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        formatter: (value: any, ctx: any) => {
          const datapoints = ctx.chart.data.datasets[0].data;
          const total = datapoints.reduce((total: any, datapoint: any) => total + datapoint, 0);
          const percentage = (value / total) * 100;
          return percentage.toFixed(2) + '%';
        },
        color: '#fff',
        font: {
          size: '21',
        },
      },
    },
  };
}
