import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'components',
    templateUrl: './components.component.html',
    styleUrls: ['./components.component.scss']
})
export class ComponentsComponent {
    public menuItems: MenuItem[];
    public activeItem: MenuItem;

    constructor() {
        this.menuItems = [
            { label: 'Typography', routerLink: 'typography' },
            { label: 'Tab', routerLink: 'tab' },
            { label: 'Edit' },
            { label: 'Documentation' },
            { label: 'Settings' }
        ];
        this.activeItem = this.menuItems[0];
    }
}
