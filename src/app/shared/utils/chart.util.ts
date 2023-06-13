import { ChartOptions } from '../../models/chart-options.model';

const chartConfig: ChartOptions = {
    series: [],
    chart: {
        type: 'line'
    },
    dataLabels: {},
    stroke: {},
    xaxis: {},
    yaxis: {},
    tooltip: {
        theme: 'dark'
    },
    legend: {
        show: false
    },
    grid: {
        show: false,
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 10
        }
    },
    colors: ['#003f5c', '#58508d', '#bc5090', '#ff6361', '#ffa600'],
    theme: {
        mode: 'light'
    },
    title: {},
    fill: {},
    annotations: {},
    plotOptions: {}
};
export const DefaultChartOptions: ChartOptions = JSON.parse(JSON.stringify(chartConfig));
