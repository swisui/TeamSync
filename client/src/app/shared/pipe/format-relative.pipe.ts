import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';
import * as calendar from 'dayjs/plugin/calendar';

dayjs.extend(calendar);

@Pipe({
    name: 'formatRelative'
})
export class FormatRelativePipe implements PipeTransform {
    transform(value: Date): string {
        return dayjs(value).calendar(null, {
            sameDay: '[Today]',
            nextDay: '[Tomorrow]',
            nextWeek: 'dddd',
            lastDay: '[Yesterday]',
            lastWeek: '[Last] dddd',
            sameElse: 'DD/MM/YYYY'
        });
    }
}
