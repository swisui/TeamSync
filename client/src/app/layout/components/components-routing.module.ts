import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components.component';

const routes: Routes = [
    {
        path: '',
        component: ComponentsComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'typography'
            },
            {
                path: 'typography',
                loadChildren: () => import('./typography/typography.module').then(value => value.TypographyModule)
            },
            {
                path: 'tab',
                loadChildren: () => import('./tab/tab.module').then(value => value.TabModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentsRoutingModule {}
