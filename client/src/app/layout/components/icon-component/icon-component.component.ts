import { Component } from '@angular/core';
import { IconList } from './icon-list';

@Component({
    selector: 'icon-component',
    templateUrl: './icon-component.component.html',
    styleUrls: ['./icon-component.component.scss']
})
export class IconComponentComponent {
    public icons: Array<string>;

    constructor() {
        this.icons = IconList;
    }
}
