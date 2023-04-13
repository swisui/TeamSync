import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
    CalendarCommonModule,
    CalendarDayModule,
    CalendarMonthModule,
    CalendarWeekModule,
    DateAdapter,
} from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';

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
    ],
})
export class CalendarModule {}
