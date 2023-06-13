import { Component } from '@angular/core';
import { Project } from '../../../models/project.model';

@Component({
    selector: 'project-directory',
    templateUrl: './project-directory.component.html',
    styleUrls: ['./project-directory.component.scss']
})
export class ProjectDirectoryComponent {
    public projectDirectory: Array<Project>;

    constructor() {
        this.projectDirectory = [
            {
                name: 'Market Research 2024',
                user: [
                    { name: 'David', profilePicUrl: '/assets/images/profile-pics/1.jpg' },
                    { name: 'Paul', profilePicUrl: '/assets/images/profile-pics/2.jpg' }
                ]
            },
            { name: 'New Proposals', user: [{ name: 'David', profilePicUrl: '/assets/images/profile-pics/4.jpg' }] },
            { name: 'Brand sprints', user: [{ name: 'David', profilePicUrl: '/assets/images/profile-pics/3.jpg' }] },
            {
                name: 'Customer experience Q3',
                user: [
                    { name: 'David', profilePicUrl: '/assets/images/profile-pics/1.jpg' },
                    { name: 'Paul', profilePicUrl: '/assets/images/profile-pics/5.jpg' },
                    { name: 'John', profilePicUrl: '/assets/images/profile-pics/6.jpg' }
                ]
            },
            { name: 'Report signing', user: [{ name: 'David', profilePicUrl: '/assets/images/profile-pics/4.jpg' }] }
        ];
    }
}
