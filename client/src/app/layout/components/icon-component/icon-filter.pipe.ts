import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'iconFilter'
})
export class IconFilterPipe implements PipeTransform {
    transform(value: Array<string>, query: string): Array<string> {
        if (query == null) {
            return value;
        }
        return value.filter(v => v.includes(query));
    }
}
