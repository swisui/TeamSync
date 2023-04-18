import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatRelative'
})
export class FormatRelativePipe implements PipeTransform {
    transform(value: Date): string {
        const dayDiff = (Date.now() - value.getTime()) / (24 * 60 * 60 * 1000);

        if (dayDiff < -1) {
            return 'Tomorrow';
        } else if (dayDiff < 0) {
            return 'Today';
        } else if (dayDiff < 1) {
            return 'Yesterday';
        } else if (dayDiff < 7) {
            return `${Math.floor(dayDiff)} days ago`;
        } else if (dayDiff < 14) {
            return 'Last week';
        } else if (dayDiff < 21) {
            return 'Two weeks ago';
        } else if (dayDiff < -7) {
            return 'Next week';
        } else if (dayDiff < -14) {
            return 'Two weeks from now';
        } else {
            return value.toLocaleDateString();
        }
    }
}
