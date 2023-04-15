import { Component, ViewChild } from '@angular/core';

import {
    ApexAxisChartSeries,
    ApexChart,
    ApexDataLabels,
    ApexFill,
    ApexGrid,
    ApexPlotOptions,
    ApexTooltip,
    ApexXAxis,
    ApexYAxis,
    ChartComponent
} from 'ng-apexcharts';
import { SelectItem } from 'primeng/api';

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    fill: ApexFill;
    dataLabels: ApexDataLabels;
    grid: ApexGrid;
    yaxis: ApexYAxis;
    xaxis: ApexXAxis;
    plotOptions: ApexPlotOptions;
    tooltip: ApexTooltip;
};

@Component({
    selector: 'project-progress',
    templateUrl: './project-progress.component.html',
    styleUrls: ['./project-progress.component.scss']
})
export class ProjectProgressComponent {
    @ViewChild('chart')
    public chart!: ChartComponent;
    public chartOptions!: ChartOptions;

    public dropdownOptions: Array<SelectItem>;

    constructor() {
        this.dropdownOptions = [
            { label: 'Day', value: 'day' },
            { label: 'Week', value: 'week' },
            { label: 'Month', value: 'month' }
        ];
        this.chartOptions = {
            series: [
                {
                    data: [
                        {
                            x: 'Analysis',
                            y: [new Date('2023-03-02').getTime(), new Date('2023-03-08').getTime()],
                            fillColor: '#008FFB'
                        },
                        {
                            x: 'Design',
                            y: [new Date('2023-03-04').getTime(), new Date('2023-03-10').getTime()],
                            fillColor: '#00E396'
                        },
                        {
                            x: 'Coding',
                            y: [new Date('2023-03-8').getTime(), new Date('2023-03-20').getTime()],
                            fillColor: '#775DD0'
                        },
                        {
                            x: 'Testing',
                            y: [new Date('2023-03-18').getTime(), new Date('2023-03-25').getTime()],
                            fillColor: '#FEB019'
                        },
                        {
                            x: 'Deployment',
                            y: [new Date('2023-03-22').getTime(), new Date('2023-03-28').getTime()],
                            fillColor: '#FF4560'
                        }
                    ]
                }
            ],
            chart: {
                height: '220px',
                type: 'rangeBar',
                fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
                toolbar: {
                    show: false
                },
                sparkline: {
                    enabled: true
                }
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    distributed: true,
                    dataLabels: {
                        hideOverflowingLabels: false
                    },
                    borderRadius: 10,
                    barHeight: '50'
                }
            },
            dataLabels: {
                enabled: true,
                formatter: function (val: number[], opts: any) {
                    const label = opts.w.globals.labels[opts.dataPointIndex];
                    const [timestamp1, timestamp2] = val;
                    const diff = Math.floor((timestamp2 - timestamp1) / 1000 / 60 / 60 / 24);
                    return `${label}: ${diff}${diff > 1 ? ' days' : ' day'}`;
                },
                style: {
                    colors: ['#f3f4f5', '#fff']
                }
            },
            xaxis: {
                type: 'datetime',
                labels: {
                    show: true
                }
            },
            yaxis: {
                show: false
            },
            grid: {
                row: {
                    colors: ['#f3f4f5', '#fff'],
                    opacity: 0.5
                },
                xaxis: {
                    lines: {
                        show: false
                    }
                },
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                show: false
            },
            tooltip: {},
            fill: {}
        };
    }
}
