import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { CHART_COLORS } from '../../shared/utils/chartjs.utils';

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {
    data: any;
    revenueData: any;
    projectProgress: any;
    projectProgressOptions: any;
    options: any;
    public dropdownOptions: Array<SelectItem>;

    constructor() {
        this.dropdownOptions = [
            { label: 'Day', value: 'day' },
            { label: 'Week', value: 'week' },
            { label: 'Month', value: 'month' },
        ];
    }

    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');

        console.log(documentStyle.getPropertyValue('--yellow-500'));
        this.data = {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
                {
                    type: 'bar',
                    backgroundColor: 'rgba(255, 255, 0, 0.1)',
                    data: [8, 8, 8, 8, 8, 8, 8],
                    borderColor: CHART_COLORS.yellow,
                    barThickness: 15,
                    borderWidth: 1,
                    borderRadius: 50,
                },
                {
                    type: 'bar',
                    backgroundColor: documentStyle.getPropertyValue('--orange-500'),
                    data: [7, 6, 5, 2, 3, 1, 0],
                    borderColor: CHART_COLORS.orange,
                    barThickness: 15,
                    borderRadius: 50,
                    borderSkipped: true,
                },
            ],
        };

        this.revenueData = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    type: 'bar',
                    backgroundColor: documentStyle.getPropertyValue('--teal-400'),
                    data: [3000, 4000, 5000, 3000, 5000, 2500, 3000, 4000, 1000, 3000, 4000, 5000],
                    borderColor: CHART_COLORS.green,
                    barThickness: 10,
                    borderRadius: 50,
                },
            ],
        };

        this.options = {
            maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    enabled: false,
                },
                legend: {
                    display: false,
                },
            },
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        font: {
                            family: 'Open Sans', // Your font family
                            size: 12,
                        },
                        color: textColorSecondary,
                    },
                    grid: {
                        display: false,
                    },
                },
                y: {
                    stacked: false,
                    ticks: {
                        font: {
                            family: 'Open Sans', // Your font family
                            size: 12,
                        },
                        beginAtZero: true,
                        color: textColorSecondary,
                    },
                    grid: {
                        display: false,
                    },
                },
            },
        };

        this.projectProgress = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    data: [65, 59, 80, 81, 56, 55, 40],
                },
            ],
        };

        const textColor = documentStyle.getPropertyValue('--text-color');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.projectProgressOptions = {
            indexAxis: 'x',
            maintainAspectRatio: false,
            aspectRatio: 1.5,
            plugins: {
                legend: {
                    display: false,
                    labels: {
                        color: textColor,
                    },
                },
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500,
                        },
                        reverse: true,
                    },
                    grid: {
                        display: false,
                    },
                },
                y: {
                    ticks: {
                        color: textColorSecondary,
                    },
                    grid: {
                        display: false,
                    },
                },
            },
        };
    }
}
