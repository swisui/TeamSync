import { Component } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    public now: Date;



    constructor() {
        this.now = new Date();


    }
}
