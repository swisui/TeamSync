import { Component, ViewChild } from '@angular/core';

import {
    ApexAxisChartSeries,
    ApexChart,
    ApexDataLabels,
    ApexGrid,
    ApexLegend,
    ApexStroke,
    ApexTooltip,
    ApexXAxis,
    ChartComponent
} from 'ng-apexcharts';
import { getFontFamily } from '../../../shared/utils/common.util';

type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    stroke: ApexStroke;
    tooltip: ApexTooltip;
    dataLabels: ApexDataLabels;
    legend: ApexLegend;
    grid: ApexGrid;
};

@Component({
    selector: 'expense-statistic',
    templateUrl: './expense-statistic.component.html',
    styleUrls: ['./expense-statistic.component.scss']
})
export class ExpenseStatisticComponent {
    @ViewChild('chart')
    public chart!: ChartComponent;
    public chartOptions!: ChartOptions;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: 'series1',
                    data: [500, 600, 800, 800, 1200, 1000, 1400, 1200]
                }
            ],
            chart: {
                height: 277,
                type: 'area',
                fontFamily: getFontFamily(),
                toolbar: {
                    show: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                type: 'datetime',
                categories: ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024']
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                }
            },
            legend: {
                show: false
            },
            grid: {
                padding: {
                    top: 0,
                    right: 10,
                    bottom: 0,
                    left: 10
                }
            }
        };
    }
}
