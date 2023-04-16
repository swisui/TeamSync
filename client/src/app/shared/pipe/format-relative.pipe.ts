import { Pipe, PipeTransform } from '@angular/core';
import { formatRelative } from 'date-fns';

@Pipe({
    name: 'formatRelative'
})
export class FormatRelativePipe implements PipeTransform {
    transform(value: Date): unknown {
        return formatRelative(value, new Date());
    }
}
