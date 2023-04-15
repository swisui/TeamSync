import { Component } from '@angular/core';
import {
    ApexAxisChartSeries,
    ApexChart,
    ApexDataLabels,
    ApexFill,
    ApexGrid,
    ApexLegend,
    ApexPlotOptions,
    ApexTooltip,
    ApexXAxis,
    ApexYAxis
} from 'ng-apexcharts';

import { SelectItem } from 'primeng/api';

type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    plotOptions: ApexPlotOptions;
    dataLabels: ApexDataLabels;
    xaxis: ApexXAxis;
    grid: ApexGrid;
    legend: ApexLegend;
    tooltip: ApexTooltip;
    fill: ApexFill;
    yaxis: ApexYAxis;
};

@Component({
    selector: 'total-sale',
    templateUrl: './total-sale.component.html',
    styleUrls: ['./total-sale.component.scss']
})
export class TotalSaleComponent {
    public chartOptions!: ChartOptions;
    public selectedItem: string;
    public dropdownOptions: Array<SelectItem>;

    constructor() {
        this.dropdownOptions = [
            { label: 'Day', value: 'day' },
            { label: 'Week', value: 'week' },
            { label: 'Month', value: 'month' },
            { label: 'Quarter', value: 'quarter' }
        ];
        this.selectedItem = 'quarter';

        const documentStyle = getComputedStyle(document.documentElement);
        const fontFamily = documentStyle.getPropertyValue('--font-family');

        this.chartOptions = {
            series: [
                {
                    name: 'Subscription',
                    data: [14, 25, 20, 17, 12, 13, 11, 19]
                },
                {
                    name: 'Project',
                    data: [13, 23, 20, 18, 13, 27, 33, 12]
                },
                {
                    name: 'Service',
                    data: [11, 17, 15, 15, 21, 14, 15, 13]
                }
            ],
            chart: {
                height: 250,
                type: 'bar',
                stacked: true,
                offsetY: 0,
                fontFamily: fontFamily,
                sparkline: {
                    enabled: false
                },
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    columnWidth: '30',
                    borderRadius: 12
                }
            },
            xaxis: {
                categories: ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2', '2012 Q3', '2012 Q4']
            },
            fill: {
                opacity: 1
            },
            yaxis: {
                show: false
            },
            grid: {
                show: false,
                borderColor: '#f1f1f1',
                padding: {
                    top: -50,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            tooltip: {}
        };
    }
}
