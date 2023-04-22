import { Component } from '@angular/core';
import { addDays } from 'date-fns';

@Component({
    selector: 'timeline-component',
    templateUrl: './timeline-component.component.html',
    styleUrls: ['./timeline-component.component.scss']
})
export class TimelineComponentComponent {
    events: any[];

    constructor() {
        this.events = [
            {
                status: 'Show 4 more events',
                date: addDays(new Date(), 1),
                icon: 'pi pi-sort'
            },
            {
                status: 'John declined the request',
                message: 'The amount of keyboards must be increased by 10 as decided during our last meeting',
                icon: 'pi pi-tag'
            },

            { status: 'Processing', icon: 'pi pi-tag', color: '#673AB7' },
            { status: 'Shipped', icon: 'pi pi-shopping-cart', color: '#FF9800' },
            { status: 'Delivered', icon: 'pi pi-check', color: '#607D8B' }
        ];
        console.log(this.events[0].date);
    }
}
