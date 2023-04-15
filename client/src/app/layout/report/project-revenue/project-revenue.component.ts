import { Component, OnInit, ViewChild } from '@angular/core';
import {
    ApexAxisChartSeries,
    ApexChart,
    ApexDataLabels,
    ApexGrid,
    ApexLegend,
    ApexPlotOptions,
    ApexTooltip,
    ApexXAxis,
    ChartComponent
} from 'ng-apexcharts';
import { SelectItem } from 'primeng/api';

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    xaxis: ApexXAxis;
    grid: ApexGrid;
    colors: string[];
    legend: ApexLegend;
    tooltip: ApexTooltip;
};

@Component({
    selector: 'project-revenue',
    templateUrl: './project-revenue.component.html',
    styleUrls: ['./project-revenue.component.scss']
})
export class ProjectRevenueComponent implements OnInit {
    @ViewChild('chart')
    public chart!: ChartComponent;
    public chartOptions!: ChartOptions;

    public dropdownOptions: Array<SelectItem>;

    constructor() {
        const documentStyle = getComputedStyle(document.documentElement);
        const fontFamily = documentStyle.getPropertyValue('--font-family');
        this.dropdownOptions = [
            { label: 'Day', value: 'day' },
            { label: 'Week', value: 'week' },
            { label: 'Month', value: 'month' }
        ];

        this.chartOptions = {
            series: [
                {
                    name: 'distibuted',
                    data: [3000, 4000, 5000, 3000, 5000, 2500, 3000, 4000, 1000, 3000, 4000, 5000]
                }
            ],
            chart: {
                height: 250,
                type: 'bar',
                toolbar: {
                    show: false
                },
                fontFamily: fontFamily,
                stacked: true
            },
            colors: ['#98D8AA', '#3F497F'],
            plotOptions: {
                bar: {
                    columnWidth: '40%',
                    distributed: true,
                    borderRadius: 8,
                    dataLabels: {
                        position: 'top'
                    }
                }
            },
            dataLabels: {
                enabled: false
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
                    left: 0
                }
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                labels: {
                    style: {
                        colors: ['#98D8AA', '#3F497F'],
                        fontSize: '12px'
                    }
                }
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val + 'K';
                    }
                }
            }
        };
    }

    public ngOnInit(): void {}
}
