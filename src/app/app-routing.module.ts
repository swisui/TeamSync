import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./layout/layout.module').then(value => value.LayoutModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(value => value.LoginModule)
    },
    {
        path: 'signup',
        loadChildren: () => import('./signup/signup.module').then(value => value.SignupModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
