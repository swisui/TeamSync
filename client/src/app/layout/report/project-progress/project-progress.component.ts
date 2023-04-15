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
    public chartOptions: Partial<ChartOptions> | any;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    data: [
                        {
                            x: 'Analysis',
                            y: [new Date('2023-01-01').getTime(), new Date('2023-01-31').getTime()],
                            fillColor: '#008FFB',
                        },
                        {
                            x: 'Design',
                            y: [new Date('2023-01-11').getTime(), new Date('2023-01-16').getTime()],
                            fillColor: '#00E396',
                        },
                        {
                            x: 'Coding',
                            y: [new Date('2023-01-01').getTime(), new Date('2023-02-21').getTime()],
                            fillColor: '#775DD0',
                        },
                        {
                            x: 'Testing',
                            y: [new Date('2023-03-01').getTime(), new Date('2023-01-31').getTime()],
                            fillColor: '#FEB019',
                        },
                        {
                            x: 'Deployment',
                            y: [new Date('2023-02-01').getTime(), new Date('2023-02-11').getTime()],
                            fillColor: '#FF4560',
                        },
                    ],
                },
            ],
            chart: {
                height: 300,
                type: 'rangeBar',
                fontFamily: 'Open Sans,sans-serif',
                toolbar: {
                    show: false,
                },
            },
            plotOptions: {
                bar: {
                    barHeight: 50,
                    borderRadius: 10,
                    horizontal: true,
                    distributed: true,
                    dataLabels: {
                        hideOverflowingLabels: false,
                    },
                },
            },
            dataLabels: {
                enabled: true,
                formatter: () => '',
                style: {
                    colors: ['#f3f4f5', '#fff'],
                },
            },
            xaxis: {
                type: 'category',
                categories: ['Jan', 'Feb', 'Mar'],
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
