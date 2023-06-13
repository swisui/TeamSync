import { Component } from '@angular/core';
import { ChartOptions } from '../../../models/chart-options.model';
import { getFontFamily } from '../../../shared/utils/common.util';

@Component({
    selector: 'overview-project-progress',
    templateUrl: './overview-project-progress.component.html',
    styleUrls: ['./overview-project-progress.component.scss']
})
export class OverviewProjectProgressComponent {
    public chartOptions: ChartOptions;

    constructor() {
        this.chartOptions = <ChartOptions>{
            series: [
                {
                    name: 'Bob',
                    data: [
                        {
                            x: 'Design',
                            y: [new Date('2019-03-05').getTime(), new Date('2019-03-08').getTime()]
                        },
                        {
                            x: 'Code',
                            y: [new Date('2019-03-02').getTime(), new Date('2019-03-05').getTime()]
                        },
                        {
                            x: 'Code',
                            y: [new Date('2019-03-05').getTime(), new Date('2019-03-07').getTime()]
                        },
                        {
                            x: 'Test',
                            y: [new Date('2019-03-03').getTime(), new Date('2019-03-09').getTime()]
                        },
                        {
                            x: 'Test',
                            y: [new Date('2019-03-08').getTime(), new Date('2019-03-11').getTime()]
                        },
                        {
                            x: 'Validation',
                            y: [new Date('2019-03-11').getTime(), new Date('2019-03-16').getTime()]
                        },
                        {
                            x: 'Design',
                            y: [new Date('2019-03-01').getTime(), new Date('2019-03-03').getTime()]
                        }
                    ]
                },
                {
                    name: 'Joe',
                    data: [
                        {
                            x: 'Design',
                            y: [new Date('2019-03-02').getTime(), new Date('2019-03-05').getTime()]
                        },
                        {
                            x: 'Test',
                            y: [new Date('2019-03-06').getTime(), new Date('2019-03-16').getTime()]
                        },
                        {
                            x: 'Code',
                            y: [new Date('2019-03-03').getTime(), new Date('2019-03-07').getTime()]
                        },
                        {
                            x: 'Deployment',
                            y: [new Date('2019-03-20').getTime(), new Date('2019-03-22').getTime()]
                        },
                        {
                            x: 'Design',
                            y: [new Date('2019-03-10').getTime(), new Date('2019-03-16').getTime()]
                        }
                    ]
                },
                {
                    name: 'Dan',
                    data: [
                        {
                            x: 'Code',
                            y: [new Date('2019-03-10').getTime(), new Date('2019-03-17').getTime()]
                        },
                        {
                            x: 'Validation',
                            y: [new Date('2019-03-05').getTime(), new Date('2019-03-09').getTime()]
                        }
                    ]
                }
            ],
            chart: {
                height: 285,
                type: 'rangeBar',
                fontFamily: getFontFamily(),
                toolbar: {
                    show: false
                },
                background: 'transparent'
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    barHeight: '80%',
                    borderRadius: 10
                }
            },
            xaxis: {
                type: 'datetime'
            },
            legend: {
                position: 'bottom',
                horizontalAlign: 'center'
            },
            grid: {
                show: false,
                padding: {
                    top: -20,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            }
        };
    }
}
