import { Component } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
    urgentTask: Array<{ id: number; name: string; completed: boolean; due: Date }>;
    public now: Date;

    constructor() {
        this.now = new Date();
        this.urgentTask = [
            { id: 1, name: 'Finish Monthly Report', completed: false, due: new Date() },
            { id: 2, name: 'Report Signing', completed: false, due: new Date() },
            { id: 3, name: 'Market overview keynote', completed: false, due: new Date() },
            { id: 3, name: 'Deploy project to dev & staging', completed: false, due: new Date() },
            { id: 3, name: 'Prepare documentation', completed: false, due: new Date() },
        ];
    }
}
