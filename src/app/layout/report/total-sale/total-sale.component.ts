import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ChartOptions } from '../../../models/chart-options.model';

@Component({
    selector: 'total-sale',
    templateUrl: './total-sale.component.html',
    styleUrls: ['./total-sale.component.scss']
})
export class TotalSaleComponent {
    public selectedItem: string;
    public dropdownOptions: Array<SelectItem>;

    public chartOptions: ChartOptions;

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

        this.chartOptions = Object.assign({
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
                },
                background: 'transparent'
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
            grid: {
                show: false,
                padding: {
                    top: -50,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            },
            colors: ['#003f5c', '#58508d', '#bc5090', '#ff6361', '#ffa600'],
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            }
        });
    }
}
