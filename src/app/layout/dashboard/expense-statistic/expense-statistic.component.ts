import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ChartOptions } from '../../../models/chart-options.model';
import { getFontFamily } from '../../../shared/utils/common.util';

@Component({
    selector: 'expense-statistic',
    templateUrl: './expense-statistic.component.html',
    styleUrls: ['./expense-statistic.component.scss']
})
export class ExpenseStatisticComponent {
    public chartOptions: ChartOptions;

    constructor() {
        this.chartOptions = <ChartOptions>{
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
            xaxis: {
                type: 'datetime',
                categories: ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024']
            },
            yaxis: {
                labels: {
                    formatter: (value: number) => <string>new CurrencyPipe('en').transform(value, 'USD', 'symbol')
                }
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ['#ea4c89'],
            grid: {
                show: false
            }
        };
    }
}
