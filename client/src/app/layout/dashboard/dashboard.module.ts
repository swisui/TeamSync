import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from "ng-apexcharts";
import { AvatarModule } from 'primeng/avatar';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PipeModule } from '../../shared/pipe/pipe.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ExpenseStatisticComponent } from './expense-statistic/expense-statistic.component';
import { ChartModule } from '../../shared/modules/chart/chart.module';

@NgModule({
    declarations: [DashboardComponent, ExpenseStatisticComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        InputTextModule,
        AvatarModule,
        CalendarModule,
        CardModule,
        RadioButtonModule,
        FormsModule,
        DividerModule,
        PipeModule,
        NgApexchartsModule,
        ChartModule,
    ],
})
export class DashboardModule {}
