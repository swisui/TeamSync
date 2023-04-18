import { Component, OnInit, ViewChild } from '@angular/core';

import {
    ApexAxisChartSeries,
    ApexChart,
    ApexDataLabels,
    ApexFill,
    ApexGrid,
    ApexPlotOptions,
    ApexTheme,
    ApexTooltip,
    ApexXAxis,
    ApexYAxis,
    ChartComponent
} from 'ng-apexcharts';
import { SelectItem } from 'primeng/api';
import { delay } from 'rxjs';
import { getFontColor } from '../../../shared/utils/common.util';
import { ThemeService } from '../../../theme.service';

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
    theme: ApexTheme;
};

@Component({
    selector: 'project-progress',
    templateUrl: './project-progress.component.html',
    styleUrls: ['./project-progress.component.scss']
})
export class ProjectProgressComponent implements OnInit {
    @ViewChild('chart')
    public chart!: ChartComponent;
    public chartOptions!: ChartOptions;

    public dropdownOptions: Array<SelectItem>;

    constructor(private _themeService: ThemeService) {
        const documentStyle = getComputedStyle(document.documentElement);

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
                height: '250px',
                type: 'rangeBar',
                fontFamily: documentStyle.getPropertyValue('--font-family'),
                toolbar: {
                    show: false
                },
                sparkline: {
                    enabled: false
                },
                background: 'transparent'
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    dataLabels: {
                        hideOverflowingLabels: false
                    },
                    borderRadius: 8,
                    barHeight: '50'
                }
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                type: 'datetime'
            },
            yaxis: {
                show: false
            },
            grid: {
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 10,
                    left: 0
                },
                show: false
            },
            tooltip: {},
            fill: {},
            theme: {}
        };
    }

    public ngOnInit() {
        this._themeService
            .onThemeChange()
            .pipe(delay(50))
            .subscribe(theme => {
                console.log(theme);
                this.chartOptions = {
                    ...this.chartOptions,
                    theme: {
                        ...this.chartOptions,
                        mode: theme === 'dark' ? 'light' : 'dark'
                    },
                    chart: {
                        ...this.chartOptions.chart,
                        foreColor: getFontColor()
                    }
                };
            });
    }
}
