import { Component } from '@angular/core';

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
                        dueDate: this._randomDate(),
                        status: 'Not Started',
                        priority: 'High Priority',
                        completed: false
                    },
                    {
                        name: 'Survey Design',
                        dueDate: this._randomDate(),
                        status: 'In Progress',
                        priority: 'Medium Priority',
                        completed: false
                    },
                    {
                        name: 'Idea Sprint',
                        dueDate: this._randomDate(),
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
                        dueDate: this._randomDate(),
                        status: 'Not Started',
                        priority: 'High Priority',
                        completed: false
                    },
                    {
                        name: 'Survey Evaluation',
                        dueDate: this._randomDate(),
                        status: 'In Progress',
                        priority: 'Medium Priority',
                        completed: false
                    },
                    {
                        name: 'B2B Research',
                        dueDate: this._randomDate(),
                        status: 'Paused',
                        priority: 'Low Priority',
                        completed: false
                    }
                ]
            }
        ];
    }

    private _randomDate(): Date {
        const today = new Date();
        const startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 3);
        const endDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3);
        const randomTimestamp = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
        return new Date(randomTimestamp);
    }
}
