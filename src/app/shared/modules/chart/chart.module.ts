import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartComponent } from './chart.component';

@NgModule({
    declarations: [ChartComponent],
    exports: [ChartComponent],
    imports: [CommonModule, NgApexchartsModule]
})
export class ChartModule {}
