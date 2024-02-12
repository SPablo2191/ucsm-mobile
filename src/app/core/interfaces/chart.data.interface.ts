export interface chartData {
  labels: string[];
  datasets: chartDatasets[];
}
interface chartDatasets {
  label: string;
  data: number[];
  backgroundColor: string[];
  hoverOffset: number;
  borderWidth: number;
}
