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
                loadChildren: () =>
                    import('./tab-component/tab-component.module').then(value => value.TabComponentModule)
            },
            {
                path: 'button',
                loadChildren: () =>
                    import('./button-component/button-component.module').then(value => value.ButtonComponentModule)
            },
            {
                path: 'form',
                loadChildren: () =>
                    import('./form-component/form-component.module').then(value => value.FormComponentModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentsRoutingModule {}
