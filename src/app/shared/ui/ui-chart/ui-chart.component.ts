import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Chart, ChartTypeRegistry } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { chartData } from 'src/app/core/interfaces/chart.data.interface';

@Component({
  selector: 'app-ui-chart',
  standalone: true,
  imports: [CommonModule, IonicModule],
  template: `
    <ion-card>
      <ion-card-header>
        <ion-card-title class="text-xl font-bold text-center">{{ titleLabel }}</ion-card-title>
      </ion-card-header>
      <ion-card-content class="flex justify-content-center">
        <canvas id="chart">{{ chart }}</canvas>
      </ion-card-content>
    </ion-card>
  `,
  styles: ``,
})
export class UiChartComponent implements AfterViewInit {
  @Input() labels!: string[];
  @Input() type!: keyof ChartTypeRegistry;
  @Input() titleLabel!: string;
  @Input() data!: number[];
  @Input() backgroundColors!: string[];
  @Input() hoverOffset!: number;
  @Input() options!: any;
  protected chart: any;
  constructor() {}
  ngAfterViewInit(): void {
    Chart.register(ChartDataLabels);
    this.createChart();
  }
  createChart() {
    let data: chartData = {
      labels: this.labels,
      datasets: [
        {
          label: this.titleLabel,
          data: this.data,
          backgroundColor: this.backgroundColors,
          hoverOffset: this.hoverOffset,
          borderWidth: 1,
        },
      ],
    };
    this.chart = new Chart('chart', {
      type: this.type,
      data: data,
      plugins: [ChartDataLabels],
      options: this.options,
    });
  }
}
