import { Component } from '@angular/core';

@Component({
    selector: 'overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
    public get today(): number {
        return new Date().getFullYear();
    }
}
