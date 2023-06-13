import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimelineComponentComponent } from './timeline-component.component';

const routes: Routes = [
    {
        path: '',
        component: TimelineComponentComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TimelineComponentRoutingModule {}
