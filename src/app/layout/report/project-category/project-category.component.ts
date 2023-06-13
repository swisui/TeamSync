import { Component } from '@angular/core';
import { ProjectCategory } from '../../../models/project-category.model';

@Component({
    selector: 'project-category',
    templateUrl: './project-category.component.html',
    styleUrls: ['./project-category.component.scss']
})
export class ProjectCategoryComponent {
    public categories: Array<ProjectCategory>;

    constructor() {
        this.categories = [
            { text: 'Research', icon: 'pi pi-chart-bar', color: 'blue' },
            { text: 'Marketing', icon: 'pi pi-image', color: 'yellow' },
            { text: 'Operations', icon: 'pi pi-cog', color: 'orange' },
            { text: 'Customers', icon: 'pi pi-user', color: 'green' }
        ];
    }
}
