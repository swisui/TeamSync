import { Component } from '@angular/core';

@Component({
    selector: 'main-breadcrumb',
    templateUrl: './main-breadcrumb.component.html',
    styleUrls: ['./main-breadcrumb.component.scss']
})
export class MainBreadcrumbComponent {
    public toggleSidebar() {
        // let elementById = document.getElementById('sidebar');
        // elementById.style.

        document.body.classList.toggle('show-sidebar');
    }
}
