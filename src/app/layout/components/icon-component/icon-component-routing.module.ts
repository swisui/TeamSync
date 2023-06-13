import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IconComponentComponent } from './icon-component.component';

const routes: Routes = [
    {
        path: '',
        component: IconComponentComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IconComponentRoutingModule {}
