import { Component } from '@angular/core';
import { Task } from '../../../models/task.model';
import { getRandomDate } from '../../../shared/utils/common.util';

@Component({
    selector: 'urgent-task',
    templateUrl: './urgent-task.component.html',
    styleUrls: ['./urgent-task.component.scss']
})
export class UrgentTaskComponent {
    public urgentTask: Array<Task>;

    constructor() {
        this.urgentTask = [
            { id: 1, name: 'Finish Monthly Report', completed: false, due: getRandomDate() },
            { id: 2, name: 'Report Signing', completed: false, due: getRandomDate() },
            { id: 3, name: 'Market overview keynote', completed: false, due: getRandomDate() },
            { id: 4, name: 'Deploy project to dev & staging', completed: false, due: getRandomDate() },
            { id: 5, name: 'Code Review', completed: false, due: getRandomDate() },
            { id: 6, name: 'Upgrade Backend API', completed: false, due: getRandomDate() }
        ];
    }
}
