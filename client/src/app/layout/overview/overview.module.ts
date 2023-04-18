import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AvatarModule } from 'primeng/avatar';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ChartModule } from '../../shared/modules/chart/chart.module';
import { TeamDirectoryModule } from '../../shared/modules/team-directory/team-directory.module';
import { PipeModule } from '../../shared/pipe/pipe.module';
import { OverviewCalendarComponent } from './overview-calendar/overview-calendar.component';
import { OverviewProjectProgressComponent } from './overview-project-progress/overview-project-progress.component';
import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewUserTaskComponent } from './overview-user-task/overview-user-task.component';
import { OverviewComponent } from './overview.component';

@NgModule({
    declarations: [
        OverviewComponent,
        OverviewCalendarComponent,
        OverviewProjectProgressComponent,
        OverviewUserTaskComponent
    ],
    imports: [
        CommonModule,
        OverviewRoutingModule,
        AvatarModule,
        InputTextModule,
        CalendarModule,
        CardModule,
        RadioButtonModule,
        NgApexchartsModule,
        TeamDirectoryModule,
        FormsModule,
        PipeModule,
        ChartModule
    ]
})
export class OverviewModule {}
