import { Component, ViewChild } from '@angular/core';

import {
    ApexAxisChartSeries,
    ApexChart,
    ApexDataLabels,
    ApexFill,
    ApexGrid,
    ApexPlotOptions,
    ApexXAxis,
    ApexYAxis,
    ChartComponent,
} from 'ng-apexcharts';

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    fill: ApexFill;
    dataLabels: ApexDataLabels;
    grid: ApexGrid;
    yaxis: ApexYAxis;
    xaxis: ApexXAxis;
    plotOptions: ApexPlotOptions;
};

@Component({
    selector: 'app-project-progress',
    templateUrl: './project-progress.component.html',
    styleUrls: ['./project-progress.component.scss'],
})
export class ProjectProgressComponent {
    @ViewChild('chart')
    public chart: ChartComponent | undefined;
    public chartOptions: any;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    data: [
                        {
                            x: 'Analysis',
                            y: [new Date('2019-02-27').getTime(), new Date('2019-03-04').getTime()],
                            fillColor: '#008FFB',
                        },
                        {
                            x: 'Design',
                            y: [new Date('2019-03-04').getTime(), new Date('2019-03-08').getTime()],
                            fillColor: '#00E396',
                        },
                        {
                            x: 'Coding',
                            y: [new Date('2019-03-07').getTime(), new Date('2019-03-10').getTime()],
                            fillColor: '#775DD0',
                        },
                        {
                            x: 'Testing',
                            y: [new Date('2019-03-08').getTime(), new Date('2019-03-12').getTime()],
                            fillColor: '#FEB019',
                        },
                        {
                            x: 'Deployment',
                            y: [new Date('2019-03-12').getTime(), new Date('2019-03-17').getTime()],
                            fillColor: '#FF4560',
                        },
                    ],
                },
            ],
            chart: {
                height: 350,
                type: 'rangeBar',
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    distributed: true,
                    dataLabels: {
                        hideOverflowingLabels: false,
                    },
                },
            },
            dataLabels: {
                enabled: true,
                // @ts-ignore
                formatter: function (_, opts) {
                    return opts.w.globals.labels[opts.dataPointIndex];
                },
                style: {
                    colors: ['#f3f4f5', '#fff'],
                },
            },
            xaxis: {
                type: 'datetime',
            },
            yaxis: {
                show: false,
            },
            grid: {
                row: {
                    colors: ['#f3f4f5', '#fff'],
                    opacity: 1,
                },
            },
        };
    }
}
