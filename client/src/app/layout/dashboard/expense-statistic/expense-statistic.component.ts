import { CurrencyPipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';

import {
    ApexAxisChartSeries,
    ApexChart,
    ApexDataLabels,
    ApexGrid,
    ApexLegend,
    ApexStroke,
    ApexTheme,
    ApexTooltip,
    ApexXAxis,
    ApexYAxis,
    ChartComponent
} from 'ng-apexcharts';
import { delay } from 'rxjs';
import { getFontColor, getFontFamily } from '../../../shared/utils/common.util';
import { ThemeService } from '../../../theme.service';

type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    stroke: ApexStroke;
    tooltip: ApexTooltip;
    dataLabels: ApexDataLabels;
    legend: ApexLegend;
    grid: ApexGrid;
    colors: Array<string>;
    yaxis: ApexYAxis;
    theme: ApexTheme;
};

@Component({
    selector: 'expense-statistic',
    templateUrl: './expense-statistic.component.html',
    styleUrls: ['./expense-statistic.component.scss']
})
export class ExpenseStatisticComponent implements OnInit {
    @ViewChild('chart')
    public chart!: ChartComponent;
    public chartOptions!: ChartOptions;

    constructor(private _themeService: ThemeService) {
        this.chartOptions = {
            series: [
                {
                    name: '',
                    data: [500, 600, 800, 800, 1200, 1000, 1400, 1200]
                }
            ],
            chart: {
                height: 277,
                type: 'area',
                fontFamily: getFontFamily(),
                toolbar: {
                    show: false
                },
                background: 'transparent'
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
            yaxis: {
                labels: {
                    formatter: value => <string>new CurrencyPipe('en').transform(value, 'USD', 'symbol')
                }
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
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
            colors: ['#ea4c89'],
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
