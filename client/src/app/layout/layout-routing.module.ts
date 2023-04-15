import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then(value => value.DashboardModule)
            },
            {
                path: 'calendar',
                loadChildren: () => import('./calendar/calendar.module').then(value => value.CalendarModule)
            },
            {
                path: 'overview',
                loadChildren: () => import('./overview/overview.module').then(value => value.OverviewModule)
            },
            {
                path: 'report',
                loadChildren: () => import('./report/report.module').then(value => value.ReportModule)
            },
            {
                path: 'new-task',
                loadChildren: () => import('./new-task/new-task.module').then(value => value.NewTaskModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
