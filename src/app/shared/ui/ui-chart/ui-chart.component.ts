import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Chart, ChartTypeRegistry } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { chartData } from 'src/app/core/interfaces/chart.data.interface';
import { NgChartsModule } from 'ng2-charts';
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ui-chart',
  standalone: true,
  imports: [NgChartsModule, IonicModule],
  template: `
    <div class="chart-container">
      <canvas id="chart">{{ chart }}</canvas>
    </div>
  `,
  styles: `
  chart-container {
}

@media screen and (max-width: 767px) {
  .chart-container {
    height: 300px;
	display: flex;
  justify-content: center;
  }
}

@media screen and (min-width: 768px) {
  .chart-container {
    height: 100%;
	display: flex;
  justify-content: center;
  }
}`,
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
