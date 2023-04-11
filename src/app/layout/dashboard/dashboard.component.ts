import { Component } from '@angular/core';
import { Task } from '../../models/task.model';
import { Project } from '../../models/project.model';
import { Comment } from '../../models/comment.model';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
    public now: Date;
    public urgentTask: Array<Task>;

    public projectDirectory: Array<Project>;
    public newComments: Array<Comment>;
    public teamDirectory: Array<{ id: number; name: string; completed: boolean; due: Date }>;

    constructor() {
        this.now = new Date();
        this.urgentTask = [
            { id: 1, name: 'Finish Monthly Report', completed: false, due: new Date() },
            { id: 2, name: 'Report Signing', completed: false, due: new Date() },
            { id: 3, name: 'Market overview keynote', completed: false, due: new Date() },
            { id: 3, name: 'Deploy project to dev & staging', completed: false, due: new Date() },
            { id: 3, name: 'Prepare documentation', completed: false, due: new Date() },
        ];
        this.projectDirectory = [
            {
                name: 'Market Research 2024',
                user: [
                    { name: 'David', profilePicUrl: '' },
                    { name: 'Paul', profilePicUrl: '' },
                ],
            },
            { name: 'New Proposals', user: [{ name: 'David', profilePicUrl: '' }] },
            { name: 'Brand sprints', user: [{ name: 'David', profilePicUrl: '' }] },
            {
                name: 'Customer experience Q3',
                user: [
                    { name: 'David', profilePicUrl: '' },
                    { name: 'Paul', profilePicUrl: '' },
                    { name: 'John', profilePicUrl: '' },
                ],
            },
            { name: 'Report signing', user: [{ name: 'David', profilePicUrl: '' }] },
        ];
        this.newComments = [
            {
                user: 'John',
                project: 'Market Research 2024',
                message: 'Find my keynote attached in the documents',
                profileImageUrl: '',
            },
            {
                user: 'Dana R.',
                project: 'Market Research 2024',
                message: "I've added some new data. Let's connect after daily stand up.",
                profileImageUrl: '',
            },
        ];
        this.teamDirectory = [];
    }
}
