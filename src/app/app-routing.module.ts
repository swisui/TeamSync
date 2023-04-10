import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./layout/layout.module').then(value => value.LayoutModule),
    },
    {
        path: 'login',
        loadChildren: () => import('./layout/layout.module').then(value => value.LayoutModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
