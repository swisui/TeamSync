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
            { label: 'Typography', icon: 'pi pi-fw pi-home', routerLink: 'typography' },
            { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
            { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
            { label: 'Documentation', icon: 'pi pi-fw pi-file' },
            { label: 'Settings', icon: 'pi pi-fw pi-cog' }
        ];
        this.activeItem = this.menuItems[0];
    }
}
