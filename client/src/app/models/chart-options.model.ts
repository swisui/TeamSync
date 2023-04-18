import {
    ApexAnnotations,
    ApexAxisChartSeries,
    ApexChart,
    ApexDataLabels,
    ApexFill,
    ApexGrid,
    ApexLegend,
    ApexPlotOptions,
    ApexStroke,
    ApexTheme,
    ApexTitleSubtitle,
    ApexTooltip,
    ApexXAxis,
    ApexYAxis
} from 'ng-apexcharts';

export interface ChartOptions {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    stroke: ApexStroke;
    tooltip: ApexTooltip;
    dataLabels: ApexDataLabels;
    legend: ApexLegend;
    grid: ApexGrid;
    colors: Array<string>;
    theme: ApexTheme;
    title: ApexTitleSubtitle;
    fill: ApexFill;
    annotations: ApexAnnotations;
    plotOptions: ApexPlotOptions;
}
