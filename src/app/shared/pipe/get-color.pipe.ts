import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'getColor',
})
export class GetColorPipe implements PipeTransform {
    public colors: Array<string>;

    constructor() {
        this.colors = ['#97C4B8', '#009FBD', '#F675A8', '#628E90', '#F99417'];
    }

    transform(index: number): string {
        return <string>this.colors.at(index % 5);
    }
}
