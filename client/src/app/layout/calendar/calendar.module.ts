import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CalendarCommonModule, CalendarDayModule, CalendarMonthModule, CalendarWeekModule } from 'angular-calendar';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { MainBreadcrumbModule } from '../../shared/modules/main-breadcrumb/main-breadcrumb.module';

@NgModule({
    declarations: [CalendarComponent],
    imports: [
        CommonModule,
        CalendarRoutingModule,
        CalendarMonthModule,
        CalendarWeekModule,
        CalendarDayModule,
        CalendarCommonModule,
        AvatarModule,
        ButtonModule,
        RippleModule,
        MainBreadcrumbModule
    ]
})
export class CalendarModule {}
