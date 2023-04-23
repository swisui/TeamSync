import { Component } from '@angular/core';
import { TimelineEvent } from '../timeline-event';
import { addDays } from 'date-fns';

@Component({
    selector: 'timeline-task',
    templateUrl: './timeline-task.component.html',
    styleUrls: ['./timeline-task.component.scss']
})
export class TimelineTaskComponent {
    public events: Array<TimelineEvent>;

    constructor() {
        this.events = [
            {
                status: 'Task Finished',
                date: addDays(new Date(), -3),
                icon: 'pi pi-check-circle',
                message:
                    "Congratulations, the task has been completed! Please update the task status to reflect its completion and any relevant notes or comments. Take a moment to review the task and reflect on any lessons learned or areas for improvement. Celebrate your accomplishment and take pride in a job well done! Don't forget to communicate the completion of the task to any relevant stakeholders or team members. Thank you for your hard work and dedication to this project."
            },
            {
                status: 'Task Overdue',
                date: addDays(new Date(), -1),
                icon: 'pi pi-clock',
                message:
                    "Uh oh, it looks like this task is overdue! Please take immediate action to complete the task as soon as possible. Review the task description and any relevant details to ensure that you have all the necessary resources and information to complete it. If you need additional support or resources, don't hesitate to reach out to your team or supervisor for assistance. Remember, timely completion of tasks is crucial to the success of any project or initiative. Let's get back on track and prioritize this task to ensure its completion."
            },
            {
                status: 'New Task',
                date: addDays(new Date(), -1),
                icon: 'pi pi-bolt',
                message:
                    'Certainly, here\'s some text for a "New Task" section:\n' +
                    '\n' +
                    "Create a new task by filling out the form below. Be sure to include a clear and concise description of the task, along with any relevant details such as deadlines, priorities, and resources needed. Once submitted, the task will be added to your to-do list and you can track its progress from there. Don't forget to update the task status as you work on it and mark it as complete once finished. Let's get started!"
            },
            {
                status: 'New Comment',
                date: addDays(new Date(), -1),
                icon: 'pi pi-comment',
                message:
                    'Leave a comment below to share your thoughts on this topic. We welcome constructive feedback and respectful discussion. Please keep in mind our community guidelines and refrain from posting any offensive or inappropriate content. Thank you for contributing to the conversation!'
            }
        ];
    }
}
