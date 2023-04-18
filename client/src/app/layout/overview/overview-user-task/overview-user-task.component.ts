import { Component } from '@angular/core';
import { getRandomDate } from '../../../shared/utils/common.util';

type UserTask = {
    name: string;
    tasks: Array<{ name: string; dueDate: Date; status: string; priority: string; completed: boolean }>;
};

@Component({
    selector: 'overview-user-task',
    templateUrl: './overview-user-task.component.html',
    styleUrls: ['./overview-user-task.component.scss']
})
export class OverviewUserTaskComponent {
    public tasks: Array<UserTask>;

    constructor() {
        this.tasks = [
            {
                name: `Dana's`,
                tasks: [
                    {
                        name: 'Research Check-in',
                        dueDate: getRandomDate(),
                        status: 'Not Started',
                        priority: 'High Priority',
                        completed: false
                    },
                    {
                        name: 'Survey Design',
                        dueDate: getRandomDate(),
                        status: 'In Progress',
                        priority: 'Medium Priority',
                        completed: false
                    },
                    {
                        name: 'Idea Sprint',
                        dueDate: getRandomDate(),
                        status: 'In Progress',
                        priority: 'High Priority',
                        completed: false
                    }
                ]
            },
            {
                name: `Elon's`,
                tasks: [
                    {
                        name: 'Market Analysis',
                        dueDate: getRandomDate(),
                        status: 'Not Started',
                        priority: 'High Priority',
                        completed: false
                    },
                    {
                        name: 'Survey Evaluation',
                        dueDate: getRandomDate(),
                        status: 'In Progress',
                        priority: 'Medium Priority',
                        completed: false
                    },
                    {
                        name: 'B2B Research',
                        dueDate: getRandomDate(),
                        status: 'Paused',
                        priority: 'Low Priority',
                        completed: false
                    }
                ]
            }
        ];
    }
}
