import { Component, Input, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { ChartOptions } from '../../../models/chart-options.model';
import { ThemeService } from '../../../theme.service';
import { getFontColor } from '../../utils/common.util';

@Component({
    selector: 'chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
    @Input()
    public chartOptions!: ChartOptions;

    constructor(private _themeService: ThemeService) {}

    public ngOnInit() {
        this._themeService
            .onThemeChange()
            .pipe(delay(50))
            .subscribe(theme => {
                this.chartOptions = {
                    ...this.chartOptions,
                    theme: {
                        ...this.chartOptions,
                        mode: theme === 'dark' ? 'light' : 'dark'
                    },
                    chart: {
                        ...this.chartOptions.chart,
                        foreColor: getFontColor()
                    },
                    tooltip: {
                        theme: 'dark'
                    }
                };
            });
    }
}
